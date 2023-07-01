// Tạo khung cho database
const mongoose = require("mongoose");


const personSchema = new mongoose.Schema({
    name : {
        type : String,
        require : true
    },
    age : {
        type : String
    },
    address : {
        type : String
    }
})

let Person = mongoose.model("persons",personSchema);

module.exports =  Person  ;