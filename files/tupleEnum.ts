const user: [string, number] = ['viking', 20];

console.log(user[1]);

user[1] = 30;

console.log(user[1]); // 30

type User = [string, number];

const newUser: User = ['Kellerman', 30];

newUser.push('Sarah');

console.log(newUser); // ['Kellerman', 30, 'Sarah'] 'Sarah' is added to the end of the array
//  you can also use unshift, pop, shift, splice, etc. to modify the array here


