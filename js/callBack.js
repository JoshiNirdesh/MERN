
// const add =(x,y)=>{
//     return x+y;
// }
// const addNumber=add(2,3);
// console.log("Sum: ", addNumber);

// call backfunction
// function fetchData(c){
//     console.log("Api is fetching");
//     setTimeout(()=>{
//         c("api succesfully fetched");
//     },2000);
// }
// fetchData((m)=>{
//     console.log(m);
    
// })

//
// //Asynchronous
// console.log("one");
// console.log("two");


// setTimeout(()=>{
//     console.log("hello");

// },2000)

// console.log("three");
// console.log("four");

// call back

// function sum(a,b){
//     console.log(a+b);
// }
// function calculator (a,b,sumCallBack){
//     sumCallBack(a,b);
// }
// calculator (1,2,sum);


function getData(dataID,getNextData){
    setTimeout(()=>{
        console.log("Data",dataID);
        if(getNextData){
        getNextData();
        }
    },2000)
}

getData(1,()=>{
    getData(2);
});

