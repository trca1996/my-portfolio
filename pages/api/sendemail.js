const Email = require('./../../helper/email')

const sendemail = async (req, res, next) => {
  if (req.method === 'POST') {
    const { name, email, message } = req.body

    if (
      !name ||
      name.length < 4 ||
      !email ||
      !email.includes('@') ||
      !message ||
      message.length < 50
    ) {
      res.status(422).json({
        message: `Please enter the full name, correct email, and appropriate message`,
      })
      return
    }

    try {
      await new Email(name, email, message).send()
      return res.status(200).json({ message: 'Email was send!' })
    } catch (err) {
      return res
        .status(500)
        .json({ message: 'Something went wrong! Try later.' })
    }
  }
}

export default sendemail
