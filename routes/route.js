const express = require("express");
const newRouter = express.Router();
const bodyParser = require("body-parser");
const controller = require("../controllers/userController")
// const app = express();

newRouter.get("/", (req,res)=> {
    res.redirect("/registerUser");
})

newRouter.get("/registerUser",(req,res)=>{
    res.render("signup");
})

newRouter.post("/registerUser",controller.registerUser);

newRouter.get("/loginUser", (req,res)=>{
    res.render("login");
});

newRouter.post("/loginUser", controller.loginUser);



module.exports = newRouter;