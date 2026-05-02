const users = [
  { name: "Rahim", age: 20 },
  { name: "Karim", age: 25 }
]; 

const updatedUsers = users.map(user => ({
  ...user,
  age: user.age + 1
}));

console.log(updatedUsers);
// [
//   { name: "Rahim", age: 21 },
//   { name: "Karim", age: 26 }
// ]