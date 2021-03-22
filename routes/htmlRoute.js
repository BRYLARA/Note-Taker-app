
// routes needed to connect htmls
// how many htmls are there


const router = require("express").Router();
const path = require("path");


//this route responds to notes.html
router.get("/notes", (req, res) => {
  res.sendFile(path.join(__dirname, "../public/notes.html"));
});

// using index html and notes html



//this route responds to index.html
router.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "../public/index.html"));
});


module.exports = router;
