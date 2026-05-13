const cart = {
  items: [
    { id: 1, name: "Phone", qty: 1 },
    { id: 2, name: "Laptop", qty: 2 }
  ]
};
const updatedCart = {
  ...cart,
  items: cart.items.map(item =>
    item.id === 2
      ? { ...item, qty: item.qty + 1 }
      : item
  )
};

console.log(updatedCart);