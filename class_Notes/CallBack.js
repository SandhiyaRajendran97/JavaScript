function selectfood(input){
    setTimeout(() => {
        console.log("time taken for selecting food");
        input();
    }, 5000);

}

function orderfood(){
    setTimeout(() => {
        console.log("time taken for ordering food")
    },2000);
}

selectfood(orderfood);

// call back hell topic

function brush(a){
    setTimeout(() => {
        console.log("time taken for brush 3000")
        a()
    }, 3000);
}

function bath(b){
    setTimeout(() => {
        console.log("time taken for bath 5000")
        b()
    }, 5000);
}

function relax(c){
    setTimeout(() => {
        console.log("time taken for relax 500")
        c()
    }, 500);
}

function eat(d){
    setTimeout(() => {
        console.log("time taken for eat 6000")
        d()
    }, 6000);
}

function ready(){
    setTimeout(() => {
        console.log("time taken for ready 2500")
    }, 2500);
}

brush(()=>{
    bath(()=>{
        relax(()=>{
            eat(ready)
        })
    })

})