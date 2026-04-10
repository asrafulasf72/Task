// show / hide — Shopify cart drawer
const cartDrawer = document.querySelector('.cart-drawer');
const overlay = document.querySelector('.overlay');

// cart খোলা
cartDrawer.style.display = 'block';
overlay.style.display = 'block';
overlay.style.opacity = '0.5';

// Sold out button style
const addBtn = document.querySelector('#add-btn');
const stockCount = 0;

if (stockCount === 0) {
  addBtn.style.backgroundColor = '#888';
  addBtn.style.cursor = 'not-allowed';
  addBtn.style.opacity = '0.6';
  addBtn.textContent = 'Sold Out';
  addBtn.disabled = true;
} else {
  addBtn.style.backgroundColor = '#185FA5';
  addBtn.style.cursor = 'pointer';
  addBtn.style.opacity = '1';
  addBtn.textContent = 'Add to Cart';
}

// Sale price লাল করা
const priceEl = document.querySelector('.flash-price');
priceEl.style.color = '#E24B4A';
priceEl.style.fontWeight = '500';
priceEl.textContent = '৳ 999 — Flash Sale!';

// width, height বদলানো
const progressBar = document.querySelector('.progress');
const sold = 70;
progressBar.style.width = sold + '%';
progressBar.style.backgroundColor = '#1D9E75';
progressBar.style.height = '6px';
progressBar.style.borderRadius = '3px';

console.log('Cart drawer display:', cartDrawer.style.display);
console.log('Button state:', addBtn.disabled ? 'disabled' : 'active');