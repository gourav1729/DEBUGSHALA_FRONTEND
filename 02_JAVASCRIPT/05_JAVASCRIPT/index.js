

// 1)INTRODUCTION TO LOOPS
// A loop is a programming construct that repeats a block of code until a condition is met.
// Benefits of loops: Avoid repetitive code, save time, and make programs efficient.


// consol.log(1)
// consol.log(1)
// consol.log(1)
// consol.log(1)
// consol.log(1)
// consol.log(1)
// consol.log(1)
// consol.log(1)


// for(){

// // consol.log(1)

// }





// 2)SYNTAX : for(intiliaze, condition; increment/decremnt){
    //code to execute.
// }

// for(let i = 1; i <= 5; i++){
//     console.log(i);
// }


// 3)Print Odd Numbers

// for (let i = 1; i<=10; i++){

//     if(i % 2 !== 0){
//         console.log(i)
//     }
// }

// 1
// 3
// 5
// 7
// 9


// 4)Print Even Numbers
// for(let i = 0; i <= 10; i++){

//     if(i % 2 == 0){
//         console.log(i)
//     }

// }

//homework write dry-run of these code two codes. (8/01/2024)

//5)Infinite Loops

// What is an infinite loop? A loop where the condition is never false.
// Why avoid them? They cause programs to hang or crash.


// for(let i = 1; ; i++){
//     console.log(i)
// }


// for(let i = 0; i <= -10; i++){

//     if(i % 2 == 0){
//         console.log(i)
//     }

// }

// 6)Print Multiplication Table

// let num = 5;


// for(let i = 1; i <= 10; i++){
//     console.log(` ${num*i}  `)
// }

// 5*1
// 5*2

// 7)Nested for Loop

// A loop inside another loop.
// Useful for working with grids, patterns, or matrices.

// QUESTION  (HOMEWORK : 08/01/2024)

// *
// **
// ***
// ****
// *****


//7) while : jabtak TAK CONDITION SAHI HAI.

// let i = 1;
// let n = 5;



// while(i <= 10 ){
    
    
//     if(i % 2 == 0){
//         console.log(i)
       
//     }


  

// }



// 9. Favorite Movie

// Activity:

// Prompts the user to enter their favorite movies.

// Stores these movies in an array.

// Displays the list when they’re done.


// let favoruitemovie = [];
// let movie;

// do{
//     movie = prompt("ene;ter your favourite movie(or type done to finish");

//     if(movie == 'done'){
//         favoruitemovie.push(movie);
//     }



// }while( movie !== 'done' )


// console.log("your favourtie movie", favoruitemovie);


// 10) **break Keyword**

for(let i = 0; i<10; i++){

    if (i === 5) {
        break;
    }
    console.log(i)
}

// 11. **Loops with Arrays**

//for loop
//while loop
// do-while loop

// 12. **Loops with Nested Arrays**

// let grid = [
//     [1, 2, 3],
//     [4, 5, 6],
//     [7, 8, 9]
// ];

// 13. **for-of Loops**
// A for-of loop is used to iterate over iterable objects like arrays, strings, or sets.

let fruits = ["apple", "mango", "kiwi", "banan"]

for(let i of fruits){
    console.log(i)
}

// 14. **Nested for-of Loop**

let grid = [
    ["A", "B", "C"],
    ["D", "E", "F"],
    ["G", "H", "I"]
];

// if(){

//     if(){

//         if(){


//         }
//     }
// }

// 1)REMOVE BRACKETS FROM  AN ALGEBRAIC EXPRESSION
    // let arr = ""
    // "a+((b-c)+d)" : a + b - c + d  
    // ( )

     // "a + ( ( b - c ) + d ) " : a + b - c + d  ""
    //   i 

    // if(str(i) = "(" && str(i) = ")"){
    // }else{}

// 2)Problem: Given a String, find the largest word in the string.

    // Input: string s=”Google Doc hello world123  ”
    // Output: “world123 ”
    // Explanation: Google is the largest word in the given string. 


// 3)int numbers[] = {2 , 4 , 6 , 8 , 10 }; 

// (2,4)(2,6)(2,8)(2,10)
// (4,6)(4,8)(4,10)
// (6,8)(6,10)
// (8,10)

// TOTAL NO OF PAIR : 10;


// Input: height = [0,1,0,2,1,0,1,3,2,1,2,1]
// Output: 6
// Explanation: The above elevation map (black section) is represented by array [0,1,0,2,1,0,1,3,2,1,2,1]. In this case, 6 units of rain water (blue section) are being trapped.
