const notes = require("./notes");
const chalk = require("chalk");
const yargs = require("yargs");
const { argv } = require("yargs");

//console.log(chalk.bold.inverse.green("Hello sandeep"));
//console.log(process.argv);
//console.log(yargs.argv);

//customize yargs version
//yargs.version("1.1.1");

//create add command
yargs.command({
  command: "add",
  describe: "Add a new note",
  builder: {
    title: {
      describe: "Note title",
      demandOption: true,
      type: "string",
    },
    body: {
      describe: "Note Body",
      demandOption: true,
      type: "string",
    },
  },
  handler: function (argv) {
    notes.addNote(argv.title, argv.body);
  },
});

//create remove command
yargs.command({
  command: "remove",
  describe: "Remove a note",
  builder: {
    title: {
      describe: "Note title",
      demandOption: true,
      type: "string",
    },
  },
  handler: function (argv) {
    notes.removeNote(argv.title);
  },
});

yargs.command({
  command: "list",
  describe: "List the note",
  handler: function () {
    console.log("List the note...!!!");
  },
});

yargs.command({
  command: "read",
  describe: "read a note",
  handler: function () {
    console.log("Read a note...!!!");
  },
});

yargs.parse();
