const express = require('express');
const router = express.Router();
const bcrypt = require('bcryptjs');
//load admin model
const Admin = require('../../models/Admin')

// @route   GET api/admin/
// @desc    tests admin route
// @access  Public
router.get('/',(req,res)=>{
    console.log("test found");
    res.json({msg:"admin here !"})
});

// @route   POST api/admin/register
// @desc    register admin
// @access  Public
router.post('/register',(req,res)=>{
    const newAdmin = new Admin({
        username: req.body.username,
        password: req.body.password,
        email: req.body.email
    })
    bcrypt.genSalt(10,(err,salt)=>{
        bcrypt.hash(newAdmin.password,salt,(err,hash)=>{
            if(err) throw err;
            newAdmin.password = hash;
            newAdmin
                .save()
                .then(admin=>res.json(admin))
                .catch(err=>console.log(err));
        })
        
    })
})

module.exports = router;