const router = require("express").Router();
const {handleRegister,handleLogin,handleLogout,
    handlePlaylist,handlePlaylistData,handleDeletePlaylist} = require("../controller/userController")

router.post('/register',handleRegister);
router.post('/login',handleLogin);
router.get('/logout',handleLogout);
router.patch('/playList/:gid',handlePlaylist);
router.get('/playList/:gid',handlePlaylistData);
router.delete('/playList/:gid',handleDeletePlaylist);

module.exports = router;
