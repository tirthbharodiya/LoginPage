const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const User = require("../model/models");
const app = express();

app.use(bodyParser.urlencoded({ extended: true }));

let isValid = function (value) {  //Validating Username and password values
    if(value === null || value.length < 6){
        return false;
    }else{
        return true
    }
}

let SelectedRole = function(value){  //validating Role's value
    if(value == null){
        return false;
    }
    else{
    return true;
    }
}


const registerUser = (req, res) => {
    const userData = req.body;
    const { name, role, username, password } = userData; //Destructuring

    if (!isValid(username) || !isValid(password) || !SelectedRole(role)) { //Validation
       console.log("Invalid");
        res.status(400).redirect("/registerUser");
    }
    else{
        try{
            const newUser = new User({  //Adding new user 
                name: req.body.name,
                role: req.body.role,
                username: req.body.username,
                password: req.body.password,
                isExist: true
            })
            newUser.save();
            res.redirect("/loginUser");
        }
        catch (err) {
            res.status(500).send("Internal Server Error");
        }
    }
}



const loginUser = async (req, res) => {  //Login into the System
    try {
        const userRole = req.body.role;
        const user = req.body.username;
        const pass = req.body.password;
        const userMail = await User.findOne({ username: user });
        if (userMail.password === pass && userMail.role === userRole) {
            res.status(201).send("Welcome " + userMail.name);
        } else {
            res.send("Invalid Password or Role");
        }
    }
    catch (err) {
        res.status(404).send("Invalid User Details");
    }
}
// modulr.export = {};
module.exports = { registerUser, loginUser };
// module.exports = [authUser];
