var person = {
	"firstName" : "sandeep",
	"lastName" : "suvarna",
	"getFullName" : function(){
			return this.firstName + " " + this.lastName;
	},
	
	"address" : {
		"street" : "1st cross",
		"state"  : "KA"
	},
	
	"isFromState" : function(state){
		return(this.address.state === state)
	}
};


console.log(person.getFullName());


var result = person.isFromState("KA");

console.log(result);
console.log("--------------");

var myArr = [10, 20, "Hello", {}];

var myFunction = function(item, index){
	console.log("for each " + item + " " + index);
};

myArr.forEach(myFunction);