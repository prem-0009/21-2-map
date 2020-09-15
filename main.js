console.clear();
// 1.  Map through the array and console.log everyone's first and last name. Using .map
let users = [
  {
    firstName: "Joe",
    lastName: "Orin",
    car: "Porsche",
    dog: "Shitzu",
  },
  {
    firstName: "Lori",
    lastName: "Foster",
    car: "Porsche",
    dog: "German Shepherd",
  },
  {
    firstName: "Guy",
    lastName: "Peters",
    car: "Chevrolet",
    dog: "Poodle",
  },
  {
    firstName: "Lori",
    lastName: "Foster",
    car: "Toyota",
    dog: "German Shepherd",
  },
];

users.map((element) => {
  console.log(
    `first Name: ${element.firstName}, last Name: ${element.lastName}`
  );
});

// 2.  a. Create an array of objects where the value from the name key in each object in users is the key in the new object index and
//          the likes value is the value in the new object index.
// b. Calculate age based on the number of letters in the name multiplied by 10

const users1 = [
  { name: "pan", likes: "lasagne" },
  { name: "lena", likes: "wine" },
  { name: "jill", likes: "tacos" },
  { name: "conner", likes: "turkey" },
];
// Should look like:
// [
// { pan: 'lasagne', age: 30 },
// { lena: 'wine', age: 40 },
// { jill: 'tacos', age: 40 },
// { conner: 'turkey', age: 60 }
// ]

let hi = users1.map((item, i, arr) => {
  let result = {};
  result[item.name] = item.likes;
  result.age = item.name.length * 10;
  return result;
});

console.log(hi);
