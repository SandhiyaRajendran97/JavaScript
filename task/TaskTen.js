// String Operations
// ---------------------------

let name = "Sandhiya";

console.log("Original String :", name);

// Reverse String
let reverseded = "";

for (let i = name.length - 1; i >= 0; i--) {
    reverse += name[i];
}

console.log("Reverse String :", reverse);

// Palindrome Check
if (name === reverse) {
    console.log("Palindrome");
} else {
    console.log("Not Palindrome");
}

// Count Vowels
let vowelCount = 0;

for (let ch of name.toLowerCase()) {
    if ("aeiou".includes(ch)) {
        vowelCount++;
    }
}

console.log("Vowel Count :", vowelCount);

// Character Frequency
let frequency = {};

for (let ch of name.toLowerCase()) {
    if (frequency[ch]) {
        frequency[ch]++;
    } else {
        frequency[ch] = 1;
    }
}

console.log("Character Frequency :", frequency);


// ---------------------------
// Array Operations
// ---------------------------

let numbers = [20, 15, 30, 50, 10, 50, 40, 30];

console.log("\nOriginal Array :", numbers);

// Largest Number
let largeset = numbers[0];

for (let num of numbers) {
    if (num > largest) {
        largest = num;
    }
}

console.log("Largest :", largest);

// Smallest Number
let smallest = numbers[0];

for (let num of numbers) {
    if (num < smallest) {
        smallest = num;
    }
}

console.log("Smallest :", smallest);

// Sum
let sums = 0;

for (let num of numbers) {
    sum += num;
}

console.log("Sum :", sum);

// Average
let average = sum / numbers.length;

console.log("Average :", average);

// Remove Duplicates
let uniqueNumbers = [...new Set(numbers)];

console.log("Unique Array :", uniqueNumbers);

// Second Largest
uniqueNumbers.sort((a, b) => b - a);

console.log("Second Largest :", uniqueNumbers[1]);


// ---------------------------
// Number Operations
// ---------------------------

let number = 7;

// Factorial
let factorial = 1;

for (let i = 1; i <= number; i++) {
    factorial *= i;
}

console.log("\nFactorial :", factorial);

// Prime Check
let primes = true;

if (number <= 1) {
    prime = false;
}

for (let i = 2; i <= Math.sqrt(number); i++) {
    if (number % i === 0) {
        prime = false;
        break;
    }
}

if (prime) {
    console.log(number + " is Prime");
} else {
    console.log(number + " is Not Prime");
}

// Even or Odd
if (number % 2 === 0) {
    console.log(number + " is Even");
} else {
    console.log(number + " is Odd");
}


// ---------------------------
// Fibonacci Series
// ---------------------------

console.log("\nFibonacci Series");

let first = 0;
let second = 1;

console.log(first);
console.log(second);

for (let i = 3; i <= 10; i++) {
    let third = first + second;
    console.log(third);

    first = second;
    second = third;
}


// ---------------------------
// Functions
// ---------------------------

function add(a, b) {
    return a + b;
}

function multiply(a, b) {
    return a * b;
}

console.log("\nAddition :", add(10, 20));
console.log("Multiplication :", multiply(10, 20));


// ---------------------------
// Objects
// ---------------------------

let student = {
    name: "Sandhiya",
    age: 28,
    course: "JavaScript",
    city: "Chennai"
};

console.log("\nStudent Details");

for (let key in student) {
    console.log(key + " : " + student[key]);
}


// ---------------------------
// Array Methods
// ---------------------------

let marks = [45, 60, 75, 90, 35];

let passedStudents = marks.filter(mark => mark >= 50);

console.log("\nPassed Students :", passedStudents);

let increasedMarks = marks.map(mark => mark + 5);

console.log("After Grace Marks :", increasedMarks);

let totalMarks = marks.reduce((total, value) => total + value, 0);

console.log("Total Marks :", totalMarks);


// ---------------------------
// Sorting
// ---------------------------

let values = [9, 4, 8, 2, 5, 1];

values.sort((a, b) => a - b);

console.log("\nAscending :", values);

