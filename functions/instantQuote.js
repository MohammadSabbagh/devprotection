const formData = require('form-data');
const Mailgun = require('mailgun.js');

const { MAILGUN_API_KEY } = process.env;
const { MAILGUN_EMAIL } = process.env;

const DOMAIN = 'devprotection.net';
const EMAIL_RECV = MAILGUN_EMAIL || 'mohammad.sabbagh@gmail.com';

const config = {
  username: 'api',
  key: MAILGUN_API_KEY,
  url: 'https://api.eu.mailgun.net'
}

exports.handler = async function (event, context, callback) {

  const { message, senderEmail, senderMobile, senderName } = JSON.parse(event.body);

  const mailgun = new Mailgun(formData);
  const mg = mailgun.client(config);


  const msg = `
    Name: ${senderName}
    Mobile: ${senderMobile}
    Email: ${senderEmail}
    Description: ${message}

    --
    This e-mail was sent from 4space.ae
    `;

  const mailObj = {
      from: "4SPACE website <website@4space.com>",
      to: [EMAIL_RECV],
      subject: "4SPACE Website - Instant Quote",
      text: msg,
    };

  try {
    await mg.messages.create(DOMAIN, mailObj);
    console.log('sent successfuly');
    return {
      statusCode: 200,
      body: 'Message sent',
    };
  } catch (err) {
    console.log('error cant sent',err);
    return {
      statusCode: err.code,
      body: JSON.stringify({ msg: err.message }),
    };
  }
};
