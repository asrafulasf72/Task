const elog = document.querySelector('#elog');
function lg(msg){ elog.innerHTML = `<div style="font-size:12px;padding:2px 0;">${msg}</div>` + elog.innerHTML; }

// e.target — কোন element থেকে event এলো
document.querySelector('#ev-container').addEventListener('click', (e) => {
  lg(`Clicked: ${e.target.tagName} — "${e.target.textContent.trim()}"`);
});

// e.preventDefault() — form submit বন্ধ করা
// Shopify newsletter form-এ এটা লাগে
document.querySelector('#newsletter-form').addEventListener('submit', (e) => {
  e.preventDefault(); // page reload বন্ধ
  const email = document.querySelector('#email-field').value;
  if (!email.includes('@')) {
    lg('Error: valid email দাও!');
    document.querySelector('#email-field').style.borderColor = '#E24B4A';
    return;
  }
  document.querySelector('#email-field').style.borderColor = '#1D9E75';
  lg(`Subscribed: ${email}`);
});

// e.stopPropagation() — parent-এ event যাওয়া বন্ধ
const card = document.querySelector('#prod-card');
const deleteBtn = document.querySelector('#del-btn');

card.addEventListener('click', () => {
  lg('Product card clicked — navigate করতাম');
});

deleteBtn.addEventListener('click', (e) => {
  e.stopPropagation(); // card-এর click fire হবে না
  lg('Delete clicked — cart থেকে remove!');
});

// e.key — keyboard event
document.querySelector('#search-box').addEventListener('keydown', (e) => {
  if (e.key === 'Enter') {
    lg(`Search: ${e.target.value}`);
  }
  if (e.key === 'Escape') {
    e.target.value = '';
    lg('Search cleared');
  }
});