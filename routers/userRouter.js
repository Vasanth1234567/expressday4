const { getAllUser, userValidation } = require("../controller/userController")

const express=require('express')
const { checkLogger } = require("../middlewares/userLogger")
const router=express.Router()
router.get("/getAllUsers",getAllUser)
router.post("/userValidation/:user/:pass",checkLogger,userValidation)
module.exports=router