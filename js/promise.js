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

// const promise= new Promise((resolve, reject)=>{
//     setTimeout(()=>{
//         reject("Internal server error || error");
//         resolve({
//             data:{
//                 name:"Nirdesh",
//                 email:"nin@gmail.com"
//             },
//         })
//     },2000)

// });
// promise.then((data)=>{
//     console.log(data);
    
// }).catch((error)=>{
//     console.log("error");
// });

// //asyn and await

// const fetchData = async()=>{
//     try{

//         let response=await fetch('https://jsonplaceholder.typicode.com/todos/1');

//     let data=response.json();
//     console.log("this is  response",data);

//     }
//     catch(error){
//         throw new Error("internal error");
//     }
    

// }
// fetchData();

// const myPromise = new Promise (resolve,reject)=>{
//     setTimeout(() => {
//         let success=true;
//         if(success){
//             resolve("data from promise")
//         }
//         else{
//             reject("error on line 2")
//         }
//     }, 2000);
// }
// myPromise.then(message)

async function fetchNewsTitles() {
    try {
      const response = await fetch('https://newsapi.org/v2/top-headlines?country=us&apiKey=73e97741ac4546668f6137396731af9b');
      const data = await response.json();
      
      if (data.articles) {
        data.articles.forEach(article => console.log(article.title));
      } else {
        console.error('No articles found');
      }
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  }
  

  fetchNewsTitles();
  