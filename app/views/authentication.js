const express = require('express');
const { dbPool } = require("../../config/db")
const User = require("../models/user")
const router = express.Router();

router.post('/create-user', async function(req, res){
    try {
        var user = new User();

        user.username = req.body.user.username;
        user.email = req.body.user.email;
        user.setPassword(req.body.user.password);
        
        await user.createUser();
        
        return res.status(201).send({ message: 'User created successfully' });
    } catch (error) {
        console.error(error);
        return res.status(500).send({ error: 'Internal Server Error' });
    }
});

module.exports = router;