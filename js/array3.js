let students = [
    { name: "John", age: 20, grade: 90 },
    { name: "Jane", age: 21, grade: 85 },
    { name: "Bob", age: 19, grade: 95 },
    { name: "Alice", age: 20, grade: 80 },
  ];
  const studentsName = students.map((e) => e.name);
  console.log(studentsName);
  
  // average age
  
  let cartItems = [
    { name: "Apple", price: 100, quantity: 2 },
    { name: "Banana", price: 100, quantity: 3 },
    { name: "Orange", price: 100, quantity: 1 },
    { name: "Grapes", price: 100, quantity: 2 },
  ];
  const total = cartItems.reduce((acc, cur) => acc + cur.price * cur.quantity, 0);
  console.log("total price is : Rs. ", total);