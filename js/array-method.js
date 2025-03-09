let number = [1,2,3,4,5,6,7,8,9];

//filter method in array

let filterNumber = number.filter((num)=>{
    return num>2;
})
console.log("Filter NUmber", filterNumber);

//find method in array

let findNumber = number.find((num)=>{
    return num>2;
});
console.log(findNumber);

//spread operator
let a= [1,2,3,4];
let b= [...a,10];
console.log(b);

//push and pop in array
let fruits = ["apple","Orange", "banana"];
let fruitsLength = fruits.length;

console.log(fruitsLength);

let fruit1=fruits.push("Cherry");
console.log(fruits);

let fruit2=fruits.pop();
console.log(fruits);

//Join method
const fruits1 = ["Apple", "Banana", "Mango"];
const result = fruits1.join(" | ");
console.log(result); 

//slice
const colors = ["red", "green", "blue", "yellow"];
const sliced = colors.slice(1, 3); //array.slice(start, end)
console.log(sliced); 

//unshift
let fruits3 = ["Banana", "Mango"];
fruits3.unshift("Apple","Cherry");
console.log(fruits3);

//shift
let fruits4 = ["Apple", "Banana", "Mango"];
let firstFruit = fruits4.shift();
console.log(firstFruit); 
console.log(fruits4);     

//splice
let fruits5 = ["Apple", "Banana", "Mango", "Orange"];
fruits.splice(1, 2); 
console.log(fruits5);


let colors1 = ["Red", "Blue"];
colors.splice(1, 0, "Green", "Yellow"); // At index 1, remove 0 items, add 2
console.log(colors1); // ["Red", "Green", "Yellow", "Blue"]

//indexof
let colors2 = ["red", "green", "blue", "green"];
let index = colors2.indexOf("green");
console.log(index); 

//fiindindex
let numbers = [3, 7, 12, 18];
let index2 = numbers.findIndex(num => num > 10);
console.log(index2);

//split
let text = "he is a good boy";
let text1 = text.split(" ");
console.log("this is text1", text1);

// includes;
let text2 = "he is a good boy";
let text3 = text2.includes("boy");
console.log(text3);

//string
const str = "hello world";
const upperCase = str.toUpperCase();
console.log(upperCase);
const textLower = "hello world";
const upperCase1 = textLower.toLowerCase();
console.log(upperCase1);

const name1 = " john ";
const name2 = name1.trim();
console.log(name2);

let color = ["red", "green", "blue", "yellow", "pink"];
let color1 = color.includes("blue");
console.log(color1);