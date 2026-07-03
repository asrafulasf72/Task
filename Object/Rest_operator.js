const user = {
  name: "Asraful",
  age: 22,
  city: "Dhaka",
  country: "Bangladesh"
};

const { name, ...rest } = user;

console.log(name);
// Asraful

console.log(rest);
// { age: 22, city: "Dhaka", country: "Bangladesh" }