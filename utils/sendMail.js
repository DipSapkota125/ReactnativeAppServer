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
    from: process.env.MAILTRAP_USER,
    to: email,
    subject,
    text,
  };

  await transporter.sendMail(mailOptions);
};

// import { createTransport } from "nodemailer";

// export const sendMail = async (email, subject, text) => {
//   const transport = createTransport({
//     host: process.env.SMTP_HOST,
//     port: process.env.SMTP_PORT,
//     auth: {
//       user: process.env.SMTP_USER,
//       pass: process.env.SMTP_PASS,
//     },
//   });

//   await transport.sendMail({
//     from: process.env.SMTP_USER,
//     to: email,
//     subject,
//     text,
//   });
// };
