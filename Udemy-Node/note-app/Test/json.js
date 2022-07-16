const fs = require("fs");

// const book = {
//   title: "My book",
//   author: "sandeep",
// };

// const bookJson = JSON.stringify(book);
// //console.log(bookJson);
// fs.writeFileSync("json.json", bookJson);

// const dataBuffer = fs.readFileSync("json.json");
// const dataJSON = dataBuffer.toString();

// const data = JSON.parse(dataJSON);

// console.log(data.author);

const dataBuffer = fs.readFileSync("json.json");
const dataJSON = dataBuffer.toString();

const data = JSON.parse(dataJSON);

console.log(data.age);

data.age = "32";

const dataJson = JSON.stringify(data);
fs.writeFileSync("json.json", dataJson);
