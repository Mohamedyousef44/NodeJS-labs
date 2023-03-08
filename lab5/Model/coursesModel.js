const mongoose = require("mongoose");
var DB_URL = "mongodb://localhost:27017/University";

mongoose.connect(DB_URL,{useNewUrlParser:true});

let coursesSchema = new mongoose.Schema({

    id:{type:Number,required:true},
    name:{type:String, required:true},
    
})

module.exports = mongoose.model("Courses", coursesSchema);