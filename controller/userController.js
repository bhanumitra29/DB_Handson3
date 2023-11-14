const userAccount = require("../model/usermodel")

const register = async(req,res)=>{
    const data= {
        name:"Bhanu",
        email:"bhanu@gmail.com",
        password:"bhanu123",
        mobileNumber:1234567
    }
    const response = await userAccount.create(data);
    console.log(response)
    return res.send(response)
}

const login= async(req,res)=>{
    const data = {
        email:"bhanu@gmail.com",
        password:"bhanu123",
    }

    const result = await userAccount.findOne({email:data.email})
    return res.send(result)
}

module.exports = {register,login}