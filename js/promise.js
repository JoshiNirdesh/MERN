// function mul (x,y){
//     return x*y;
// }
// console.log("Multply", mul(2,4));

const mul=(x,y)=>{
    return x*y;
}
console.log("Multply", mul(2,4));

function car(brand){
    setTimeout(()=>{
        console.log(brand)
    },1000)
    return brand;
}

const car1=car("toyata");
console.log("Brand", car1);