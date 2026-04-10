// textContent — শুধু text বদলানো (safe)
const priceEl = document.querySelector('.price');
priceEl.textContent = '৳ 1,200'; // sale price

// innerHTML — HTML সহ বদলানো
const badgeEl = document.querySelector('.stock-badge');
badgeEl.innerHTML = '<strong>Only 3 left!</strong>';

// cart count update — Shopify-তে সবচেয়ে common
const cartCount = document.querySelector('.cart-count');
cartCount.textContent = '2';
cartCount.style.display = 'block';

// variant select হলে price বদলানো
const variants = {
  'small': 1200,
  'medium': 1500,
  'large': 1800
};
const selectedSize = 'medium';
const newPrice = variants[selectedSize];
priceEl.textContent = `৳ ${newPrice.toLocaleString()}`;

// compare price (original) দেখানো
const compareEl = document.querySelector('.compare-price');
compareEl.textContent = '৳ 2,000';
compareEl.style.textDecoration = 'line-through';
compareEl.style.color = 'gray';
compareEl.style.fontSize = '13px';
compareEl.style.marginLeft = '6px';

console.log('Price updated to:', priceEl.textContent);
console.log('Cart count:', cartCount.textContent);