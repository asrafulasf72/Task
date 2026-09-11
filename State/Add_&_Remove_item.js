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


/**Remove From Cart */

const [removecart, setRemoveCart] = useState([
  { id: 1, name: "Phone", qty: 1 },
  { id: 2, name: "Mouse", qty: 2 },
  { id: 3, name: "Keyboard", qty: 1 }
]);