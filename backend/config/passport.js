const googleStrategy = require('passport-google-oauth20').Strategy;
const passport = require('passport');

passport.use(
    new googleStrategy({
        clientID:process.env.GOOGLEID,
        clientSecret:process.env.GOOGLESECRET,
        callbackURL:"/auth/google",
        scope:["profile","email"]
    },
    function(accessToken,refreshToken,profile,callback){
        callback(null,profile);
    }
    )
)
passport.serializeUser((user,done)=>{
    done(null,user);
})
passport.deserializeUser((user,done)=>{
    done(null,user);
})