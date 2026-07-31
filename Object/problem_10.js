const user = {
  name: "Rahim",
  address: {
    city: "Dhaka"
  }
};

const {
  address: { city }
} = user;

console.log(city);
console.log(address);