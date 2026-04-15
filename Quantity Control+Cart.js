// === Shopify Product Page Events ===
let quantity = 1;
let selectedVariant = null;

const variants = [
  { id: 401, title: 'S / Black', price: 1200, stock: 8 },
  { id: 402, title: 'M / Black', price: 1500, stock: 0 },
  { id: 403, title: 'L / White', price: 1700, stock: 3 },
];

// Elements
const qtyDisplay = document.querySelector('#qty-num');
const minusBtn = document.querySelector('#qty-minus');
const plusBtn = document.querySelector('#qty-plus');
const addBtn = document.querySelector('#final-add');
const priceEl = document.querySelector('#final-price');
const stockEl = document.querySelector('#final-stock');
const variantBtns = document.querySelectorAll('.fv-btn');
const notifEl = document.querySelector('#final-notif');
const totalEl = document.querySelector('#final-total');

// Quantity control
minusBtn.addEventListener('click', () => {
  if (quantity > 1) { quantity--; updateQty(); }
});
plusBtn.addEventListener('click', () => {
  const maxStock = selectedVariant?.stock || 10;
  if (quantity < maxStock) { quantity++; updateQty(); }
});

function updateQty() {
  qtyDisplay.textContent = quantity;
  if (selectedVariant) {
    totalEl.textContent = `Total: ৳${(selectedVariant.price * quantity).toLocaleString()}`;
  }
}

// Variant select
variantBtns.forEach(btn => {
  btn.addEventListener('click', (e) => {
    const id = parseInt(e.target.dataset.variantId);
    selectedVariant = variants.find(v => v.id === id);
    variantBtns.forEach(b => { b.style.background='transparent'; b.style.color='var(--color-text-primary)'; b.style.borderColor='var(--color-border-secondary)'; });
    e.target.style.background = '#185FA5';
    e.target.style.color = 'white';
    e.target.style.borderColor = '#185FA5';
    quantity = 1; updateQty();
    priceEl.textContent = `৳ ${selectedVariant.price.toLocaleString()}`;
    if (selectedVariant.stock === 0) {
      stockEl.textContent = 'Sold Out'; stockEl.style.color = '#E24B4A';
      addBtn.textContent = 'Sold Out'; addBtn.disabled = true; addBtn.style.opacity = '0.5';
    } else if (selectedVariant.stock <= 3) {
      stockEl.textContent = `Only ${selectedVariant.stock} left!`; stockEl.style.color = '#BA7517';
      addBtn.textContent = 'Add to Cart'; addBtn.disabled = false; addBtn.style.opacity = '1';
    } else {
      stockEl.textContent = 'In Stock'; stockEl.style.color = '#1D9E75';
      addBtn.textContent = 'Add to Cart'; addBtn.disabled = false; addBtn.style.opacity = '1';
    }
  });
});

// Add to cart with loading state
addBtn.addEventListener('click', () => {
  if (!selectedVariant) { showNotif('একটা size select করো!', false); return; }
  addBtn.textContent = 'Adding...';
  addBtn.disabled = true;
  addBtn.style.opacity = '0.7';
  // Step 5-এ real fetch call করবো
  setTimeout(() => {
    addBtn.textContent = 'Added!';
    addBtn.style.background = '#1D9E75';
    addBtn.style.opacity = '1';
    showNotif(`${selectedVariant.title} × ${quantity} added to cart!`, true);
    document.dispatchEvent(new CustomEvent('cart:updated', { detail: { count: quantity } }));
    setTimeout(() => {
      addBtn.textContent = 'Add to Cart';
      addBtn.style.background = '#185FA5';
      addBtn.disabled = false;
    }, 1500);
  }, 900);
});

function showNotif(msg, success) {
  notifEl.textContent = msg;
  notifEl.style.background = success ? '#E1F5EE' : '#FAECE7';
  notifEl.style.color = success ? '#085041' : '#993C1D';
  notifEl.style.display = 'block';
  setTimeout(() => notifEl.style.display = 'none', 2500);
}

console.log('Product page events ready!');