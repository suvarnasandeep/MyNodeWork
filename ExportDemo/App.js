
//exporting literals
module.exports.fullName = "sandeep suvarna";

//importing function
module.exports.role = function(position){
    console.log(`Position     :${position}`);
}

//importing objects
module.exports.info = {
    DOB: "30/05/1990",
    Native: "Udupi"
}

//importing class

module.exports.job = function(){
    this.company = 'Flexera';
    this.Designation = "Member of Technical Staff";
    this.info = ()=>{
        console.log(`Company name : ${this.company}`);
        console.log(`Designation  : ${this.Designation}`);
    }
}


console.log("-----------------------");