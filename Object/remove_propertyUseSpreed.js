const user = {
  name: "Asraful",
  password: "12345",
  email: "a@gmail.com"
};
const { password, ...safeUser } = user;

console.log(safeUser);