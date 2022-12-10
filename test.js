const obj = {
  "first case": `obj 2 first case: ${Date.now()}`,
};
const obj2 = {
  a: `obj2 a second case: ${Date.now()}`,
};
ct;
const b = Date.now();
console.log(b);

// function foo(firstParam, secondParam) {
//   return firstParam + secondParam;
// }
// const fooRes = foo(5, 7);
// console.log(fooRes);

// let users = [
//   { id: 1, name: "Вася", gender: "male", age: 3 },
//   { id: 2, name: "Петя", gender: "male", age: 24 },
//   { id: 3, name: "Маша", gender: "female", age: 17 },
//   { id: 32, name: "Маша2", gender: "female", age: 17 },
//   { id: 33, name: "Маша3", gender: "female", age: 17 },
//   { id: 34, name: "Маша4", gender: "female", age: 17 },
// ];

// let user = users.find((it, i, arr) => {
//   console.log("This is my console:", it);
//   console.log(it.id === 5);
//   return it.id === 1;
// });
// console.log(user);
// const a = [];
// const b = "";

// b.find();

// users.splice(3, 1);
// console.log(users);

// // const foo = () => users.filter(() => {return users > 18});

// console.log("users", positiveUsers);

// const people = [
//   { name: "Igor", age: 25, budget: 4000 },
//   { name: "Mary", age: 17, budget: 3700 },
//   { name: "Ann", age: 23, budget: 5000 },
//   { name: "john", age: 15, budget: 8000 },
//   { name: "Bill", age: 27, budget: 5500 },
//   { name: "Kate", age: 29, budget: 6700 },
// ];

// // for (let i = 0; i < people.length; i+=1) {
// //   console.log(people[i]);
// // }

// for (let person of people) {
//   console.log(person);
// }

//forEach
// people.forEach(function (person) {
//   console.log(person);
// });
// people.forEach((person) => console.log(person));

//map
// const newPeople = people.map((person) => {
//   console.log("Здесь происходит вичисление");
//   return person;
// });
// console.log(newPeople);

//filter

// const adults = people.filter((person) => {
//   console.log("Здесь происходит вичисление");
//   return person.age >= 18;
// });
// console.log(adults);

//reduce
// const amount = people.reduce((total, person) => {
//   return total + person.budget;
// }, 0);
// console.log(amount);

// find

// const ann = people.find((person) => {
//   console.log("Здесь происходит вичисление", person.name === "Ann");
//   return person.name === "Ann";
// });
// console.log(ann);

// findIndex

// const annIndex = people.findIndex((person) => {
//   console.log("Здесь происходит вичисление", person.name === "Ann");
//   return person.name === "Ann";
// });
// console.log(annIndex);
