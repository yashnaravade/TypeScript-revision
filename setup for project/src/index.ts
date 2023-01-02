// class User {
//   name: string;
//   age: number;
//   constructor(name: string, age: number) {
//     this.name = name;
//     this.age = age;
//   }
// }

// const user = new User("John", 30);

// user.age = 21; // change age

// console.log(user.name); // John
// console.log(user.age); // 21

class User {
  constructor(
    public name: string, 
    public age: number,
    private userId= 123
    ) {
  }
}

const Yash = new User("Yash", 21); // 123 is the default value for userId as it is not passed in the constructor call. 

console.log(Yash.name); // Yash
