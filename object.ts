let user = {
  name: "John",
  email: "John@doe.com",
  age: 30,
};

function createUser(name: string, email: string, age: number) {
  let newUser = {
    name: name,
    email: email,
    age: age,
  };
  // console.log(user); // { name: 'John', email: 'John@doe.com', age: 30 }

  let updateduser = { ...user, ...newUser };
  console.log(updateduser); // { name: 'Yash', email: 'yashdip123@gmail.com', age: 22 }

  return user;
}

createUser('Yash', 'yashdip123@gmail.com', 22);

// console.log(user.name);
// console.log(user.email);
// console.log(user.age);
// console.log(createUser('Yash', 'yashdip123@gmail.com', 21));
// console.log(createUser('Yash', 'yashdip123@gmail.com', 22));


// function createCourse():{name: string, price: number, description?: string} {
//     return {
//         name: "React",
//         price: 1000,
//         description: "Learn React",
//     };
// }
// console.log(createCourse());


function createCourse(name: string, price: number, description?: string) {
  let course = {
    name: name,
    price: price,
    description: description,
  };
  return course;
}

console.log(createCourse("React", 1000, "Learn React"));

export {};
