

//?  ARRAYS IN JAVASCRIPT


// 09)ARRAYS (DATA STRUCTURE)


// let a = 10;
// let b = 20;

// let arr = [10, 20, "akshat", "sachin", false, true];


// 10)VISULIZING ARRAYS

// 11)ARRAYS METHODS

// arr.push(20)
// arr.push(20)
// arr.push(20)
// console.log(arr);

// arr.pop()
// console.log(arr);
// arr.pop()
// console.log(arr);
// arr.pop()
// console.log(arr);

// arr.shift()
// console.log(arr)

// arr.unshift(20)
// console.log(arr)

//arr.legth : for finding length



// console.log( arr.slice(0,4) , arr.slice(5,7))  
// console.log(arr)

// 12)PRACTISE QUESTION : HW

// 13)INDEXOF AND INCLUDES METHOD

// let arr1 = [10, 20, "akshat", "sachin", false, true];
let arr2 = [100, 200, 300, 400];

// console.log(arr.indexOf( 100))

// console.log(arr.includes(20))

// 14)CONCATENTAION AND REVERSE

// let merger = arr1.concat(arr2);

// console.log(merger)

// let reverse = arr1.reverse();

// console.log(reverse)


// 15)SLICE IN ARRAYS

// console.log( arr1.slice(3,4))  


// console.log(arr.sort((a, b) => b-a))


// 16)SORT IN ARRAY 


// let arr = [1,99,150, , 10000, 202, 302, 1000]

// console.log(arr.sort((a, b) => a-b))

// 17)PRACTISE QUESTIONS  :  

// A)Write a program to sort an array of words alphabetically.

// let arr = ["schain", "askshat", "nitin", "abhishek", "deugshala"]

// console.log(arr.sort());

// B)Slice the first two elements and reverse the rest.

// Practice Questions
// 1)Create an array of city names. Reverse it and display the result.

// 2)Write a program to check if an array of numbers [5, 10, 15, 20] contains the number 10.

// 3)Add three elements to an array [1, 2] using push, then remove one using pop. Print the final array.

// Practice Questions
//1) Find Max Value:
// Write a program to find the maximum number in an array [50, 20, 70, 10].

//arr.sort((a,b) => a-b) //10 20 50 70  //max : arr(arr.length()-1) | min : arr[0]
//arr.sort((a,b) => b-a) //70 50 20 10  //min : arr[arr.length()-1] | max : arr[0]

// 2)Sort and Reverse:
// Sort [8, 2, 4, 6] in ascending order and then reverse it.

//arr.sort((a, b) => (a-b)).reverse()

// 3)Slice and Sort:                    0  1  2  3(excluded)
// Extract the first three elements of [7, 5, 9, 1] and sort them.

//arr.slice(0, 3).sort((a,b) => (a-b))




// 19)CONSTANT ARRAYS

const students = ["sachin", "abhishek"];


students.push("aman")

// students.pop();
// students.pop();
// students.pop();

// console.log(students)


// 20)NESTED ARRAYS 

// What are Nested Arrays?
// A nested array is an array that contains other arrays as its elements. These are often used to represent multidimensional data structures.


const matrix = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
]


// console.log(matrix[1][0])

// console.log(matrix[0][1]);


// console.log(matrix[1][1]);

// console.log(matrix[2][1]);

// console.log(matrix[1][2]);






// if(){

    // if(){
        // if(){

    // }

    // }
    // if(){

    // }
    // if(){

    // }
    // if(){

    // }

// }

// 21)PRACTISE QUESTIONS

// Group Odd and Even:
// Separate an array of numbers [1, 2, 3, 4, 5, 6] into two arrays: one for odd numbers and one for even numbers.

// let arr1 = [1, 2, 3, 4, 5, 6];
// // let length = arr1.length;

// let arrEven = []
// let arrOdd = []

// for(let i = 0 ; i < arr1.length ; i++){

//     console.log(arr1[i])

// }

// Find Missing Number:
// Given an array [1, 2, 4, 5] (where numbers are consecutive but one is missing), find the missing number.


// Anagram Check:
// Write a function to check if two arrays contain the same elements in any order, e.g., [1, 2, 3] and [3, 2, 1]

// [3, 2, 1]
// [2, 1, 3, 3]

// if(a1[0] == a2[2])

// [1, 2, 3]
// [1, 2, 3, 3]


// FIND FRQUENCY OF EACH ELEMENT IN ARRAY 
// [1, 2, 3, 3, 4, 5, 6, 6]
// 1->1
// 3->2


// let count = 2;
   
//           i  j 
// [1, 1, 1, 2, 3, 3, 4, 5, 6, 6]

// 1-> 3
// 2-> 1
// 3-> 2




//BASIC OVERVIEW OF NODE JS 

//node --v 
// node : js runtime enviroment 


// 2009 :  V8


// const numbers = [1, 2, 3, 4, 5];
// const sliced = numbers.slice(1, 4); // Extracts elements from index 1 to 3

// console.log(sliced); // [2, 3, 4]
// console.log(numbers); // [1, 2, 3, 4, 5] (unchanged)