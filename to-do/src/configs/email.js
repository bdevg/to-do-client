const nodemailer = require('nodemailer');
export const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: 'yourEmail@gmail.com',
      pass: 'pass-your'
    }
});
