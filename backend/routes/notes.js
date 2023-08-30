const express = require("express");
const router = express.Router();
const Notes = require("../models/Notes")
const fetchuser = require("../middleware/fetchuser");
const { body, validationResult } = require('express-validator');

// ROUTE 1 : Get all the notes using: GET "/api/notes/fetchallnotes": login required
router.get('/fetchallnotes', fetchuser, async (req, res) => {
    try {
        const notes = await Notes.find({ user: req.user.id });
        res.json(notes);
    } catch (error) {
        console.error(error.message);
        return res.status(500).send("Internal Server Error!");
    }
})

// ROUTE 2 : Add a new note using: POST "/api/notes/addnote": login required
router.post('/addnote', fetchuser, [
    body('title', 'Enter a valid title').isLength({ min: 3 }),
    body('description', 'description must have atleast 5 char').isLength({ min: 5 }),
], async (req, res) => {
    // if there are errors return 400 and errors
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }
    try {
        const { title, description, tag } = req.body;

        // creating new note
        const note = new Notes({
            title,
            description,
            tag,
            user: req.user.id
        })
        const savedNote = await note.save();

        res.json(savedNote);

    } catch (error) {
        console.error(error.message);
        return res.status(500).send("Internal Server Error!");
    }
})

module.exports = router;