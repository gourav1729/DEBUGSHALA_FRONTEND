
// ## 1. Object Literals
// **What:** Objects in JavaScript store data in key-value pairs.  
// **Why:** To group related data and functions into a single structure.


const person = {
    name : "hello",
    age : 30,
    isEmployed : true,
}

console.log(person)

// ## 2. Creating Object Literals

// **Exercise:** Create an object `car` with properties `brand`, `model`, and `year`.

// **Exercise:** Create an object for a `book` with properties `title`, `author`, and `pages`.


// ## 3. Creating a Post
// **What:** Use objects to model a social media post.

// ## 4. Get Values
// **What:** Access object values using dot or bracket notation.


// const car  = {brand :"mahindra", year : 2025};
// console.log(car.brand)
// console.log(car.year)

// console.log(car["brand"])

// 6)Add/update values
const car  = {brand :"mahindra", year : 2025};

car.price = 1500000;

car.year = 2026;

// console.log(car)
// console.log(car)

// **Exercise:** Add a new property to the `car` object and update the `brand`.

//7)## 8. Array of Objects
// **What:** Group multiple objects into an array.

const employess = [ 
    {name : "hello", role : "student1"},
    {name : "hello1", role : "student2"},
    {name : "hello2", role : "student3"},
    {name : "hello4", role : "student5"}
]

// console.log(employess[3].name)
// console.log(employess[2].role)


// HW : 13/01/2025

// const company = {
//     name: "TechWorld",
//     location: {
//         city: "New York",
//         country: "USA",
//     },
//     employees: [
//         { name: "Alice", role: "Developer" },
//         { name: "Bob", role: "Manager" },
//     ],
// };

// Tasks:
// Add a new property revenue with a value of 1,000,000.
// Update the city's name to "San Francisco".
// Add a new employee to the employees array with the name "Charlie" and role "Designer".
// Log the name of the second employee.

// const products = [
//     { id: 1, name: "Laptop", price: 1200 },
//     { id: 2, name: "Smartphone", price: 800 },
//     { id: 3, name: "Tablet", price: 600 },
// ];


// Tasks:
// Add a new product with id: 4, name: "Smartwatch", and price: 300.
// Increase the price of all products by 10%.
// Find the product with id: 2 and log its name.
// Remove the product with id: 3.

//9)MATH OBJECTS

// - `Math.PI` - π value
// - `Math.sqrt(x)` - Square root
// - `Math.round(x)` - Rounds to the nearest integer

// console.log(Math.PI)
// console.log(Math.sqrt(16))
// console.log(Math.round(16.2))
// console.log(Math.floor(Math.random() * 100))

// let n1 = Math.random()

// let n2 = n1*10

// let n3 = Math.floor(n2)




// console.log(n1 )
// console.log(n2 )
// console.log(n3 )


// 1.9646313250465308 
// 0.1743723309727141
// 8.965077299932502

console.log(Math.sin(0))
console.log(Math.log(2.73))







// 1- 10
//7 -> 


//HW -> 15/01/2025 : 

// 1)MAKE LIST OF 10 METHODS IN MATH OBJECT WHICH IS FRQUENTLY USED.
// 2)- Calculate the area of a circle, volume of cylinder using `Math.PI`.
// 3)-- Generate a random number between 1 and 100 using `Math.random()` AND MAEK A PROGRAM FOR GUSSING ANY RANDOM NUMBR AND IT SHOULD HAVE 3 WINIGN CONDITION.

// 4)Create an object `employee` with properties `name`, `position`, and `salary`. Add a method to increase the salary by 10%.
// 5)Create a nested object `course` with properties `title`, `duration`, and a nested object `instructor` with `name` and `experience`.



