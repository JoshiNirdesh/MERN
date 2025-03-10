// let courses = [
//     { name: "javascript", completeStatus: true, schoolaship: true },
//     { name: "python", completeStatus: false, schoolaship: false },
//     { name: "java", completeStatus: true, schoolaship: false },
//     { name: "c++", completeStatus: false, schoolaship: true },
//     { name: "MERN", completeStatus: false, schoolaship: true },
//   ];

//   let completeScholarship = courses.filter(courses => courses.completeStatus && courses.schoolaship);
//   console.log(completeScholarship);

//   let completedOrScholarship = courses.filter(course => course.completeStatus || course.schoolaship);
// console.log(completedOrScholarship);

// let noCompletionNoScholarship = courses.filter(course => !course.completeStatus && !course.schoolaship);
// console.log(noCompletionNoScholarship);


let countries = [
    {
      name: "Nepal",
      code: "NP",
    },
    {
      name: "India",
      code: "IN",
    },
    {
      name: "Australia",
      code: "AU",
    },
    {
      name: "America",
      code: "US",
    },
    {
      name: "Japan",
      code: "JP",
    },
  ];

  function findMyCountryCode (countryName){
    for(let i =0; i<countries.length;i++){
        if(countryName.toLowerCase()===countries[i].name.toLowerCase()){
          return countries[i].code;
        }
    }
    return "Not found";
  }
 console.log(findMyCountryCode("Nepal")); 