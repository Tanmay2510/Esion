const router = require("express").Router();
const {handleRegister,handleLogin,handleLogout} = require("../controller/userController")

router.post('/register',handleRegister);
router.post('/login',handleLogin);
router.get('/logout',handleLogout)
module.exports = router;
