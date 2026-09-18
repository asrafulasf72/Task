const [cart, setCart] = useState({
  customer: {
    name: "Asraful",
    city: "Dhaka"
  },

  items: [
    {
      id: 1,
      name: "Laptop",
      quantity: 1,
      price: 60000
    },
    {
      id: 2,
      name: "Mouse",
      quantity: 2,
      price: 1000
    }
  ]
});