const user = {
  name: "Rahim",
  address: {
    city: "Dhaka"
  }
};

const cloned = { ...user };

cloned.address.city = "Khulna";

console.log(user.address.city);

