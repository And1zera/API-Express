const nodemailer = require('nodemailer');
const path = require('path');
const hbs = require('nodemailer-express-handlebars');

const { host,port,user,pass } = require('../config/mail.json');

const transport = nodemailer.createTransport({
    host,
    port,
    auth: { user,pass },
  });

  const handblebarsOptions = {
    viewEngine: {
      extName: '.html',
      partialsDir: path.resolve('./src/resource/mail/auth/'),
      layoutsDir: path.resolve('./src/resource/mail/auth/'),
      defaultLayout: null,
    },
    viewPath: path.resolve('./src/resource/mail/'),
    extName: '.html'
  };

transport.use('compile', hbs(handblebarsOptions));

module.exports = transport;