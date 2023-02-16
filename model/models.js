const mongoose = require("mongoose");

let loginSchema = new mongoose.Schema({ //Declaring Databse schema
    name: String,
    role: String,
    username: String,
    password: String,
    isModified:String,
    updatedOn:Date,
    isExist: Boolean
});

let User = mongoose.model("User", loginSchema);

module.exports = User;