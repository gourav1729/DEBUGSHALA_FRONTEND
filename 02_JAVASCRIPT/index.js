// console.log(4>5)
// console.log(4<5)
// console.log(4<=5)
// console.log(4>=5)
// console.log(4==5)
// console.log(4!=5)


//=== : IT CHECKS VALUE AS WELL AS DATA TYPE.

// let a = 5;
// let b = "5"

// console.log(a===b)    //T T 
// console.log(a===b)   //F F 
// console.log(a==b)   //F F 
// console.log(a==b)    //T T 

// console.log(typeof a)
// console.log(typeof b)


// console.log(a == b)
// console.log(a === b)


// output : ""Manas"" AND  ''Ishan' MARKS ARE 90 AND 80. ALSO  PRINT THIS PART ""''""

// console.log( ` ""Manas"" AND  ''Ishan' MARKS ARE ${mark1} AND ${mark2}. ALSO  PRINT THIS PART ""''""  ` 
// )

// console.log(  ''""""'' )

// 1)==
// 2)>=
// 3)>
// 4)<
// 5)!=
// 6)<=
// 7)===

// console.log(4>5)
// console.log(4<5)
// console.log(4<=5)
// console.log(4>=5)
// console.log(4==5)
// console.log(4!=5)
// console.log(5===5)

//=== : IT CHECKS VALUE AS WELL AS DATA TYPE.

// let a = 9;
// let b = '9'

// console.log(typeof a)
// console.log(typeof b)


// console.log(a == b)
// console.log(a === b)



// console.log('a' > 'A') //F F F 


//ASSIGNMENT QUESTION 

// console.log(null > 0)      //F F F
// console.log(null == 0)     //F F F
// console.log(null >= 0)   //F F F 

// console.log(4>5)
// console.log(4 == '4')
// console.log(4 >= 5)


//CONDITIONAL CODE


// let age = 10;

// if(age > 18){
//     console.log("you can vote")
// }else{
//     console.log("you cannot vote")
// }

//WE HAVE USERNAME AND PASSWORD, YOU HAVE TO WRITE A CODE FOR CHEECKING CORRECT PASSWORD AND USERNAME.

// let corretUsername = "Abhishek"
// let correctPassword = "Sachin123"


// let username = "Abhishek"
// let password = "Sachin123"

// if(username == corretUsername && password == correctPassword){

//     console.log("YOU CAN LOGIN")
// }else if() {

//     console.log("Enter correct username or password")
// }

//if-else if 
// -> console.log("YOU CAN LOGIN") : if both are correct
// -> console.(wrong password) : if password is incorrect
// -> console.(wrong username) : if username is incorrect
// -> console.(wrong username and password) : if wrong username and password
// -> console.(sign up please) : if username = "" and password = ""

// if(username == correctUsername && password == correctPassword){
//     console.log("YOU CAN LOGIN")

// }else if ()


//IN SAME WAY YOU HAVE TO MAKE PROGRAM FOR VOTING. 
// -> IF HAVE VOTER ID AND AGE GREATER THAN 18  : YOU CAN VOTE
// -> IF DO NOT HAVE VOTER ID AND AGE GREATER THAN 18  : CREATE VOTER ID TO VOTE
// -> IF AGE LESS THAN 18 : YOU ARE MINOR AND HAVE TO WAIT FOR "18-AGE" YEARS 



// 1. Largest of Three Numbers
// Write a JavaScript function that takes three numbers as input and returns the largest of the three.

//n1, n2 , n3 : print them in ascending order

let N1 = 10
let N2 = 20
let N3 = 30

// N1 < N2 < N3
//     < N3 < N2

if(N1<N2 && N1<N3){

    if(N2<N3){
        console.log(N1, N2, N3)

    }else if(N2 > N3){
        console.log(N3, N2, N1)
    }

}else if(N2<N1 && N2<N3){

  


}else{

    // n3 n2 n1
    // n3 n1 n2 

}


// let arr = [5, 4, 3, 1]
// let arr = [51,88, 87, 99, 1122]


// console.log(arr.sort())








// 2). Palindrome Check
// Write a function that checks if a given string is a palindrome (reads the same backward as forward). The function should return true if it is a palindrome, and false otherwise.


// method 1) let str1 = "madam" 

// let str_reverse = "madam"

//"the" ->"eht"


// if(str1  == str_reverse){

// }else{

// }

//METHOD 2 
//  I   J
// "madam"
// I   J
// "T H E"





// 3. Prime Number Check
// Write a function that checks if a number is prime. A prime number is a number greater than 1 that is divisible only by 1 and itself. Return true if the number is prime, and false otherwise.

// 2 : SMALLEST PRIME NO.


// N 

let n1 = 13;

//EVEN AND ODD
// if(n1%2 == 0){

// }else{

// }





//2) First solution
// i    j
// "madam"

//i == j
//m = m
//a = a
//d = d

//this is pallindrome
// "the"

//i = j
//t = e
//this is not a pallindrome

// "racecar"
// "level"

//3) Second solution

let n = 88;

// 11/2 11/3 .... 11/10

// let flag = 1;
// if(n <= 1){
//     console.log("Not a prime number")
// }else{
//     for(let i = 2; i < n; i++){
//         if(n % i == 0){
//             flag = 0;
//         }else{
//             flag = 1
//         }
//     }
    
// }

// if(flag = 1){
//     console.log("not a prime no")
// }else{
//     console.log("Prime number") 
// }



// let a = 0;

// if("  "){
//     console.log("IT HAS A TRUE VALUE")
//   }else{
//     console.log("IT HAS A FALSE EVALUE")
//   }

const day = 1;

switch (day){

    case 1:
        console.log("Monday")
       
    case 2:
        console.log("Tuesday")
        break;
    case 3:
        console.log("Wednesday")
        break;
    case 4:
        console.log("Thursday")
        break;
    case 5:
        console.log("FRIDAY")
        break;
    case 6:
        console.log("SAT")
        break;
    case 7:
        console.log("SUN")
        break;



}

