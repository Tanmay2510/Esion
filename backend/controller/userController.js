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
                        res.json({
                            login:false,
                            message:"Error"
                        })
                    }else{
                        req.session.name = user.Name;
                        req.session.email = email;
                        res.setHeader('Set-Cookie',`userId=${user._id}; Max-Age=${60*60*24}`)
                        res.json({
                            id:user._id,
                            login:true,
                            message:"User registered",
                            Name:name,
                        })
                    }
                })
            }
        })
    })
}
const handleLogin = (req,res) =>{
    console.log(req.params)
        const {email,password} = req.body;
        User.findOne({email:email},(err,user)=>{
            if(user){
                bcrypt.compare(password,user.password,function(err,result){
                    if(result===true){
                        req.session.name = user.Name;
                        req.session.email = email;
                        // res.setHeader('Set-Cookie',`userId=${user._id}; Max-Age=60*60*24`)
                        res.setHeader('Set-Cookie',`userId=${user._id}; Max-Age=${60*60*24}`)

                        res.json({
                            login:true,
                            id:user._id,
                            message:"User Found!!",
                            Name:user.Name
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
                        message:"User not registered"
                })
        }
        })
}
const handleLogout = (req,res)=>{
    res.clearCookie('sessionId')
    res.clearCookie('userId')
    req.session.destroy();
    res.send({
            login:false,
            message:"User logged out"
    })
}
const handlePlaylist = (req,res)=>{
    console.log(req.body)
    const id = req.headers.cookie.substring(7, req.headers.cookie.indexOf(";"));
        User.findByIdAndUpdate({_id:id},{userPlaylist: `${req.body}`}, function(err, result){

            if(err){
                res.send(err)
            }
            else{
                console.log(result)
                res.send(result)
            }
      
    })

}
module.exports={handleRegister,handleLogin,handleLogout,handlePlaylist};