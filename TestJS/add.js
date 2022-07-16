function add(a , b){
    return a + b;
}

function subtract(a, b){
    return a - b;
}

console.log("inside add " + add(2, 3));
console.log("inside add " + subtract(5, 3));

/*module.exports = {
    add: add,
    subtract: subtract
};
*/
module.exports.add = add;
module.exports.subtract = subtract;

