interface User {
    name: string;
    age: number;
    email?: string,
    startTrial(): string;
}

const yash: User = {
    name: 'Yash',
    age: 24,
    // startTrial() {
    //     return 'Trial started';
    // }

    startTrial: () => {
        return 'Trial started';
    }
}

// Q: What is the difference between interface and type?
// A: Type is a type alias. It can be used to create a new type. Interface is a contract. It can be used to create a new type and also to create a new contract.

interface Admin extends User {
    role: string;
}

const admin: Admin = {
    name: 'Yash',
    age: 24,
    role: 'Admin',
    startTrial() {
        return 'Trial started';
    }
}

// Q: What is the difference between interface and class?
// A: Interface is a contract. It can be used to create a new type and also to create a new contract. Class is a blueprint. It can be used to create a new type and also to create a new object.

console.log(admin); // { name: 'Yash', age: 24, role: 'Admin', startTrial: [Function: startTrial] }