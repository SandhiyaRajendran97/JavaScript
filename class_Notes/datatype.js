let str = "javascript";
console.log(str, typeof(str));

let num = 15;
console.log(num, typeof(num));

let numnum = 15.396;
console.log(numnum, typeof(numnum));

//let bint = 123466789231234 n;
//console.log(bint, typeof(bint));

let bool = true;
console.log(bool, typeof(bool));

let a = null;
console.log(a, typeof(a));

let b;
console.log(b, typeof(b));

//non primitive

//array =>list of values //index starts from 0

let arr = ["one", "two", 3, "four", "five"];
console.log(arr, typeof(arr));
console.log(arr[2]);
arr[2] = "three";
console.log(arr);

//object=>key and values pairs //json

let obj = {
    name: "rudra",
    age: 1,
    bg: "o+ve ",
}

console.log(obj, typeof(obj));
console.log(obj.name);
obj.age = 2;
console.log(obj);

//funtion

function demo() {
    console.log("hii hello");
}

demo()

demo()