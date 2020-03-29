const express = require('express')
const router = express.Router()
const mongoose = require('mongoose');
require("../models/Register");
const Register = mongoose.model("register");

router.get('/', (req,res)=>{
    Register.find().then((registers) => {
        res.render("admin/index", {registers: registers})
    }).catch((err) => {
        res.redirect("/")
        console.log("ERRO: "+err)
    })
    res.render("admin/index");
});

module.exports = router