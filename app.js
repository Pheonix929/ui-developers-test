var express = require('express');
var nodemailer = require('nodemailer');
var bodyParser = require('body-parser');

var app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static('public'));

var smtpTransport = nodemailer.createTransport({
    pool: true,
    host: 'smtp.domain.co.za',
    port: 587,
    auth: {
        user: 'email@domain.co.za',
        pass: '*******'
    },
    tls: {
        rejectUnauthorized: false
    }
});

app.get("/", function(req, res){
    res.render("index.ejs");
});

app.post("/", function(req, res){
    var email = req.body.formEmail;
    var name = req.body.formName;
    
    var mailOptions = {
        from: 'email@domain.co.za',
        to: email,
        subject: 'Mountaineer Email Test App',
        text: name + ' thanks for signing up!'
    };
    
    smtpTransport.sendMail(mailOptions, function(error, info){
        if (error) {
            console.log(error);
        } else {
            console.log('Email sent: ' + info.response);
            var data = req.body;
            res.render("sent.ejs", {data:data});
        }
    });
});

app.listen(3000, function(){
    console.log("Test App is running");
});