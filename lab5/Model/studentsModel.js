const mongoose = require("mongoose");
var DB_URL = "mongodb://localhost:27017/University";

mongoose.connect(DB_URL,{useNewUrlParser:true});

let studentsSchema = new mongoose.Schema({
    id:{type : Number , required:true},
    name:{type:String, required:true},
    age:{type:Number,required:true},
    department:{type:String , required:true}
})
 
module.exports = mongoose.model("Students", studentsSchema);