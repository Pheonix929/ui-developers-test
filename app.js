var express = require('express');
var nodemailer = require('nodemailer');
var app = express();

app.use(express.static('public'));

var email = 'pheonix929@gmail.com';
var subject = 'Sending Email using Node.js';
var data = 'That was easyer!';

app.get("/", function(req, res){

    res.render("index.ejs");

});

app.post("/", function(req, res){

    res.render("sent.ejs");

});


var mail = function(email, subject, data){

    var transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
        user: 'amichaeltestthing@gmail.com',
        pass: 'sometypeofpassword'
        }
    });
    
    var mailOptions = {
        from: 'amichaeltestthing@gmail.com',
        to: email,
        subject: subject,
        text: data
    };
    
    transporter.sendMail(mailOptions, function(error, info){
        if (error) {
        console.log(error);
        } else {
        console.log('Email sent: ' + info.response);
        }
    });

}

//mail(email, subject, data);

app.listen(3000, function(){
    console.log("Test App is running");
});