import nextConnect from "next-connect";
import multer from "multer";
import sharp from "sharp";
import fs from "fs/promises";
import slugify from "slugify";
import { connectToDatabase } from "../../helper/db-util";

// SLUG NAMING
const slug = (name) => {
  return slugify(name, {
    replacement: "_",
    lower: true,
  });
};

// MULTER MIDDLEWARE
const multerStorage = multer.memoryStorage();
const multerFilter = (req, file, cb) => {
  if (req.body.admin !== process.env.ADMIN) {
    return cb(new Error("You are not authorized!"), false);
  } else {
    cb(null, true);
  }
};
const upload = multer({
  storage: multerStorage,
  fileFilter: multerFilter,
});
const uploadMiddleware = upload.single("image");

// SHARP RESIZE IMAGE MIDDLEWARE
const resizeImage = async (req, res, next) => {
  if (!req.file) return next();

  const imageSlug = slug(req.body.name);

  req.body.imageName = `${imageSlug}.jpeg`;
  await sharp(req.file.buffer)
    .resize(2000, 1333)
    .toFormat("jpeg")
    .jpeg({ quality: 90 })
    .toFile(
      process.cwd() + `\\public\\images\\projects\\${req.body.imageName}`
    );

  next();
};

const projects = nextConnect({
  onError(error, req, res) {
    res
      .status(501)
      .json({ message: `Sorry something Happened! ${error.message}` });
  },
  onNoMatch(req, res) {
    res.status(405).json({ message: `Method '${req.method}' Not Allowed` });
  },
});

// ADD PROJECT
projects
  .use(uploadMiddleware)
  .use(resizeImage)
  .post(async (req, res) => {
    const { name, description, techStr, siteURL, gitHub } = req.body;
    const tech = techStr.split(",");
    const image = `/images/projects/${req.body.imageName}`;
    const newProject = {
      name,
      description,
      tech,
      siteURL,
      gitHub,
      image,
    };

    const { db } = await connectToDatabase();

    await db.collection("projects").insertOne(newProject);

    res.status(200).json({
      newProject,
    });
  })
  // DELETE PROJECT
  .delete(async (req, res) => {
    const { admin, name } = req.body;

    if (admin !== process.env.ADMIN) {
      return res.status(401).json({ message: "You are not authorized!!!" });
    }

    const imageSlug = slug(name);

    const imagePath =
      process.cwd() + `\\public\\images\\projects\\${imageSlug}.jpeg`;

    const { db } = await connectToDatabase();
    await db.collection("projects").deleteOne({ name: name });

    await fs.unlink(imagePath);

    res.status(200).json({ message: "Project is deleted!" });
  });

export default projects;

export const config = {
  api: {
    bodyParser: false, // Disallow body parsing, consume as stream
  },
};
