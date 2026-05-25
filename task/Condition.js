function Studentdetails(name,age,english,tamil,maths,science,ss){
let caps =name.toUpperCase();
let total = english + tamil + maths + science + ss;
let percent =(total/500)*100;

console.log("Name: "+ caps);
console.log("Age : "+ age);
console.log("Total marks: "+ total);
console.log("Percentage: "+ percent.toFixed(2) + "%");

if(percent >=91 && percent<=100) {
    console.log("Remarks :Excellent");
}
else if (percent >=71 && percent<=90){
    console.log("Remarks:Very Good");
}
else if (percent >=51 && percent<=70){
    console.log("Remarks :Good");
}
else if (percent >=35 && percent <=50){
    console.log("Remarks :Good");
}
else {
    console.log("Remarks: fail");
}
}
Studentdetails("Sandhiya",26,87,98,67,87,78,89);

let first = 30;
let second = 40;
let total = "*";
switch (total){
    case "+":
        console.log("add "+ (first+second));
        break;
    case "-":
        console.log("sub "+ (first-second));
        break;
    case "*":
        console.log("multi "+ (first * second));
        break;
    case "/":
        console.log("div "+ (first /second));
        break;
    case"%":
        console.log("percent "+ (first % second));
        break;
    case"**":
        console.log("double "+ (first ** second));
        break;
    default:
        console.log("nothing")


    



}

