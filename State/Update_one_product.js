const [products, setProducts] = useState([
  { id: 1, name: "Phone", price: 20000 },
  { id: 2, name: "Laptop", price: 60000 },
  { id: 3, name: "Mouse", price: 1000 }
]);

setProducts(prevProducts=>
    prevProducts.map(product=>
        product.id === 2 ?
        {...product, price:5500} : product
    )
)