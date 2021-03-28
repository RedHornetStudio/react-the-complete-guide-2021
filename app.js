// // 1. let and const
// let myName = 'Max';
// console.log(myName);

// myName = 'manu';
// console.log(myName);

// const age = 28;
// console.log(age);

// age = 29;
// console.log(age);

// // 2. arrow funciton
// function printNameOld(name) {
//   console.log(name);
// }

// const printName = name => {
//   console.log(name);
// };

// printNameOld('Max');
// printName('Manu');

// const multiplyByTwo = number => number * 2;

// console.log(multiplyByTwo(4));

// 3. exports and imports

// // 4. classes
// class Human {
//   constructor(gender) {
//     this.gender = gender
//   }
//   printGender() {
//     console.log(this.gender);
//   }
// }

// class Person extends Human {
//   constructor(gender, name) {
//     super(gender)
//     this.name = name;
//   }
//   printName() {
//     console.log(this.name);
//   }
// }

// // const human = new Human('male');
// // human.printGender();

// const person = new Person('male', 'Max');
// person.printGender();
// person.printName();

// const name = 'bbbb';
// class Dog {
//   constructor() {
//     const button = document.querySelector('.my-button');
//     button.addEventListener('click', this.printName);
//     this.name = 'aaa';
//   }

//   printName = () => {
//     console.log(this);
//     console.log(this.name);
//   }
// }

// const dog = new Dog();
// dog.printName();

// // 5. The Spread and Rest Operator

// // Spread
// const numbers = [1, 2, 3];
// const newNumbers = [...numbers, 4];
// console.log(newNumbers);

// const person = {
//   name: 'Max',
//   surname: 'Li'
// }

// const extendedPerson = {
//   ...person,
//   age: 28
// }

// console.log(extendedPerson);

// // Rest
// const filterEvenNumbers = (...args) => {
//   return args.filter(el => el % 2 === 0);
// };

// console.log(filterEvenNumbers(1, 2, 3, 4, 5, 6, 7, 8, 9, 10));

// // 6. Destructuring

// const array = ['hello', 'Max', 4, 'name'];
// [greating, name, number] = array;
// console.log(greating);
// console.log(name);
// console.log(number);

// // 7. Reference and Primite Types

// let number = 1;
// let number2 = number;
// number = 5;
// console.log(number);
// console.log(number2);

// const person = {
//   name: 'Max'
// };

// const secondPerson = person;

// person.name = 'Manu';
// console.log(person);
// console.log(secondPerson);

// 8. Array Functions

const numbers = [1, 2, 3];
const doubleNumbers = numbers.map(number => number * 2);
console.log(numbers);
console.log(doubleNumbers);

