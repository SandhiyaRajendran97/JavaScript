function arithmatic() {
    let a = 20;
    let b = 5;
    console.log(a + b); //25
    console.log(a - b); //15
    console.log(a * b); //100
    console.log(a / b); //4
    console.log(a % b); //0
    console.log(a ** b); //20*20*20*20*20

    //increment =>add one value

    // post increment  =>a++
    // pre increment =>++a

    // decrement  => subtract one value 

    // post decrement =>a--
    // pre decrement =>--a

    console.log(++a);
    console.log(a);
    console.log(--b);
    console.log(b);


}

//arithmatic()

function arithmatic() {
    let x = 100;
    let y = 200;

    console.log("Area :", (x * y));

}
arithmatic();

function subjects() {
    let eng = 78;
    let tam = 87;
    let maths = 54;
    let social = 65;
    let science = 76;

    console.log("PERCENTAGE :", (eng + tam + maths + social + science) / 500 * 100, "%");

}
subjects();