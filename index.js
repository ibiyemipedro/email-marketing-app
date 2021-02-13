const nodemailer = require("nodemailer");

const authKeys = require("./auth/config");
const emailParams = require("./auth/emailParams");
const campaign_mail = require("./res/emails/campaign");

// const nodemailer = require('nodemailer');
const nodemailerSendgrid = require('nodemailer-sendgrid');

const transporter = nodemailer.createTransport(
    nodemailerSendgrid({
        apiKey: authKeys.sendGridAPI
    })
);

// send mail with defined transport object
var mailOptions = {
    from: emailParams.from, // sender address
    to: emailParams.to, // list of receivers
    subject: emailParams.subject, // Subject line
    html: campaign_mail // html body
};


transporter.sendMail(mailOptions, function (error, info) {
    if (error) {
        console.log(error);
    } else {
        console.log('Email sent: ' + info.response);
    }
});
