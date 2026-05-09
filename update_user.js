const users = [
  { id: 1, name: "Rahim" },
  { id: 2, name: "Karim" }
];

const updated = users.map(user =>
  user.id === 2
    ? { ...user, name: "Updated" }
    : user
);

console.log(updated);