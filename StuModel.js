const mongoose = require("mongoose");
mongoose.connect("mongodb://localhost:27017/mydatabase");

const stuSchema = new mongoose.Schema({
    name:String,
    age:Number,
    address:String
});

const StuModel = mongoose.model("stus",stuSchema);

module.exports = StuModel;