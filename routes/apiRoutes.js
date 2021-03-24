const router = require("express").Router();
const store = require("../db/store");

//this GET request gets the notes in our db
router.get("/notes", (req, res) => {
  console.log("pinged")
  store
    .getNotes()
    .then((notes) => {
      console.log("notes from api route", notes)
      return res.json(notes);
    })

    .catch((err) => res.status(500).json(err));
});


router.post("/notes", (req, res) => {
  store
    .addNote(req.body)
    .then((note) => res.json(note))
    .catch((err) => res.status(500).json(err));
});

// psuedo-------bonus section for DELETE METHOD. 
//this will delete the note with an id equal to the req.params.id
router.delete("/notes/:id", (req, res) => {
  store
    .removeNote(req.params.id)
    .then(() => res.json({ ok: true }))
    .catch((err) => res.status(500).json(err));
});

module.exports = router;