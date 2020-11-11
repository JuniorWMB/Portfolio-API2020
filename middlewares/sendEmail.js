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
    subject: "Contact Request Received",
    html: `<h4> Hello ${name} </h4>
    <p>Thanks for getting in touch.</p>
    <p>I will get back to you within 2 working days on: ${mobile} </p>
    <br/>
    <p>Kind Regards, Junior.</p>`,
  };
  let toSend = await transporter.sendMail(mailOptions, function (error, info) {
    // console.log("error : " + JSON.stringify(error));
    // console.log("info : " + JSON.stringify(info));
  });
};

module.exports = emailer;
