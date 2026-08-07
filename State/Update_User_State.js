const [user, setUser] = useState({
  name: "Asraful",
  age: 22,
  city: "Dhaka"
});

const updateCity = () => {
  setUser(prevUser => ({
    ...prevUser,
    city: "Chittagong"
  }));
};