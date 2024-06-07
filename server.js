// function add(a, b){
//     return a + b;
// }
// var add = function(a,b){
//     return a + b;
// }
// var add = (a,b) => {return a+b};
// var result = add(5,4);
// console.log(result);

// (function(){
//     console.log("Prateek is learning function");
// })();


// callBack function:----
// function callBack(){
//     console.log("Finally got printed");
// }
// var add = (a,b,cb) => {console.log(a+b); cb();};
// // add(5,4,callBack);

// add(2,3, () => console.log("completed"));


// Built-in modules:---
// var fs =  require('fs');
// var os = require('os');

// var user = os.userInfo();
// console.log(user);

// fs.appendFile('intro.text', "hi " + user.username + "\n", () => {});

// self-made module
// var note = require('./notes.js');
// console.log(note.age);
// console.log(note.cars(5));


// lodash
// var _ = require('lodash');
// var arr = [1,1,2,3,4,4,9,9,];
// console.log(_.uniq(arr))


// Inter conversion JSON  to an object in Node.js
const jsonString = '{"name":"Prateek", "age":22,"Place":"Jharkhand"}';
const jsonObj = JSON.parse(jsonString);
console.log("Name is " + jsonObj.name + " and age is " + jsonObj.age);


// object to JSON string
const obj = {name:"Prateek", bike: 1};
const jsonString2 = JSON.stringify(obj);
console.log(jsonString2);
