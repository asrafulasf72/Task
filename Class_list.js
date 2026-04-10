// Size button active করা — Shopify variant select
const sizeBtns = document.querySelectorAll('.sz-btn');

sizeBtns.forEach(btn => {
  btn.addEventListener('click', () => {
    // আগের active সরাও
    sizeBtns.forEach(b => b.classList.remove('active-size'));
    // এই button-এ active দাও
    btn.classList.add('active-size');
    console.log('Selected size:', btn.textContent);
  });
});

// Cart drawer toggle
const cartToggle = document.querySelector('#cart-icon');
const drawer = document.querySelector('#cart-side');

cartToggle.addEventListener('click', () => {
  drawer.classList.toggle('is-open');
  document.body.classList.toggle('drawer-open');
  const isOpen = drawer.classList.contains('is-open');
  console.log('Drawer is:', isOpen ? 'OPEN' : 'CLOSED');
});

// Error state — form validation
const emailInput = document.querySelector('#email-input');
emailInput.addEventListener('input', (e) => {
  const valid = e.target.value.includes('@');
  emailInput.classList.toggle('has-error', !valid);
  emailInput.classList.toggle('is-valid', valid);
});

// Notification badge show
const badge = document.querySelector('#notif-badge');
badge.classList.remove('hidden');
badge.classList.add('visible');