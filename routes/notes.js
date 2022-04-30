const router = require('express').Router();
const { v4: uuidv4 } = require('uuid');

// POST route for creating a new note
router.post('/', (req, res) => {
    // Destructuring req.body
    const { title, text } = req.body;

    // If all required fields are present
    if (title && text) {
        //Variable for the object to be saved
        const note = {
            title,
            text,
            note_id: uuidv4(),
        };

        const response = {
            status: 'success',
            body: note,
        };
        res.json(response);
    } else {
        res.json('Missing required fields');
    }
});

module.exports = router;