const express = require("express")
const router = express.Router();
const User = require('../models/User')
const { body, validationResult } = require('express-validator');

// create user using: POST "/api/auth/createUser": no login require
router.post('/createuser', [
    body('name', 'Name must have atleast 3 char').isLength({ min: 3 }),
    body('email', 'Enter valid email').isEmail(),
    body('password', 'Password must have atleast 5 char').isLength({ min: 5 }),
], async (req, res) => {
    // if there are errors return 400 and errors
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }

    // check whether user with this email exist already
    try {
        let user = await User.findOne({ email: req.body.email })
        
        if (!user) {
            user = await User.create({
                name: req.body.name,
                email: req.body.email,
                password: req.body.password,
            });
            return res.status(200).json(user)

        } else {
            return res.status(400).json({ error: "Sorry! user with this email is exist" })
        }

    } catch (error) {
        console.error(error.message);
        res.status(500).send("Oops! some error occured..)")
    }
})

module.exports = router;