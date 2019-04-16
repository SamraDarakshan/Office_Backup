var nodemailer = require('nodemailer');
//var smtpTransport = nodemailer.createTransport("SMTP",{
var transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'samra.darakshan@gmail.com',
    pass: '@awldabest.1234'
  }
});

var mailOptions = {
  from: 'samra.darakshan@gmail.com',
  to: 'samra.darakshan4@gmail.com', // to: 'myfriend@yahoo.com, myotherfriend@yahoo.com',
  subject: 'Sending Email using Node.js',
  text: 'That was easy!'
  //html: '<h1>Welcome</h1><p>That was easy!</p>'
};

transporter.sendMail(mailOptions, function(error, info){
  if (error) {
    console.log(error);
  } else {
    console.log('Email sent: ' + info.response);
  }
});
