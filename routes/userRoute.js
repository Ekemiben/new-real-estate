const express =  require('express');
const { test } = require('../controllers/userController');
const { verifyToken } = require('../utils/verifyUser');
const { updateUser, deleteUser, getUserListings, getUser } = require('../controllers/userController');
// import {  } from '../controllers/user.controller.js';


const router = express.Router();

router.get('/test', test)
router.post('/update/:id', verifyToken, updateUser);
router.get('/getlisting/:id', verifyToken, getUserListings)
router.delete('/delete/:id', verifyToken, deleteUser);
router.get('/:id', verifyToken, getUser)

// export default router
module.exports = router