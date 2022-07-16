const fs = require("fs");
const chalk = require("chalk");

const getNotes = function () {
  return "My notes";
};

const addNote = function (title, body) {
  const notes = loadNotes();

  const duplicateNotes = notes.filter(function (note) {
    return note.title === title;
  });

  if (duplicateNotes.length === 0) {
    notes.push({
      title,
      body,
    });

    saveNotes(notes);
    console.log(notes);
    console.log(chalk.bold.inverse.green("New note added...!!!"));
  } else {
    console.log(chalk.bold.inverse.red("Note title already exists...!!!"));
  }
};

const removeNote = function (title) {
  console.log("remove note : ", title);
  const notes = loadNotes();
  const notesToKeep = notes.filter(function (note) {
    return note.title != title;
  });

  if (notesToKeep.length != notes.length) {
    saveNotes(notesToKeep);
    console.log(notesToKeep);
    console.log(chalk.bold.inverse.green("Note deleted...!!!"));
  } else {
    console.log(chalk.bold.inverse.red("No notes deleted...!!!"));
  }
};

const loadNotes = function () {
  try {
    const dataBuffer = fs.readFileSync("notes.json");
    const dataJson = dataBuffer.toString();
    return JSON.parse(dataJson);
  } catch (e) {
    return [];
  }
};

const saveNotes = function (notes) {
  const dataJSON = JSON.stringify(notes);
  fs.writeFileSync("notes.json", dataJSON);
};

module.exports = {
  getNotes,
  addNote,
  removeNote,
};
