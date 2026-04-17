console.log("1. Page load শুরু");

// setTimeout = async (0.5 সেকেন্ড পরে চলবে)
setTimeout(() => {
  console.log("3. Cart API response এলো!");
}, 500);

console.log("2. Page load শেষ — user দেখছে");

// Real Shopify এ এটাই হয়:
// 1. Page load হয়
// 2. User দেখতে পায়
// 3. Background-এ API call হয়
// 4. Data আসলে update হয়

// Sync example — একটা আটকালে সব আটকে যায়
console.log("--- Sync vs Async ---");
console.log("Sync: line by line চলে");

// এটা async — callback পরে চলে
setTimeout(() => console.log("Async: পরে চলে!"), 0);

console.log("এটা আগে print হবে!");