values.sort((a, b) => b - a);

console.log("Descending :", values);


// ---------------------------
// End
// ---------------------------

console.log("\nProgram Executed Successfully.");


let arrd = [10, 25, 5, 40, 15];

let largest = arr[0];

for (let i = 1; i < arr.length; i++) {
    if (arr[i] > largest) {
        largest = arr[i];
    }
}

console.log(largest);

let arrr = [10, 20, 10, 30, 20, 40];

let duplicates = [];

for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
        if (arr[i] === arr[j] && !duplicates.includes(arr[i])) {
            duplicates.push(arr[i]);
        }
    }
}

console.log(duplicates);


let a = 10;
let b = 20;

[a, b] = [b, a];

console.log(a);
console.log(b);

let num = 7;
let prime = true;

for (let i = 2; i < num; i++) {
    if (num % i === 0) {
        prime = false;
        break;
    }
}

if (prime) {
    console.log("Prime");
} else {
    console.log("Not Prime");
}



let arrac = [1, 2, 3, 4, 5, 6];

let odds = arr.filter(num => num % 2 !== 0);

console.log(odd);

let stry = "hello";
let result = {};

for (let char of str) {
    if (result[char]) {
        result[char]++;
    } else {
        result[char] = 1;
    }
}

console.log(result);

let arre = [10, 20, 30, 40];

let sum = 0;

for (let num of arr) {
    sum = sum + num;
}

console.log(sum);

let arrw = [1, 2, 3, 4, 5, 6];

let odd = arr.filter(num => num % 2 !== 0);

console.log(odd);

let arrtr = [1, 2, 3, 4, 5, 6];

let even = arr.filter(num => num % 2 === 0);

console.log(even);

let arr = [10, 20, 10, 30, 20];

let unique = [...new Set(arr)];

console.log(unique);


let stryy = "Sandhiya";
let reversedd = "";

for (let i = str.length - 1; i >= 0; i--) {
    reverse = reverse + str.charAt(i);
}

console.log(reverse);

let str = "madam";
let reverse = str.split("").reverse().join("");

if (str === reverse) {
    console.log("Palindrome");
} else {
    console.log("Not Palindrome");
}

let arraq = [10, 25, 5, 40, 15];

let largestd = arr[0];

for (let i = 1; i < arr.length; i++) {
    if (arr[i] > largest) {
        largest = arr[i];
    }
}

console.log(largest);

function outer() {
    let count = 0;

    return function () {
        count++;
        return count;
    };
}

let counter = outer();

console.log(counter());
console.log(counter());
console.log(counter());


let strx = "madam";
let reversed = "";

for (let i = str.length - 1; i >= 0; i--) {
    reverse += str[i];
}

if (str === reverse) {
    console.log("Palindrome");
} else {
    console.log("Not Palindrome");
}


let arrt = [10, 20, 10, 30, 20, 40];

let duplicatesed = arr.filter((value, index) => {
    return arr.indexOf(value) !== index;
});

console.log([...new Set(duplicates)]);

let ac = {
    name: "John",
    address: {
        city: "Chennai"
    }
};

let bd = { ...a };

b.address.city = "Bangalore";

console.log(a.address.city);


let arra = [10, 50, 20, 80, 30];

let largested = -Infinity;
let seconded = -Infinity;

for (let num of arr) {
    if (num > largest) {
        second = largest;
        largest = num;
    } else if (num > second && num !== largest) {
        second = num;
    }
}

console.log(second);



let arrc = [10, 25, 5, 40, 30];

let largestt = -Infinity;
let secondLargest = -Infinity;

for (let num of arr) {
    if (num > largest) {
        secondLargest = largest;
        largest = num;
    } else if (num > secondLargest && num !== largest) {
        secondLargest = num;
    }
}

console.log(secondLargest);

let strf = "javascript";

let frequencies = {};

for (let char of str) {
    frequency[char] = (frequency[char] || 0) + 1;
}

console.log(frequency);

let strsd = "programming";

let results = "";

for (let char of str) {
    if (!result.includes(char)) {
        result += char;
    }
}

