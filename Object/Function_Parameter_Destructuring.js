const user = {
  name: "Rahim",
  age: 25
};

function printUser({ name, age }) {
  console.log(`${name} is ${age} years old`);
}

printUser(user);