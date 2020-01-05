const express = require('express');
const router = express.Router();
const bcrypt = require('bcryptjs');
//load admin model
const Admin = require('../../models/Admin')

// @route   GET api/admin/test
// @desc    tests admin route
// @access  Public
router.get('/test',(req,res)=>{
    console.log("test found");
    res.json({msg:"admin here !"})
});

// @route   GET api/admin/registeradmin
// @desc    register admin
// @access  Public
router.post('/registeradmin'),(req,res)=>{
    console.log("found route");
    const newAdmin = new Admin({
        username: req.body.username,
        password: req.body.passowrd,
        email: req.body.email
    })
    bcrypr.genSalt(10,(err,salt)=>{
        bcrypt.hash(newAdmin.passowrd,salt,(err,hash)=>{
            if(err) throw err;
            newAdmin.passowrd = hash;
            newAdmin
                .save()
                .then(admin=>res.json(admin))
                .catch(err=>console.log(err));
        })
    })
}

module.exports = router;