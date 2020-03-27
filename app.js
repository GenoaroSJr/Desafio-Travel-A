//Requiring modules
const express = require('express');
const handlebars = require('express-handlebars');
const bodyParser = require('body-parser');
const app = express();
const mongoose = require('mongoose');

const admin = require('./routes/admin');

//Settings
//Body Parser
app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())
//Handlebars
app.engine('handlebars', handlebars({ defaultLayout: 'main' }))
app.set('view engine', 'handlebars');
//Mongoose

//Routes
app.get('/', (req,res)=>{
    res.send('Main page')
})

app.get('/success', (req,res)=>{
    res.send('Success Page');
})

app.use('/admin', admin);

const PORT = 8081;
app.listen(PORT, () => {
    console.log("Server Running (http://localhost:8081)")
})