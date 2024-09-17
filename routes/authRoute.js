const express = require('express');
const router = express.Router();
// import signin from '../controllers/auth.controller.js';
const  {google, signin, signup, signout } = require('../controllers/authController');
// const signin = require("../controllers/authController")

// const Signin = require('../controllers/auth.controller.js')
// const Signup = require('../controllers/auth.controller.js')




router.post("/signup", signup); 
router.post("/signin", signin); 
router.post("/google", google); 
router.get("/signout", signout); 


module.exports = router