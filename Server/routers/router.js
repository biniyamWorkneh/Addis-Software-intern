const express = require('express');
const router = express.Router()

const {getSongs,addSong,updateSong,deleteSong,uploads} = require('../Controllers/controller')
router.get('/getSongs',getSongs);
router.post('/addSongs',uploads.single('file'),addSong);
router.patch('/updateSongs/:id',updateSong);
router.delete('/deleteSong/:id',deleteSong);

module.exports = router