function SetUsername(username){
    //complex DB calls
    this.username = username /*here [this] of createUser is used*/
    console.log("called");
}

function createUser(username, email, password){
    SetUsername.call(this, username)     /*syntax*/
    /*[.call] is used to explicitly call the method, in which the reference[this]of current context is send to  be used by another method
    /*this here is a reference of createUser which is send to setUsername */
    this.email = email
    this.password = password
}

const chai = new createUser("chai", "chai@fb.com", "123")
console.log(chai);