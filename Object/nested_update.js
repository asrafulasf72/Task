const users = [
  {
    id: 1,
    name: "Rahim",
    address: {
      city: "Dhaka",
      zip: 1200
    }
  },
  {
    id: 2,
    name: "Karim",
    address: {
      city: "Khulna",
      zip: 9000
    }
  }
];

const updatedUsers = users.map(user =>
  user.id === 2
    ? {
        ...user,
        address: {
          ...user.address,
          city: "Chittagong"
        }
      }
    : user
);

console.log(updatedUsers);