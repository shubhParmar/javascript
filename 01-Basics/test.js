const accountId = 144553 // this cannot be reassigned or declaired again
// accountId = 2 // not allowed

let accountEmail = "hitesh@google.com" // let can be reassigned again but cannot be declaired again for a block scope

var accountPassword = "12345" // var can be reassigned and declaired again for global scope
/*
Prefer not to use var
because of issue in block scope and functional scope
*/

accountCity = "Jaipur" // a variable can be defined even without a datatype.

let accountState; // stored a value "undifined" and allocated a memory space for it also known as hoisting

accountEmail = "hc@hc.com"
accountPassword = "21212121"
accountCity = "Bengaluru"

console.log(accountId);

console.table([accountId, accountEmail, accountPassword, accountCity, accountState]) 
// for consoling more than one value.

"use strict"; // to treat all js code as newer version

//**************************Datatypes types
// number => 2 to power 53
// bigint
// string => ""
// boolean => true/false
// null => standalone value , not 0
// undefined => 
// symbol => to provide uniqueness in variables 
// object

let valueInNumber = Number(score) // type conversion of a number 
//console.log(typeof valueInNumber);
//console.log(valueInNumber);

// "33" => 33
// "33abc" => NaN,  but will give datatype as number
//  true => 1; false => 0

let isLoggedIn = "hitesh"

let booleanIsLoggedIn = Boolean(isLoggedIn) // type conversion into number
//  console.log(booleanIsLoggedIn);

// 1 => true; 0 => false
// "" => false
// "hitesh" => true

let someNumber = 33

let stringNumber = String(someNumber) //type conversion to string
// console.log(stringNumber);
// console.log(typeof stringNumber);

 /*********************operations */
 
