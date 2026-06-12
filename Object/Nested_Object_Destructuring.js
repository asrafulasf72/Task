const user = {
  name: "Asraful",
  address: {
    city: "Dhaka",
    zip: 1200
  }
};

const {
  name,
  address: { city, zip }
} = user;

console.log(name); // Asraful
console.log(city); // Dhaka
console.log(zip);  // 1200