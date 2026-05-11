//function declaration

function greet(name) { //parameter
    console.log("hi hello", name);
}

greet("sandhiya") //arguments
function detail(name, age, native) {
    console.log("my name is ", name);
    console.log("my age is ", age);
    console.log("my native is ", native);
}

detail("abi", 25, "coimbatore")
detail("vinitha", 25, "chennai")

//function expression

let electronic = function(name, cost) {
    console.log("i am ", name, "and my cost is ", cost);

}
electronic("fan", 6000)
electronic("fridge", 40000)

//arrow function

let movie = (name, ticket, snack, parking, petrol) => {
    console.log("movie name is ", name, "and the total expenses is ", (ticket + snack + parking, petrol));

}

movie("leo", 250, 200, 100, 150);
movie("kara", 300, 200, 150, 300);

//IIFE

(function() {
    console.log("welcome");
})()