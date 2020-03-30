//Requiring modules
const express = require('express');
const handlebars = require('express-handlebars');
const bodyParser = require('body-parser');
const app = express();
const path = require('path');

const mongoose = require('mongoose');


//Settings
//Body Parser
app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())
//Handlebars
app.engine('handlebars', handlebars({ defaultLayout: 'main' }))
app.set('view engine', 'handlebars');
//Mongoose
mongoose.Promise = global.Promise; //Avoid Error
mongoose.connect('mongodb://localhost/travelA').then(()=>{
    console.log("Connected to the mongo")
}).catch((err) => {
    console.log("Error connecting to the mongo "+err)
})
//Public
app.use(express.static(path.join(__dirname,"public")))

//Import
require("./models/Register");
const Register = mongoose.model("register");

//Routes
app.get('/', (req,res)=>{
    res.render('index')
})

app.post('/register/new', (req,res)=>{

    const newRegister = {
        name: req.body.name,
        phone: req.body.phone,
        origin: req.body.origin,
        destination: req.body.destination,
        date_from: req.body.date_from,
        date_to: req.body.date_to,
        trav_numb: req.body.trav_numb
    }

    new Register(newRegister).save().then(() => {
        console.log("Successfully registered!!");
    }).catch((err) => {
        console.log("Error registering!!"+err);
    })

    res.render('thanks')
})

const PORT = 8081;
app.listen(PORT, () => {
    console.log("Server Running (http://localhost:8081)")
})