const [user, setUser] = useState({
  name: "Asraful",
  address: {
    city: "Dhaka",
    zip: 1200
  }
});

setUser(prevUser => ({
  ...prevUser,
  address: {
    ...prevUser.address,
    city: "Sylhet"
  }
}));