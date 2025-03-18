
// const add =(x,y)=>{
//     return x+y;
// }
// const addNumber=add(2,3);
// console.log("Sum: ", addNumber);

// call backfunction

function fetchData(c){
    console.log("Api is fetching");
    setTimeout(()=>{
        c("api succesfully fetched");
    },2000);
}
fetchData((m)=>{
    console.log(m);
    
})