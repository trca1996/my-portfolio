const nodemailer = require('nodemailer')

module.exports = class Email {
  constructor(name, email, message) {
    this.message = message
    this.name = name
    this.from = `${name} <${email}>`
    this.email = email
  }

  newTransport() {
    return nodemailer.createTransport({
      host: process.env.EMAIL_HOST,
      port: process.env.EMAIL_PORT,
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    })
  }

  // Send the actual email
  async send() {
    // 1) Render HTML based on a pug template
    const text = `${this.message} \n\n\n Message from: \nName: ${this.name}\nEmail: ${this.email}`

    // 2) Define email options
    const mailOptions = {
      from: this.from,
      to: process.env.NEXT_PUBLIC_MY_EMAIL,
      subject: 'Message from Portfolio',
      text: text,
    }

    // 3) Create a transport and send email
    const info = await this.newTransport().sendMail(mailOptions)
  }
}
