const flog = document.querySelector('#flog');
const lg = (msg) => { flog.innerHTML = `<div style="font-size:12px;padding:2px 0;border-bottom:0.5px solid var(--color-border-tertiary);">${msg}</div>` + flog.innerHTML; };

// input event — live, প্রতিটা keystroke-এ
const searchInput = document.querySelector('#live-search');
searchInput.addEventListener('input', (e) => {
  const val = e.target.value;
  const results = document.querySelector('#search-results');
  const products = ['Classic Hoodie', 'Cotton T-Shirt', 'Denim Cap', 'Running Shoes', 'Leather Wallet'];
  if (val.length > 0) {
    const filtered = products.filter(p => p.toLowerCase().includes(val.toLowerCase()));
    results.innerHTML = filtered.map(p => `<div style="padding:6px 10px;font-size:13px;cursor:pointer;border-bottom:0.5px solid var(--color-border-tertiary);color:var(--color-text-primary);">${p}</div>`).join('') || '<div style="padding:6px 10px;font-size:13px;color:var(--color-text-secondary);">No results</div>';
    results.style.display = 'block';
  } else {
    results.style.display = 'none';
  }
  lg(`Search: "${val}"`);
});

// change event — Shopify variant select dropdown
const variantSelect = document.querySelector('#variant-sel');
variantSelect.addEventListener('change', (e) => {
  const [title, price] = e.target.value.split('|');
  document.querySelector('#sel-price').textContent = `৳ ${parseInt(price).toLocaleString()}`;
  lg(`Variant: ${title} — ৳${price}`);
});

// focus / blur — input highlight
const couponInput = document.querySelector('#coupon');
couponInput.addEventListener('focus', () => {
  couponInput.style.borderColor = '#378ADD';
  couponInput.placeholder = 'Enter code...';
});
couponInput.addEventListener('blur', () => {
  couponInput.style.borderColor = '';
});

// submit
document.querySelector('#coupon-form').addEventListener('submit', (e) => {
  e.preventDefault();
  const code = couponInput.value.toUpperCase();
  const valid = ['SAVE10', 'BD20', 'EID50'];
  const msg = document.querySelector('#coupon-msg');
  if (valid.includes(code)) {
    msg.textContent = `"${code}" applied!`;
    msg.style.color = '#1D9E75';
  } else {
    msg.textContent = 'Invalid code';
    msg.style.color = '#E24B4A';
  }
  lg(`Coupon tried: ${code}`);
});