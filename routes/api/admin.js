const express = require('express');
const router = express.Router();

// @route   GET api/admin/test
// @desc    tests admin route
// @access  Public
router.get('/test',(req,res)=>res.json({msg:"admin here !"}));

module.exports = router;