const express = require("express");
const router = express.Router();

router.get('/', (req, res) => {
    const obj = {
        name:"prince",
        age: 27
    }
    res.json(obj)
})

module.exports = router;