console.log("hello hai");

setTimeout(() => {
    console.log("hello hai");
    
},2000);

function brush(){
    setTimeout(() => {
        console.log("time taken for brush 3000")
    }, 3000);
}

function bath(){
    setTimeout(() => {
        console.log("time taken for bath 5000")
    }, 5000);
}

function relax(){
    setTimeout(() => {
        console.log("time taken for relax 500")
    }, 500);
}

function eat(){
    setTimeout(() => {
        console.log("time taken for eat 6000")
    }, 6000);
}

function ready(){
    setTimeout(() => {
        console.log("time taken for ready 2500")
    }, 2500);
}

brush();
bath();
relax();
eat();
ready();