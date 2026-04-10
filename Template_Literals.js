const productTitle = "Classic T-Shirt";
const productPrice = 850;
const quantity = 3;
const variantId = 41234567890;

// পুরনো উপায় — কষ্টকর
const oldWay = "Product: " + productTitle + ", Price: " + productPrice + " BDT";

// Template literal — সহজ ও পরিষ্কার
const newWay = `Product: ${productTitle}, Price: ${productPrice} BDT`;

// Expression ও লেখা যায়
const totalMsg = `Total: ${productPrice * quantity} BDT`;

// Shopify API URL তৈরি — এটা সবচেয়ে বেশি কাজে লাগে
const cartAddUrl = `/cart/add.js`;
const productUrl = `/products/${productTitle.toLowerCase().replace(' ', '-')}`;
const variantUrl = `/variants/${variantId}.js`;

// Multi-line string
const cartItem = `
  Variant ID: ${variantId}
  Quantity: ${quantity}
  Price: ${productPrice} BDT
`;

console.log(oldWay);
console.log(newWay);
console.log(totalMsg);
console.log("Cart URL:", cartAddUrl);
console.log("Product URL:", productUrl);
console.log(cartItem);