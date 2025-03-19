// function mul (x,y){
//     return x*y;
// }
// console.log("Multply", mul(2,4));

// const mul=(x,y)=>{
//     return x*y;
// }
// console.log("Multply", mul(2,4));

// function car(brand){
//     setTimeout(()=>{
//         console.log(brand)
//     },1000)
//     return brand;
// }

// const car1=car("toyata");
// console.log("Brand", car1);

//promise

const promise= new Promise((resolve, reject)=>{
    setTimeout(()=>{
        reject("Internal server error || error");
        resolve({
            data:{
                name:"Nirdesh",
                email:"nin@gmail.com"
            },
        })
    },2000)

});
promise.then((data)=>{
    console.log(data);
    
}).catch((error)=>{
    console.log("error");
});

//test