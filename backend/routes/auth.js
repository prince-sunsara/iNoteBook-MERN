const express = require("express")
const router = express.Router();
const User = require('../models/User')

// create user using: POST "/api/auth/"
router.get('/', (req, res) => {
    console.log(req.body)
    res.send(req.body)
}).post('/', (req, res) => {
    const user = User(req.body)
    user.save();
    res.send(req.body)
})

module.exports = router;