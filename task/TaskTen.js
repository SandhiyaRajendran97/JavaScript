// String Operations
// ---------------------------

let name = "Sandhiya";

console.log("Original String :", name);

// Reverse String
let reverse = "";

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
let largest = numbers[0];

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
let sum = 0;

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
let prime = true;

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


let arr = [10, 25, 5, 40, 15];

let largest = arr[0];

for (let i = 1; i < arr.length; i++) {
    if (arr[i] > largest) {
        largest = arr[i];
    }
}

console.log(largest);

let arr = [10, 20, 10, 30, 20, 40];

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



let arr = [1, 2, 3, 4, 5, 6];

let odd = arr.filter(num => num % 2 !== 0);

console.log(odd);

let str = "hello";
let result = {};

for (let char of str) {
    if (result[char]) {
        result[char]++;
    } else {
        result[char] = 1;
    }
}

console.log(result);

let arr = [10, 20, 30, 40];

let sum = 0;

for (let num of arr) {
    sum = sum + num;
}

console.log(sum);

let arr = [1, 2, 3, 4, 5, 6];

let odd = arr.filter(num => num % 2 !== 0);

console.log(odd);

let arr = [1, 2, 3, 4, 5, 6];

let even = arr.filter(num => num % 2 === 0);

console.log(even);

let arr = [10, 20, 10, 30, 20];

let unique = [...new Set(arr)];

console.log(unique);


let str = "Sandhiya";
let reverse = "";

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

let arr = [10, 25, 5, 40, 15];

let largest = arr[0];

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


let str = "madam";
let reverse = "";

for (let i = str.length - 1; i >= 0; i--) {
    reverse += str[i];
}

if (str === reverse) {
    console.log("Palindrome");
} else {
    console.log("Not Palindrome");
}


let arr = [10, 20, 10, 30, 20, 40];

let duplicates = arr.filter((value, index) => {
    return arr.indexOf(value) !== index;
});

console.log([...new Set(duplicates)]);

let a = {
    name: "John",
    address: {
        city: "Chennai"
    }
};

let b = { ...a };

b.address.city = "Bangalore";

console.log(a.address.city);


let arr = [10, 50, 20, 80, 30];

let largest = -Infinity;
let second = -Infinity;

for (let num of arr) {
    if (num > largest) {
        second = largest;
        largest = num;
    } else if (num > second && num !== largest) {
        second = num;
    }
}

console.log(second);



let arr = [10, 25, 5, 40, 30];

let largest = -Infinity;
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

let str = "javascript";

let frequency = {};

for (let char of str) {
    frequency[char] = (frequency[char] || 0) + 1;
}

console.log(frequency);

let str = "programming";

let result = "";

for (let char of str) {
    if (!result.includes(char)) {
        result += char;
    }
}

console.log(result);

const arr = [1, 2, 3, 5, 6];

let n = arr.length + 1;

let expected = n * (n + 1) / 2;

let actual = arr.reduce((sum, num) => sum + num, 0);

console.log(expected - actual);

let n = 7;

let a = 0;
let b = 1;

for (let i = 0; i < n; i++) {
    console.log(a);

    let next = a + b;
    a = b;
    b = next;
}

let num = 5;
let factorial = 1;

for (let i = 1; i <= num; i++) {
    factorial *= i;
}

console.log(factorial);