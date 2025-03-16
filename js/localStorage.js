//local storage set items and get items

let user={
    name:"john",
    age:30,
    email:"jo@gmail.com"
}
// localStorage.setItem("name","John");
// localStorage.setItem("token", response.token);
// localStorage.setItem("token1","fdfdf23434");

console.log(user.name);
let stringUser=JSON.stringify(user);

console.log("This is stringify", stringUser);
console.log(stringUser.name)