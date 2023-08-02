const express = require('express');
const dotenv = require('dotenv').config();
const bodyParser = require('body-parser');
const https = require("https");

const app = express();
app.use(express.static("public"));
app.use(bodyParser.urlencoded({extended: true}));

app.get('/', function(req, res) {
    res.sendFile(__dirname + "/main.html");
});

app.get('/register', function(req, res) {
    res.sendFile(__dirname + "/register.html");
});

app.get('/login', function(req, res) {
    res.sendFile(__dirname + "/login.html");
});

app.post('/register', function(req, res){
    const userFirstName = req.body.userFirstName;
    const userLastName = req.body.userLastName;
    const userEmail = req.body.userEmail;
    const userPassword = req.body.userPassword;
    const confirmUserPassword = req.body.confirmUserPassword;
    //console.log(userName);
    //console.log(userEmail);
    //console.log(userPassword);
    //console.log(confirmUserPassword);
    const data = {
        members: [
            {
                email_address: userEmail,
                status: "subscribed",
                merge_fields: {
                    FNAME: userFirstName,
                    LNAME: userLastName,
                }
            }
        ]
    };
    const jsonData = JSON.stringify(data);
    const url = "https://us21.api.mailchimp.com/3.0/lists/8b6c0ebe18";
    const options = {
        method: "POST",
        auth: "MatheusF:62c58dc1d2c6c288a08c0e9409973eca-us21"
    }
    const request = https.request(url, options, function(response){
        response.on("data", function(data){
            console.log(JSON.parse(data));
        })
    })

    request.write(jsonData);
    request.end();
    
    res.sendFile(__dirname + "/register.html");
});

app.post('/login', function(req, res){
    var userEmail = req.body.userEmail;
    var userPassword = req.body.userPassword;
    console.log(userEmail);
    console.log(userPassword);
    res.sendFile(__dirname + "/login.html");
});

app.listen(process.env.port, function() {
    console.log('Listening on port ' + process.env.port);
});

//API Key
// 62c58dc1d2c6c288a08c0e9409973eca-us21

//List Id
// 8b6c0ebe18
