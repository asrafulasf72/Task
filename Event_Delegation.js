const cartList = document.querySelector('#d-cart');
const dlog = document.querySelector('#dlog');
const lg = msg => { dlog.innerHTML = `<div style="font-size:12px;padding:2px 0;">${msg}</div>` + dlog.innerHTML; };

let cartItems = [
  { id: 1, title: "Classic Hoodie", qty: 1, price: 1500 },
  { id: 2, title: "Denim Cap", qty: 2, price: 400 },
];

function renderCart() {
  cartList.innerHTML = cartItems.map(item => `
    <div data-item-id="${item.id}" style="display:flex;align-items:center;gap:8px;padding:8px 0;border-bottom:0.5px solid var(--color-border-tertiary);">
      <div style="flex:1;font-size:13px;color:var(--color-text-primary);">${item.title}</div>
      <button class="qty-btn" data-action="decrease" style="width:24px;height:24px;border:0.5px solid var(--color-border-secondary);border-radius:4px;background:transparent;cursor:pointer;font-size:14px;color:var(--color-text-primary);">−</button>
      <span class="qty-display" style="font-size:13px;font-weight:500;min-width:16px;text-align:center;color:var(--color-text-primary);">${item.qty}</span>
      <button class="qty-btn" data-action="increase" style="width:24px;height:24px;border:0.5px solid var(--color-border-secondary);border-radius:4px;background:transparent;cursor:pointer;font-size:14px;color:var(--color-text-primary);">+</button>
      <span style="font-size:13px;font-weight:500;min-width:52px;text-align:right;color:var(--color-text-primary);">৳${(item.price * item.qty).toLocaleString()}</span>
      <button class="remove-btn" style="font-size:11px;padding:2px 7px;border:0.5px solid #F0997B;border-radius:4px;background:#FAECE7;color:#993C1D;cursor:pointer;">✕</button>
    </div>
  `).join('');
  const total = cartItems.reduce((s, i) => s + i.price * i.qty, 0);
  document.querySelector('#d-total').textContent = `Total: ৳${total.toLocaleString()}`;
}

// DELEGATION — একটা listener, সব কাজ!
cartList.addEventListener('click', (e) => {
  const itemEl = e.target.closest('[data-item-id]');
  if (!itemEl) return;
  const id = parseInt(itemEl.dataset.itemId);
  const item = cartItems.find(i => i.id === id);

  if (e.target.closest('.qty-btn')) {
    const action = e.target.dataset.action;
    if (action === 'increase') {
      item.qty++;
      lg(`${item.title} qty: ${item.qty}`);
    } else if (action === 'decrease' && item.qty > 1) {
      item.qty--;
      lg(`${item.title} qty: ${item.qty}`);
    }
    renderCart();
  }

  if (e.target.closest('.remove-btn')) {
    cartItems = cartItems.filter(i => i.id !== id);
    lg(`Removed: ${item.title}`);
    renderCart();
  }
});

renderCart();
lg('Delegation ready — +/− ও remove করো!');