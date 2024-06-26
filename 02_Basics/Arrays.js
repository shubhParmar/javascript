// array

const myArr = [0, 1, 2, 3, 4, 5]
const myHeors = ["shaktiman", "naagraj"]

const myArr2 = new Array(1, 2, 3, 4) // cunstructor method
// console.log(myArr[1]);

// Array methods

// myArr.push(6) // add to the last
// myArr.push(7)
// myArr.pop() // remove from the last 

// myArr.unshift(9) // add to the top of array
// myArr.shift() // remove from the top os array

// console.log(myArr.includes(9)); // for checking element
// console.log(myArr.indexOf(3));

// const newArr = myArr.join() // add two arrays

// console.log(myArr);
// console.log( newArr);


// slice, splice

console.log("A ", myArr);

const myn1 = myArr.slice(1, 3)
//to select or print from selected range (excluding last element)
console.log(myn1);
console.log("B ", myArr);


const myn2 = myArr.splice(1, 3)
//to select or print from selected range (including last element)
// also remove the element from the original array
console.log("C ", myArr);
console.log(myn2);



const marvel_heros = ["thor", "Ironman", "spiderman"]
const dc_heros = ["superman", "flash", "batman"]

// marvel_heros.push(dc_heros)

// console.log(marvel_heros);
// console.log(marvel_heros[3][1]);

// const allHeros = marvel_heros.concat(dc_heros)
// console.log(allHeros);

const all_new_heros = [...marvel_heros, ...dc_heros]

// console.log(all_new_heros);

const another_array = [1, 2, 3, [4, 5, 6], 7, [6, 7, [4, 5]]]

const real_another_array = another_array.flat(Infinity)
console.log(real_another_array);



console.log(Array.isArray("Hitesh"))
console.log(Array.from("Hitesh"))
console.log(Array.from({name: "hitesh"})) // interesting

let score1 = 100
let score2 = 200
let score3 = 300

console.log(Array.of(score1, score2, score3)); 