console.log("hello world");

console.log("Beautiful World");

console.log("JavaScript")

//variable
let frut;
//variabledeclaration
frut = "apple";
let num = 25;
let flower = "rose";
console.log(frut, num, flower, "hi hello");
//accept both upper and lower case
//accept number but not in first index
//doesn't allow spaces and allows special chracter(_$)
//name should be unique
//name should be relevant

//re-declaration

//let fruit ="apple";
//let fruit = "orange";
//console.log(fruit);    //doesn't allow

//const fruit ="apple";
//const fruit = "orange";
//console.log(fruit);  //doesn't allow

var fruit = "apple";
var fruit = "orange"; // will allow
console.log(fruit);

//re-assignmet

let veg = "carrot";
veg = "beans";
console.log(veg);

//const veggy = "brinjal";
//veggy = "tomato";
//console.log(veggy);    // doesn't allow

var veggy = "brinjal";
veggy = "tomato";
console.log(veggy);

//scope

{
    let a = "red";
    const v = "black";
    var y = "white"

}

//console.log(a);  //block scoped
//console.log (v); //block scoped
console.log(y);

//hoisting

console.log(colour);

//let colour = "red" //not supported for hoisting
//let colour ="black"// not supported for hoisting

var colour = "white"