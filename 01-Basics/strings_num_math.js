const name = "hitesh"
const repoCount = 50

// console.log(name + repoCount + " Value"); 

// console.log(`Hello my name is ${name} and my repo count is ${repoCount}`); 

const gameName = new String('hitesh-hc-com')

// console.log(gameName[0]);
// console.log(gameName.__proto__);


// console.log(gameName.length);
// console.log(gameName.toUpperCase());
// console.log(gameName.charAt(2));  // t
// console.log(gameName.indexOf('t')); // 2

const newString = gameName.substring(0, 4)
// console.log(newString); // hite (excludes last character)

const anotherString = gameName.slice(-8, 4)
// console.log(anotherString); //

const newStringOne = "   hitesh    "
// console.log(newStringOne);
// console.log(newStringOne.trim()); //removes front and back empty spaces

const url = "https://hitesh.com/hitesh%20choudhary"

// console.log(url.replace('%20', '-')) // https://hitesh.com/hitesh-choudhary


// console.log(url.includes('sundar')) // checks value present or not

// console.log(gameName.split('-')); // returns value in form of array 


/*++++++++++++++++++++ NUM_Math +++++++++++++++++++++*/

// console.log(Math);  // returns a object 
// console.log(Math.abs(-4)); // returns positive value
// console.log(Math.round(4.5)); // round off to the nearest value
// console.log(Math.ceil(4.2)); // roundoff to the lower value
// console.log(Math.floor(4.9)); // roundoff to the upper value
// console.log(Math.min(4, 3, 6, 8));
// console.log(Math.max(4, 3, 6, 8));

console.log(Math.random()); // returns a random value ranging from (0-1)
const min1= 1
const max1= 10
console.log((Math.random()*10) + 1);
console.log(Math.floor(Math.random()*10) + 1);

const min = 10
const max = 20

/*GENERALISED FORMULA FOR RANDOM NUMBER IN A RANGE*/
const genFormula= Math.floor(Math.random() * (max - min + 1)) + min;
console.log(genFormula )