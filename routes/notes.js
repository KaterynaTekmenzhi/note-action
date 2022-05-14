const router = require('express').Router();
const fs = require("fs");
const { randomUUID } = require('crypto');

// const { route } = require('.');

// Method: GET
// Route: api/notes
// Action: get all notes
router.get('/', (req, res) => {
    // 
    fs.readFile("./db/db.json", (err, data) => {
        if (err) {
             
        console.log(err);
        }
        else {
            res.json(JSON.parse(data));
            console.log(JSON.parse(data));
        }
    });
});

// Method: POST
// Route: api/notes
// Action: create a new note
router.post('/', (req, res) => {
    // Destructuring req.body
    const { title, text } = req.body;

    // If all required fields are present
    if (title && text) {
        //Variable for the object to be saved
        const note = {
            title,
            text,
            note_id: randomUUID(),
        };

        // Read the db.json file
        fs.readFile("./db/db.json", (err, data) => {
            if (err) {
                console.log(err);
            }
            else {
                // Parse the data into an array
                const notes = JSON.parse(data);

                // Push the new note into the array
                notes.push(note);

                // Write the updated data to the db.json file
                fs.writeFile("./db/db.json", JSON.stringify(notes, null, 4), (err) => {
                    if (err) {
                        console.log(err);
                    }
                    else {
                        const response = {
                            status: "note created successfully",
                            body: note,
                        };

                        console.log("Successfully created note");
                        res.json(response);
                    }
                });
            }
        });
    }
    else {
        res.error("Missing required fields");
    }
});

module.exports = router;

    // const response = {
    //         status: 'success',
    //         body: note,
    //     };
    //     res.json(response);
    // } else {
    //     res.json('Missing required fields');
    // }