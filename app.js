//Requiring modules
const express = require('express');
const handlebars = require('express-handlebars');
const bodyParser = require('body-parser');
const app = express();
const mongoose = require('mongoose');
const path = require('path');

const admin = require('./routes/admin');

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

//Routes
app.get('/', (req,res)=>{
    res.render('index')
})

app.get('/success', (req,res)=>{
    res.send('Success Page');
})

app.use('/admin', admin);

const PORT = 8081;
app.listen(PORT, () => {
    console.log("Server Running (http://localhost:8081)")
})