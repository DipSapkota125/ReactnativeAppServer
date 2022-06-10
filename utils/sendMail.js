import nodeMailer from "nodemailer";

export const sendMail = async (email, subject, text) => {
  const transporter = nodeMailer.createTransport({
    host: process.env.MAILTRAP_HOST,
    port: process.env.MAILTRAP_PORT,
    // service: process.env.SMTP_SERVICE,
    // secure: true,
    auth: {
      user: process.env.MAILTRAP_USER,
      pass: process.env.MAILTRAP_PASS,
    },
  });

  const mailOptions = {
    from: process.env.MAILTRAP_MAIL,
    to: email,
    subject,
    text,
  };

  await transporter.sendMail(mailOptions);

  // await transporter.sendMail(
  //   {
  //     from: process.env.MAILTRAP_USER,
  //     to: email,
  //     subject,
  //     text,
  //   },
  //   (error) => {
  //     if (error) {
  //       return console.log("There was an error: " + error);
  //     }
  //     console.log("Email sent successfully");
  //   }
  // );

  // const mailOptions = {
  //   from: process.env.SMPT_MAIL,
  //   to: options.email,
  //   subject: options.subject,
  //   text: options.text,
  // };
  // await transporter.sendMail(mailOptions);
};
