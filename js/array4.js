let carItems = [
    {
        name: "Ramesh",
        product : [
            {
                title: "laptop", price:1000
            },
            {
                title: "mouse", price:100
            },
            {
                title: "keyboard", price:1000
            }
        ]
    }
]


let courses = [
    {
        class: "Mern",
        completeStatus: true,
    },
    {
        class: "Python",
        completeStatus: false,
    },
    {
        class : "Devops",
        completeStatus: true,
    }
]
let completed=[];
let inComplete=[];

courses.forEach((courses) =>{
    if(courses.completeStatus){
        completed.push(courses.class);
    }
    else{
        inComplete.push(courses.class);
    }
});
console.log("Complete Course", completed);
console.log("InComplete Course",inComplete);