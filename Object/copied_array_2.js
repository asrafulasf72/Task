const fruits = ["Apple", "Banana", "Orange"];

// Create a copy
const copiedFruits = [...fruits];

// Remove "Banana"
const bananaIndex = copiedFruits.indexOf("Banana");
if (bananaIndex !== -1) {
  copiedFruits.splice(bananaIndex, 1);
}

// Add "Mango"
copiedFruits.push("Mango");

console.log("Original:", fruits);
console.log("Copied:", copiedFruits);