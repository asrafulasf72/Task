const user = {
  name: "Rahim",
  address: {
    city: "Dhaka"
  }
};

const cloned = { ...user };

cloned.address.city = "Khulna";

console.log(user.address.city);
console.log(user)

const a=30;
const b=20
const sum = a + b;
console.log(sum)