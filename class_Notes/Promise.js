function goshop(){
    return new Promise((resolve, reject)=>{
        setTimeout(() => {
            let go=true;
            if(go){
                resolve("going for shopping")
            }
            else{
                reject("not yet ready for shopping")
            }
        },3000);
    })
}

function shopping(){
    return new Promise((resolve, reject)=>{
        setTimeout(() => {
            let shop=false;
            if(shop){
                resolve("Doing the shopping")
            }
            else{
                reject("not yet started the shopping")
            }
        },6000);
    })
}

function backshop(){
    return new Promise((resolve, reject)=>{
        setTimeout(() => {
            let back=true;
            if(back){
                resolve("returning home")
            }
            else{
                reject("still shopping")
            }
        },2500);
    })
}

goshop().then(el=>{console.log(el);return shopping ()})
        .then(el=>{console.log(el);return backshop()})
        .then(el=>{console.log(el);console.log("shopping completed")})
        .catch((err)=>{console.log("ERROR: ",err)})

        async function demo(){
            try{
                const a=await goshop()
                console.log(a);
                const b=await shopping()
                console.log(b);
                const c=await backshop()
                console.log(c);
            }
            catch(err){
                console.log("ERROR: ",err)
            }
        }

        demo()