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

/**
 * Answer
Dhaka
ReferenceError: address is not defined
💡 Why?

Only city was extracted.

address: { city }

does not create an address variable.
 * 
 * 
 * 
 */