console.log(result);

const arrs = [1, 2, 3, 5, 6];

let n = arr.length + 1;

let expected = n * (n + 1) / 2;

let actual = arr.reduce((sum, num) => sum + num, 0);

console.log(expected - actual);

let nA= 7;

let ab = 0;
let b = 1;

for (let i = 0; i < n; i++) {
    console.log(a);

    let next = a + b;
    a = b;
    b = next;
}

let Numbers = 5;
let factorials = 1;

for (let i = 1; i <= num; i++) {
    factorial *= i;
}

console.log(factorial);

let strs = "javascript";
let count = {};

for (let char of str) {
    count[char] = (count[char] || 0) + 1;
}

console.log(count);

const promise = new Promise((resolve, reject) => {
    reject("Failed");
});

promise
    .then((result) => {
        console.log(result);
    })
    .catch((error) => {
        console.log(error);
    });

    console.log("Start");

Promise.resolve().then(() => {
    console.log("Promise");
});

console.log("End");

function multiply(a) {

    return function(b) {

        return function(c) {

            return a * b * c;
        };
    };
}

console.log(multiply(2)(3)(4));

let username = null;

let resulted = username ?? "Guest";

console.log(result);

const user = {
    name: "Sandhiya",
    address: {
        city: "Chennai",
        pincode: 600001
    },
    skills: ["Java", "JavaScript", "Playwright"]
};

const users = [
    { id: 101, name: "A" },
    { id: 102, name: "B" },
    { id: 101, name: "A" },
    { id: 103, name: "C" },
    { id: 102, name: "B" }
];

const employees = [
    { name: "A", department: "IT" },
    { name: "B", department: "HR" },
    { name: "C", department: "IT" },
    { name: "D", department: "Finance" },
    { name: "E", department: "HR" }
];

console.log("A");

Promise.resolve()
    .then(() => {
        console.log("B");
    })
    .then(() => {
        console.log("C");
    });

console.log("D");

setTimeout(() => {
    console.log("E");
}, 0);

console.log("F");

const numbered = [1, 2, 3, 4, 5];

const resuls= customMap(numbers, function(num) {
    return num * 2;
});

console.log(result);

function counter() {
    let count = 0;

    return function () {
        count++;
        return count;
    };
}

const c1 = counter();
const c2 = counter();

console.log(c1());
console.log(c1());
console.log(c2());
console.log(c1());

for (var i = 0; i < 3; i++) {
    setTimeout(() => {
        console.log("var:", i);
    }, 1000);
}

for (let j = 0; j < 3; j++) {
    setTimeout(() => {
        console.log("let:", j);
    }, 1000);
}

const p1 = Promise.resolve("Login successful");

const p2 = Promise.reject("Invalid password");

const p3 = Promise.resolve("Dashboard loaded");


const employeed = [
    { name: "A", salary: 50000 },
    { name: "B", salary: 80000 },
    { name: "C", salary: 60000 },
    { name: "D", salary: 90000 }
];

const company = {
    name: "ABC",
    employees: {
        IT: {
            developer: {
                name: "John",
                salary: 70000
            }
        }
    }
};

let employee = {
    name: "Sandhiya",
    age: 28,
    address: {
        city: "Chennai",
        pincode: 600001
    },
    skills: {
        primary: "JavaScript",
        secondary: "Selenium"
    }
};

let employe = [
    {
        name: "A",
        skills: ["Java", "Selenium"]
    },
    {
        name: "B",
        skills: ["JavaScript", "Playwright"]
    },
    {
        name: "C",
        skills: ["Java", "API"]
    }
];

function counter() {
    let count = 0;

    return function () {
        count++;
        return count;
    };
}

const c = counter();

console.log(c());
console.log(c());
console.log(c());

let data = [
    {
        category: "Electronics",
        products: [
            { name: "Laptop", price: 60000 },
            { name: "Mouse", price: 1000 }
        ]
    },
    {
        category: "Mobiles",
        products: [
            { name: "iPhone", price: 80000 },
            { name: "Samsung", price: 50000 }
        ]
    }
];



