const express = require('express')
const router = express.Router()

router.get('/', (req,res)=>{
    res.send("ADM panel main page");
});

module.exports = router