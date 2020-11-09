const nodemailer = require("nodemailer");
require("dotenv").config();

const emailer = async (email, name, mobile) => {
  let transporter = nodemailer.createTransport({
    service: "gmail",
    auth: { user: process.env.MY_MAIL, pass: process.env.MY_GMAIL_KEY },
  });

  const mailOptions = {
    from: process.env.MY_MAIL,
    to: email,
    bcc: process.env.MY_MAIL_BCC,
    subject: "back to back",
    html: `<h1> Hello ${name} </h1>
    <p>Thanks for your attention.</p>
    <p>Im contact you  in your mobile : ${mobile} soon,</p>
    <p>Thank you.</p>`,
  };
  let toSend = await transporter.sendMail(mailOptions, function (error, info) {
    // console.log("error : " + JSON.stringify(error));
    // console.log("info : " + JSON.stringify(info));
  });
};

module.exports = emailer;
