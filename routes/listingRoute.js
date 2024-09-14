const express =  require('express');
const { createListing, deleteListing, updateListing, getListing, getListings} = require('../controllers/listingController');
// import { createListing, deleteListing } from '../controllers/listing.controller.js';
const { verifyToken } = require('../utils/verifyUser');

const router = express.Router();

router.post('/create', verifyToken, createListing);
router.post('/update/:id', verifyToken, updateListing)
router.delete('/delete/:id', verifyToken, deleteListing);
router.get('/get/:id',  getListing);
router.get('/get', getListings);

// export default router;
module.exports = router