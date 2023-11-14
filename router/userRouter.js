const express = require('express');
const { dataEntry, getAllEmployees, getHighSalaryEmployees, getExperiencedEmployees, getRecentGraduatesWithExperience, updateHighSalaryEmployees, deleteEmployeesFromCompanyY } = require('../controller/edataController');
// const { register, login } = require('../controller/userController');

const userRouter = express.Router();

// userRouter.get("/register",register)
// userRouter.get("/login",login)

userRouter.post("/datacreate",dataEntry)
userRouter.get("/getallemp",getAllEmployees)
userRouter.get("/gethighsal",getHighSalaryEmployees)
userRouter.get("/getexp",getExperiencedEmployees)
userRouter.get("/getgrdexp",getRecentGraduatesWithExperience)
userRouter.put("/updsal",updateHighSalaryEmployees)
userRouter.delete("/deley",deleteEmployeesFromCompanyY)

module.exports = {userRouter}



