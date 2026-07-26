let num = 17;
let prime = true;

for (let i = 2; i < num; i++) {
    if (num % i === 0) {
        prime = false;
        break;
    }
}

if (prime && num > 1) {
    console.log("Prime");
} else {
    console.log("Not Prime");
}

let arr = [1, 2, 3, 2, 2, 4];

let count = 0;

for (let num of arr) {
    if (num === 2) {
        count++;
    }
}

console.log(count);

let n = 10;
let first = 0;
let second = 1;

console.log(first);
console.log(second);

for (let i = 3; i <= n; i++) {
    let next = first + second;
    console.log(next);

    first = second;
    second = next;
}