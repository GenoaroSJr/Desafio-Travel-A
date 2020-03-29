const mongoose = require("mongoose")
const Schema = mongoose.Schema;

const Register = new Schema({
    name:{
        type: String,
        required: true,
    },
    phone:{
        type: String,
        required: true
    },
    origin:{
        type: String,
        required: true
    },
    destination:{
        type: String,
        required: true
    },
    date_from:{
        type: Date,
        required: true
    },
    date_to:{
        type: Date,
        required: true
    },
    trav_numb:{
        type: Number,
        required: true
    },
    date:{
        type: Date,
        default: Date.now()
    }
})

mongoose.model("register", Register);