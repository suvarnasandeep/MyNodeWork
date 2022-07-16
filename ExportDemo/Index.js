
//importing literals
const name = require('./App');
console.log(`Name         :${name.fullName}`);

//importing function
name.role('Software Engineer');

//importing objects
const name1 = name.info;
console.log(`DOB ${name1.DOB} || Native ${name1.Native}`);

//importing class
const companyDetail = new name.job();
companyDetail.info();


