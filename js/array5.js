// let users = [
//     {
//         name: "Ram",
//         product : [
//                 { name:"Macbook",price:1000},
//                 { name:"iphone", price:500},
//                 { name:"watch", price:200},
//         ]
//     },
//     {
//         name:"Jane",
//         product: [
//             {name:"Macbook", price :1000},
//             {name:"watch", price:200},
//             {name:"laptop",price:400},
//         ]
//     }
// ];
// users.forEach((user)=>{
//     user.product.forEach((product)=>{
//         if(product.name== "Macook"){
//             console.log(`${user.name} owned ${product.name} price ${product.price}`);
//         }
//     })
    
// })

let users1 = [
    {
        name: "John",
        age: 20,
        class:10,
        password:"xxxxx",
        email: "john@gmail.com",
        phone:"11111"
    },
    "shyam",
    "hari",
    "gopal",
    "krishna",
    "sanjay",
    "sita",
    "radha",
    "gita",
    "savitri",]
//   .map(u => u.toLowerCase().trim());


// function checkUser(user){
//   if(users1.includes(user.toLowerCase().trim())){
//     console.log("Welcome " + user.toLowerCase().trim());
//    }
//    else{
//     console.log("You are not user");
//    }
// }
// checkUser("nirdesh");

const registerUser=(name)=>{
    const user= users1.find((u)=>{
        return u==name;
    })
    if(user){
        console.log(`you are register user`);
    }
    else{
        console.log(`you are not register user`);
    }
}

const findUser = registerUser("shyam");

//assignment
let phoneNumber="14785236934"

function maskPhoneNumber(phoneNumber) {
    const numberToString = phoneNumber.toString();
    const lastFour = numberToString.slice(-2);
    const maskedPart = "x".repeat(numberToString.length - 2);
    return maskedPart + lastFour;
  }
  console.log(maskPhoneNumber(phoneNumber));