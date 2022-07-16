const person = {
  name: "sandeep",
  age: 30,
  greet() {
    console.log("My name is " + this.name + " age : " + this.age);
  },
};

console.log(person);

person.greet();

const hobbies = ["cricket", "running", "footfall"];

// for (let hobby of hobbies) {
//   console.log(hobby);
// }

console.log(hobbies.map((hobby) => "Hobby : " + hobby));
console.log(hobbies);

const val = "sandeep";

const fun = () => {
  console.log(val);
  console.log(person);
};

fun();

// for (var i = 0; i < 10; i++) {
//   console.log(i);
//   setTimeout(function () {
//     console.log(i);
//   }, 5000);
// }

// console.log("------------callback-------------");
// const fetchData = (callback) => {
//   setTimeout(() => {
//     callback("done");
//   }, 3000);
// };

// setTimeout(() => {
//   console.log("Timer is done!!");
//   fetchData((text) => {
//     console.log(text);
//   });
// }, 2000);

// console.log("Hi");
// console.log("Hello");

console.log("------------Promise-------------");
const fetchData = () => {
  const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("done");
    }, 3000);
  });

  return promise;
};

setTimeout(() => {
  console.log("Timer is done!!");
  fetchData().then((text) => {
    console.log(text);
  });
}, 2000);

console.log("Hi");
console.log("Hello");
