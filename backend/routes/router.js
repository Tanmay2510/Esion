const router = require("express").Router();
const {handleRegister,handleLogin,handleLogout,handlePlaylist} = require("../controller/userController")

router.post('/register',handleRegister);
router.post('/login',handleLogin);
router.get('/logout',handleLogout)
router.post('/playList',handlePlaylist)
module.exports = router;
