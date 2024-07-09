// The Promise object represents the eventual completion (or failure) 
// of an asynchronous operation and its resulting value.
/*A Promise is in one of these states:

>pending: initial state, neither fulfilled nor rejected.
>fulfilled: meaning that the operation was completed successfully.
>rejected: meaning that the operation failed. */


// different types how a promise can be created:

// 1====>
const promiseOne = new Promise(function(resolve, reject){
    //Do an async task
    // DB calls, cryptography, network
    setTimeout(function(){
        console.log('Async task is compelete');
        resolve()
    }, 1000)
})
// the above resolve() is connected to then() which is used to call when a promice is consumed
promiseOne.then(function(){
    console.log("Promise consumed");
})


// 2====> doing it in a single context without a new variable declaration
new Promise(function(resolve, reject){
    setTimeout(function(){
        console.log("Async task 2");
        resolve()
    }, 1000)

}).then(function(){
    console.log("Async 2 resolved");
})


// 3===>
const promiseThree = new Promise(function(resolve, reject){
    setTimeout(function(){
        resolve({username: "Chai", email: "chai@example.com"})
    }, 1000)
})

promiseThree.then(function(user)/*whatever is passed by resolve is accepeted by then()*/ {
    console.log(user);
})


// 4===>
const promiseFour = new Promise(function(resolve, reject){
    setTimeout(function(){
        let error = true
        if (!error) {
            resolve({username: "hitesh", password: "123"})
        } else {
            reject('ERROR: Something went wrong')
        }
    }, 1000)
})
// chaining/thening
 promiseFour
 .then((user) => {
    console.log(user);
    return user.username
}).then((username) => {
    console.log(username);
}).catch(function(error){
    console.log(error);
}).finally(() => console.log("The promise is either resolved or rejected"))

// .then() is used when resolve is executed
// .catch() is used when expecting errors
// .finally() can be used either times, to show completed task 

// 5===> using async 
const promiseFive = new Promise(function(resolve, reject){
    setTimeout(function(){
        let error = true
        if (!error) {
            resolve({username: "javascript", password: "123"})
        } else {
            reject('ERROR: JS went wrong')
        }
    }, 1000)
});
// async function is to be used with try and catch block
async function consumePromiseFive(){
    try {
        const response = await promiseFive
        console.log(response);
    } catch (error) {
        console.log(error);
    }
}

consumePromiseFive()

/*using async   // async function getAllUsers(){
  await*/       //     try {
                //         const response = await fetch('https://jsonplaceholder.typicode.com/users')

                //         const data = await response.json()
                //         console.log(data);
                //     } catch (error) {
                //         console.log("E: ", error);
                //     }
                // }

                //getAllUsers()

// whenever some functionality takes time to execute we wrao it under await function



// using .then() and .catch() 
fetch('https://api.github.com/users/hiteshchoudhary')
.then((response) => {
    return response.json()
})
.then((data) => {
    console.log(data);
})
.catch((error) => console.log(error))

// promise.all
// yes this is also available, kuch reading aap b kro.
