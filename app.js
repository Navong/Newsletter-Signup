const express = require('express');
const https = require('https');
const bodyParser = require('body-parser');
const request = require('request');
const { mainModule } = require('process');

const app = express();

app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static('public'));

//1. make a new route
app.get('/', (req, res)=>{
    res.sendFile(__dirname + '/signup.html');
});

app.post('/', (req, res)=>{
    var firstName = req.body.fname;
    var lastName = req.body.lname;
    var email = req.body.email;

    console.log(firstName, lastName, email);
});

//2. set up server port
app.listen(3000, ()=>{
    console.log('Server is running on port 3000.');
});



//API Key
// 84497754eaf8b9f3d24591fa87b61b8d-us9

//List id
// ca75e8e5bc