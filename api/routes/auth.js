const router = require("express").Router()
const User = require("../models/User")
const {createUser,loginUser} = require("../controllers/authCtrl")


//REGISTER
router.post("/register",createUser)


//LOGIN
router.post("/login",loginUser)




module.exports = router