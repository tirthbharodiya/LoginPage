const express = require("express");
const mongoose = require("mongoose");
const ejs = require("ejs");
const bodyParser = require("body-parser");
const User = require("./model/models")
const newRoute  = require("./routes/route")
const controller = require("./controllers/userController")

const app = express();


app.set("view engine","ejs"); //Using EJS(Embeded javascript Engine)
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(__dirname + "/public")); //Used for static files (css,images) etc 

mongoose.connect("mongodb://localhost:27017/projectDB") //Connecting database
.then(()=>{
    console.log("Databse Connected");
})
.catch(()=>{
    console.log("Not connected");
})
app.use("/" , newRoute); //Route


app.listen("3000", function (err) { //Server is listening on port 3000
    if (!err) {
        console.log("Server is running on port 3000");
    }
})