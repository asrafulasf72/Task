const users = [
  {
    name: "Rahim",
    password: "123",
    age: 20
  },
  {
    name: "Karim",
    password: "456",
    age: 25
  }
];

const safeUsers = users.map(({ password, ...rest }) => ({
  ...rest
}));

console.log(safeUsers);