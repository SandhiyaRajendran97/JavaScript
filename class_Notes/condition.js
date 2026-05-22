let age = 18;

if (age >= 18) {
    console.log("can able to access gpay");
} else {
    console.log("cannot able to access gpay");
}

let marks = 15;
if (marks >= 35) {
    console.log("pass");
} else {
    console.log("fail");
}

//else if

let age = 52;

if (age >= 1 && age <= 10) {
    console.log("stories and Rhymes");

} else if (age >= 11 && age <= 25) {
    console.log("movies and songs");

} else if (age >= 26 && age <= 50) {
    console.log("news");

} else if (age >= 51 && age <= 80) {
    console.log("spiritual");

} else if (age >= 82 && age <= 120) {
    console.log("old movies");

} else {
    console.log("check the age");
}

let day="sunday"  

// console.log(day.toUpperCase());
// let upper=day.toUpperCase()
// console.log("upper-",upper);



switch(day){
    case "monday":
        console.log("weekday 1 => monday");
        break;
    case "tuesday":
        console.log("weekday 2 => tuesday");
        break;
    case "wednesday":
        console.log("weekday 3 => wednesday");
        break;
    case "thursday":
        console.log("weekday 4 => thursday");
        break;
    case "friday":
        console.log("weekday 5 => friday");
        break;
    case "saturday":
        console.log("weekoff 1 => saturday");
        break;
    case "sunday":
        console.log("weekoff 2 => sunday");
        break;
    default:
        console.log("check the day");
}