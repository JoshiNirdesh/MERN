let number = [1,2,3,4,5,6,7,8,9];

let oddNumber = [];
let evenNumber =[];

for(let i =0;i<number.length; i++){
    if(number[i]%2==0){
        evenNumber.push(number[i]);
    }
    else{
        oddNumber.push(number[i]);
    }
}

console.log("Even Number ", evenNumber);
console.log("Odd Number ", oddNumber);

let n = "Nirdesh";
let age= 21;
let s = true;
let name = ["Ram", "Shyam", "Sita"];
let student = [{name:"Ram", age:20, roll:11}];

console.log(typeof n);
console.log(typeof name);