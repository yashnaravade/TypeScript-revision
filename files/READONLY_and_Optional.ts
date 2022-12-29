// Q: Explain readonly and optional properties in typescript.
// A: Readonly properties are properties that can only be assigned once.  Optional properties are properties that can be assigned or not assigned. Optional properties are denoted by a question mark (?) after the property name. Readonly properties are denoted by the keyword readonly before the property name.

// Compare this snippet from readonly_and_optional.ts:
type createUserType = {
  readonly id: number;
  name: string;
  email: string;
  age: number;
  description?: string;
};

function createUser(user: createUserType) {
  return user;
}

// console.log(createUser({ name: "Yash", email: "", age: 21, id: 1 })); // { name: 'Yash', email: '', age: 21, id: 1 }

console.log(createUser({ name: "Yash", email: "", age: 21, id: 1, description: "Hello" })); // { name: 'Yash', email: '', age: 21, id: 1, description: 'Hello' }


type CardNumber= {
    readonly cardNumber: number;
}

type CardHolder = {
    readonly cardHolder: string;
}

type CardDetails = CardNumber & CardHolder & { CardCVV: number };

function createCard(card: CardDetails) {
    return card;
}

console.log(createCard({cardNumber: 123456789, cardHolder: "Yash", CardCVV: 123})); // { cardNumber: 123456789, cardHolder: 'Yash', CardCVV: 123 }

export {};

