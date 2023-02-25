// const bcrypt = require('bcrypt');
const saltRounds = process.env.SALT;

const handleRegister = (req,res) =>{
    console.log(req.body);

}
const handleLogin = (req,res) =>{
    console.log(req.body);

}
module.exports={handleRegister,handleLogin};