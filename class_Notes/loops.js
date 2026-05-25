for(let i =0; i<=10; i++){
    console.log(i);
}

let x =0;
 for (let i=1; i<=10; i++){
    x+=i; //0+1=1 => 1+2=3 => 3+3=6
    console.log(x);

 }

 console.log(x);

 let day =["Monday","Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];

 for (let i =0; i<day.length; i++){
    console.log(day[i])
 }

 let a ="Hello World";
 for (let i=0 ; i< a.length; i++){
    console.log(a[i]);
 }

 //while loop

 let i =1;
 while(i<=10){
   console.log(i);
   i++;

 }

 let num = [10,25,36,85,78,99,74,89,62,21];
 let a =0;

 while(num[a]!=21){
   console.log(num[a]);
   a++;
 }

 // do while

 let z=1;
 
 do{
   console.log(z);
   z++;

 }
 while (z<=10);

 // for in
  let obj={
   name: "shalu",
   location: "chennai",
   role:"QA",
  }
  for(let i in obj){
   console.log(i,"-",obj[i]);
  }
   let arr = [1,2,3,4,5,6];
    for (let i in arr) {
      console.log(arr[i]);

    }

    // for of
     let days = ["Monday","Tuesday","Wednesday","Thursday","Friday"];
     for (let i of days){
      console.log(i);
     }

     let str= "elephant";
     for (let i of str){
      console.log(i)
     }

     let pet =["cat", "dog","rabbit","parrot","fish"]

     pet.forEach((val,ind,arr)=>{
     console.log(val,ind,arr);
   })