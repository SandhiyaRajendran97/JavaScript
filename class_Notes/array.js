let day = ["sunday","monday","tuesday","wednesday"];

console.log(day);
console.log(day[2]);
day[2]="thursday";
console.log(day);

let arr=["apple","banana","grape","papaya","kiwi"]

arr.push("orange");
console.log(arr);
arr.pop();
console.log(arr);
arr.shift();
console.log(arr);
arr.unshift("cherry");
console.log(arr);

console.log(arr.slice(2,4));
console.log(arr.slice(-3,-1));

arr.splice(2,0,"plums");
console.log(arr);
arr.splice(4,1)
console.log(arr);
arr.splice(1,1,"strawberry")
console.log(arr);

console.log(arr.reverse());
console.log(arr.sort());
console.log(arr.reverse());

console.log(arr.includes("plums"));

let z=[1,3,4,5,7,1,2,1,0,1,9];
console.log(z.indexOf(1));
console.log(z.lastIndexOf(1));

console.log(arr.concat(z));


