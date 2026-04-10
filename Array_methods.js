// Shopify cart items (API response এভাবে আসে)
const cartItems = [
  { id: 1, title: "T-Shirt", price: 800, quantity: 2, vendor: "BrandA" },
  { id: 2, title: "Hoodie", price: 1500, quantity: 1, vendor: "BrandB" },
  { id: 3, title: "Cap", price: 400, quantity: 3, vendor: "BrandA" },
];

// MAP — প্রতিটা item transform করো (নতুন array)
const itemTitles = cartItems.map(item => item.title);
console.log("Titles:", itemTitles);

// MAP — total price per item
const itemTotals = cartItems.map(item => ({
  title: item.title,
  total: item.price * item.quantity
}));
console.log("Totals:", JSON.stringify(itemTotals));

// FILTER — শুধু BrandA-এর items
const brandAItems = cartItems.filter(item => item.vendor === "BrandA");
console.log("BrandA items:", brandAItems.length);

// FILTER — 1000 BDT-এর বেশি দামের items
const premiumItems = cartItems.filter(item => item.price > 1000);
console.log("Premium:", premiumItems.map(i => i.title));

// FIND — নির্দিষ্ট item খোঁজো (প্রথমটা return করে)
const hoodie = cartItems.find(item => item.id === 2);
console.log("Found:", hoodie.title);

// FOREACH — প্রতিটা item-এ কিছু করো
let grandTotal = 0;
cartItems.forEach(item => {
  grandTotal += item.price * item.quantity;
});
console.log("Grand Total:", grandTotal, "BDT");

// REDUCE — আরও powerful (total বের করা)
const total = cartItems.reduce((sum, item) => sum + (item.price * item.quantity), 0);
console.log("Reduce Total:", total, "BDT");