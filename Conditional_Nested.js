const user = {
  name: "Rahim",
  spent: 7000
};
const updatedUser = {
  ...user,
  ...(user.spent > 5000 && {
    premium: true
  })
};

console.log(updatedUser);