// Shopify product object (API থেকে এভাবে আসে)
const product = {
  id: 8234567890,
  title: "Classic Hoodie",
  price: 1500,
  vendor: "MyBrand",
  variants: [{ id: 123, title: "Large / Black" }]
};

// পুরনো উপায়
const oldTitle = product.title;
const oldPrice = product.price;

// Object Destructuring — একলাইনে সব
const { id, title, price, vendor } = product;
console.log(`${title} by ${vendor} — ${price} BDT`);

// Default value সহ
const { comparePrice = 0, tags = [] } = product;
console.log("Compare price:", comparePrice);

// Rename করে নেওয়া
const { price: productPrice, id: productId } = product;
console.log(`ID: ${productId}, Price: ${productPrice}`);

// Array Destructuring
const colors = ["Black", "White", "Navy"];
const [firstColor, secondColor] = colors;
console.log(`First: ${firstColor}, Second: ${secondColor}`);

// Shopify cart response destructuring
const cartResponse = { token: "abc123", item_count: 3, total_price: 4500 };
const { item_count, total_price } = cartResponse;
console.log(`Cart: ${item_count} items, Total: ${total_price / 100} BDT`);