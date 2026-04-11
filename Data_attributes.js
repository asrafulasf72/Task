// Shopify variant buttons-এ data attribute থাকে
const variantBtns = document.querySelectorAll('[data-variant-id]');

variantBtns.forEach(btn => {
  btn.addEventListener('click', (e) => {
    const variantId = e.target.dataset.variantId;
    const variantPrice = e.target.dataset.price;
    const variantTitle = e.target.dataset.title;

    // Price update
    document.querySelector('#v-price').textContent = `৳ ${parseInt(variantPrice).toLocaleString()}`;
    document.querySelector('#v-title').textContent = variantTitle;

    // Active state
    variantBtns.forEach(b => b.classList.remove('v-active'));
    e.target.classList.add('v-active');

    console.log('Selected variant:', variantId);
    console.log('Price:', variantPrice);
    console.log('Title:', variantTitle);
  });
});

// data attribute set করা (JS থেকে)
const cartBtn = document.querySelector('#v-cart-btn');
cartBtn.dataset.lastAdded = Date.now();
cartBtn.dataset.productId = '8234567890';

console.log('Cart btn product:', cartBtn.dataset.productId);

// Shopify section rendering-এ section ID পড়া
const section = document.querySelector('[data-section-id]');
if(section) console.log('Section ID:', section.dataset.sectionId);