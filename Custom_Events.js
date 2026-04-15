const clog = document.querySelector('#clog');
const lg = msg => { clog.innerHTML = `<div style="font-size:12px;padding:2px 0;">${msg}</div>` + clog.innerHTML; };

// LISTEN — যেকোনো জায়গা থেকে listen করা যায়
// Header cart count — cart update হলে নিজেই update হবে
document.addEventListener('cart:updated', (e) => {
  const { itemCount, total } = e.detail;
  document.querySelector('#header-count').textContent = itemCount;
  document.querySelector('#header-count').style.display = itemCount > 0 ? 'inline-flex' : 'none';
  document.querySelector('#c-total-display').textContent = `৳${total.toLocaleString()}`;
  lg(`cart:updated fired — ${itemCount} items, ৳${total}`);
});

// Notification listen করা
document.addEventListener('shop:notify', (e) => {
  const notif = document.querySelector('#notif-bar');
  notif.textContent = e.detail.message;
  notif.style.background = e.detail.type === 'success' ? '#E1F5EE' : '#FAECE7';
  notif.style.color = e.detail.type === 'success' ? '#085041' : '#993C1D';
  notif.style.display = 'block';
  setTimeout(() => notif.style.display = 'none', 2500);
  lg(`notify: ${e.detail.message}`);
});

// DISPATCH — Add to Cart button
let count = 0;
let cartTotal = 0;
document.querySelector('#c-add-btn').addEventListener('click', () => {
  count++;
  cartTotal += 1500;
  document.dispatchEvent(new CustomEvent('cart:updated', {
    detail: { itemCount: count, total: cartTotal }
  }));
  document.dispatchEvent(new CustomEvent('shop:notify', {
    detail: { message: 'Classic Hoodie added!', type: 'success' }
  }));
});

document.querySelector('#c-err-btn').addEventListener('click', () => {
  document.dispatchEvent(new CustomEvent('shop:notify', {
    detail: { message: 'Out of stock!', type: 'error' }
  }));
});

lg('Custom events ready!');