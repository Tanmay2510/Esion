// const bcrypt = require('bcrypt');
require('dotenv/config');

const saltRounds =  9;

const {User} = require("../model/userModel")
const bcrypt = require("bcrypt")
const handleRegister = (req,res) =>{
    const {email,password,name} = req.body;
    bcrypt.hash(password,saltRounds,function(err,hash){
        User.findOne({email:email},(err,foundUser)=>{
            if(foundUser){
                res.json({
                    login:false,
                    message:"User already registered"
                })
            }else{
                const user = new User({
                    Name:name,
                    email:email,
                    password:hash,
                })
                
                user.save(err=>{
                    if(err){
                        console.log(err)
                        res.json({
                            login:false,
                            message:"Error"
                        })
                    }else{
                        res.json({
                            login:true,
                             message:"User  registered"

                        })
                    }
                })
            }
        })
    })
    
}
const handleLogin = (req,res) =>{
        const {email,password} = req.body;
        User.findOne({email:email},(err,user)=>{
            if(user){
                bcrypt.compare(password,user.password,function(err,result){
                    if(result===true){
                        res.json({
                            login:true,
                            message:"User Found!!",
                            // email:req.session.email
                    })
                    }else{
                        res.json({
                                login:false,
                                message:"Password didn't match"
                        })
                }
                })
            }else{
                res.json({
                        login:false,
                        matched:false,
                        message:"User not registered"
                })
        }
        })

}
module.exports={handleRegister,handleLogin};