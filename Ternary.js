const stockCount = 3;
const cartItemCount = 0;
const isLoggedIn = true;
const price = 1500;
const comparePrice = 2000;

// Basic ternary
const stockMsg = stockCount > 0 ? "In Stock" : "Out of Stock";
console.log(stockMsg);

// Cart state
const cartLabel = cartItemCount === 0 ? "Cart is empty" : `${cartItemCount} items in cart`;
console.log(cartLabel);

// Shopify — sale badge দেখাবো কি না
const showSaleBadge = comparePrice > price ? "SALE" : "";
console.log("Badge:", showSaleBadge);

// Low stock warning
const stockWarning = stockCount <= 5 ? `Only ${stockCount} left!` : "";
console.log("Warning:", stockWarning);

// User greeting
const greeting = isLoggedIn ? "Welcome back!" : "Please login";
console.log(greeting);

// Nested ternary (এটা readable রাখো)
const stockStatus = stockCount === 0
  ? "Sold Out"
  : stockCount < 5
    ? "Low Stock"
    : "Available";
console.log("Status:", stockStatus);

// Button text
const btnText = stockCount > 0 ? "Add to Cart" : "Notify Me";
console.log("Button:", btnText);