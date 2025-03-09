// using foreach

let number = [1,2,3,4,5,6,7,8,9];
let oddNumber = [];
let evenNumber =[];

number.forEach ((e)=>{
    if(e%2==0){
        evenNumber.push(e);
    }
    else{
        oddNumber.push(e);
    }
})

console.log(evenNumber);
console.log(oddNumber);

// Using Map

let numberMap = number.map((e)=>{
    if(e%2==0){
        evenNumber.push(e);
    }
    else{
        oddNumber.push(e);
    }
})

console.log(evenNumber);
console.log(oddNumber);