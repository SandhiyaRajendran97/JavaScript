function website(){
    setTimeout(() => {
        console.log("time taken for web search 50000")
        
    }, 5000);
}

function login (){
    setTimeout(() => {
       console.log("time taken for login 2000") 
    },2000 );
}

function productSearch(){
    setTimeout(() => {
       console.log("time taken for product search 3000") 
    }, 3000);
}

function selectProduct(){
    setTimeout(() => {
       console.log("time taken for selectProduct 500") 
    },500 );
}

function buyNow(){
    setTimeout(() => {
      console.log("time taken for select buyNow 1000")  
    },1000 );
}

function payment(){
    setTimeout(() => {
        console.log("time taken for payment 6000")
    }, 6000);
}

function logout(){
    setTimeout(() => {
        console.log("time taken for logout 4000")
    }, 4000);
}

website();
login();
productSearch();
selectProduct();
buyNow();
payment();
logout();