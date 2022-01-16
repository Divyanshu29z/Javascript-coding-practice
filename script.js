"use strict";

// function logger() {
//   console.log('My name is Divs');
// }

//calling, running, invoking function
// logger();
// logger();
// logger();

// function fruitProcessor(apples, oranges) {
//   console.log(apples, oranges);
//   const juice = `Juice with ${apples} apples and ${oranges} oranges`;
//   return juice;
// }

// const result = fruitProcessor(10, 0)
// console.log(result);

//Function declaration

// const age = calcAge1(1991);

// function calcAge1(birthYear) {
//   return 2037 - birthYear;
// }

// console.log(age);

//Function Expression

// const age2 = calcAge2(1991)
// Can't access calcAge2() before initialisation because of hoisting
// const calcAge2 = function (birthYear) {
//   return 2037 - birthYear;
// };

// const age2 = calcAge2(1991);

// console.log(age2);

//Arrow function is also a Function Expression

// const calcAge3 = birthYear => 2037 - birthYear;
// const age3 = calcAge3(1991);
// console.log(age3);

// arrow function multi line expressions

// const yearUntilRecruitment = (birthYear, firstName) => {
//   const age = 2037 - birthYear;
//   const retirement = 65 - age;
//   return `${firstName} retires in ${retirement} years`;
// }

// console.log(yearUntilRecruitment(1991, 'Jonas'))
// console.log(yearUntilRecruitment(1980, 'Bob'));

// function cutFruitsPieces(fruit) {
//   return fruit * 4;
// }

// function fruitProcessor(apples, oranges) {
//   const applePieces = cutFruitsPieces(apples);
//   const orangePieces = cutFruitsPieces(oranges);
//   const juice = `Juice with ${applePieces} apples and ${orangePieces} oranges`;
//   return juice;
// }

// const result = fruitProcessor(5, 2)
// console.log(result);


// Basic concepts of Array
// const friends = ["Rahul", "Ravi", "Shreya"];
// console.log(friends);
// console.log(friends[0]);
// console.log(friends[1]);
// console.log(friends[2]);
// console.log(friends.length);

// const years = new Array(1991, 1984, 2008, 2020);
// console.log(friends[friends.length - 1]);

// Basic Array Operations

const friends = ["Rahul", "Div", "Shreya"];
friends.push('John');//add in the last
console.log(friends);
friends.unshift('Don') //Add at the beginning of  the array
console.log(friends);
//Remove the element
friends.pop();//bydefault remove the last elemnt
friends.pop('Shreya');
console.log(friends);
//shift - remove the first element
friends.shift();
console.log(friends);
//indexOf
console.log(friends.indexOf('Div')) //1

friends.push('23')
//includes is new es6 method, indexOf is old one
console.log(friends.includes('Rahul')) //true

//Objects
const kumar = {
  firstName: 'Kumar',
  lastName: 'Divyanshu',
  age: 2037-1991,
  job: 'teacher',
  friends: ['Micheal', 'Peter', 'Steven']
}

console.log(kumar.lastName)
console.log(kumar['job']);




