"use strict";
class User {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
}
const user = new User("John", 30);
user.age = 21; // change age
console.log(user.name); // John
console.log(user.age); // 21
