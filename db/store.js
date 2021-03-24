const util = require("util");
const fs = require("fs");




// psuedo code
// need section that will help make uinique id's for notes so we can post/delete them
const uuidv1 = require("uuid/v1");

const readFileAsync = util.promisify(fs.readFile);

const writeFileAsync = util.promisify(fs.writeFile);

class Store {
  write(note) {
    return writeFileAsync("db/db.json", JSON.stringify(note));
  }
  read() {
    console.log("I'm in read from store")
    return readFileAsync("db/db.json", "utf8");
  }
  addNote(note) {
    const { title, text } = note;

    if (!title || !text) {
      throw new Error("Note 'title' and 'text' cannot be blank");
    }
    // psuedo code
    // new id are created 
    const newNote = { title, text, id: uuidv1() };

    return this.getNotes()

      .then((notes) => [...notes, newNote])
      .then((updatedNotes) => this.write(updatedNotes))
      .then(() => newNote);
  }
  
  getNotes() {
    console.log("I'm in get notes form store.js")
    return this.read().then((notes) => {
      console.log("notes", notes)
      let parsedNotes;
      try {
        parsedNotes = [].concat(JSON.parse(notes));
      } catch (err) {
        console.log("error in get notes from db folder")
        parsedNotes = [];
      }


      return parsedNotes;
    });
  }




  removeNote(id) {
    return this.getNotes()
      .then((notes) => notes.filter((notes) => note.id !== id))
      .then((filteredNotes) => this.write(filteredNotes));
  }
}

module.exports = new Store();