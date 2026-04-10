// querySelector — CSS selector দিয়ে
// id দিয়ে select
const addBtn = document.querySelector('#add-to-cart');

// class দিয়ে select
const price = document.querySelector('.product-price');

// data attribute দিয়ে (Shopify-তে সবচেয়ে common)
const variantEl = document.querySelector('[data-variant-id]');

// tag দিয়ে
const title = document.querySelector('h2');

// querySelectorAll — সব elements
const allSizes = document.querySelectorAll('.size-btn');

// console-এ দেখি কী পেলাম
console.log('Button text:', addBtn?.textContent);
console.log('Price text:', price?.textContent);
console.log('Variant ID:', variantEl?.dataset.variantId);
console.log('Title:', title?.textContent);
console.log('Size buttons found:', allSizes.length);

// loop করা
allSizes.forEach(btn => {
  console.log('Size:', btn.textContent);
});