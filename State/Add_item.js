const [cart, setCart] = useState([
  { id: 1, name: "Phone", qty: 1 },
  { id: 2, name: "Mouse", qty: 2 }
]);

setCart(prevCart => [
  ...prevCart,
  {
    id: 3,
    name: "Keyboard",
    qty: 1
  }
]);