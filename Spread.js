// ---- SPREAD ----

// Array spread — merge করা
const sizes = ["S", "M", "L"];
const moreSizes = ["XL", "XXL"];
const allSizes = [...sizes, ...moreSizes];
console.log("All sizes:", allSizes);

// Object spread — Shopify cart item update
const cartItem = { variantId: 123, quantity: 1 };
const updatedItem = { ...cartItem, quantity: 3, properties: { gift: "yes" } };
console.log("Updated item:", JSON.stringify(updatedItem));

// Object copy (original পরিবর্তন হবে না)
const original = { price: 1000, title: "Shirt" };
const copy = { ...original, price: 900 }; // sale price
console.log("Original:", original.price, "| Sale:", copy.price);

// Shopify fetch body তৈরি
const baseParams = { items: [{ id: 456, quantity: 1 }] };
const finalBody = JSON.stringify({ ...baseParams });
console.log("Fetch body:", finalBody);

// ---- REST ----
// Function-এ যত খুশি argument
const logCartItems = (...items) => {
  console.log(`Cart has ${items.length} items:`);
  items.forEach(item => console.log(" -", item));
};

logCartItems("T-Shirt", "Hoodie", "Cap");