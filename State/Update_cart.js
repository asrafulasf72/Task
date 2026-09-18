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

setCart(prevCart => ({
  ...prevCart,

  items: prevCart.items.map(item =>
    item.id === 1
      ? {
          ...item,
          quantity: item.quantity + 1
        }
      : item
  )
}));


/* Destructuring Props */

function UserCard(props) {
  return (
    <h2>{props.name}</h2>
  );
}

function UserCard({ name }) {
  return (
    <h2>{name}</h2>
  );
}


function UserCard({ name, age, city }) {
  return (
    <div>
      <h2>{name}</h2>
      <p>{age}</p>
      <p>{city}</p>
    </div>
  );
}