// Shopify Product Section JS
const productData = {
  title: "Premium Hoodie",
  variants: [
    { id: 301, title: "S / Black", price: 1500, stock: 5 },
    { id: 302, title: "M / Black", price: 1500, stock: 0 },
    { id: 303, title: "L / Black", price: 1700, stock: 12 },
  ]
};

// Elements select করা
const variantBtns = document.querySelectorAll('.pv-btn');
const priceEl = document.querySelector('#p-price');
const stockEl = document.querySelector('#p-stock');
const addBtn = document.querySelector('#p-add-btn');
const titleEl = document.querySelector('#p-variant-title');

// Variant select handler
variantBtns.forEach(btn => {
  btn.addEventListener('click', (e) => {
    const variantId = parseInt(e.target.dataset.variantId);
    const variant = productData.variants.find(v => v.id === variantId);

    // Active state update
    variantBtns.forEach(b => b.classList.remove('pv-active'));
    e.target.classList.add('pv-active');

    // Price update
    priceEl.textContent = `৳ ${variant.price.toLocaleString()}`;

    // Variant title
    titleEl.textContent = variant.title;

    // Stock status
    if (variant.stock === 0) {
      stockEl.textContent = 'Sold Out';
      stockEl.style.color = '#E24B4A';
      addBtn.textContent = 'Sold Out';
      addBtn.disabled = true;
      addBtn.style.opacity = '0.5';
      addBtn.style.cursor = 'not-allowed';
    } else if (variant.stock < 6) {
      stockEl.textContent = `Only ${variant.stock} left!`;
      stockEl.style.color = '#BA7517';
      addBtn.textContent = 'Add to Cart';
      addBtn.disabled = false;
      addBtn.style.opacity = '1';
      addBtn.style.cursor = 'pointer';
    } else {
      stockEl.textContent = 'In Stock';
      stockEl.style.color = '#1D9E75';
      addBtn.textContent = 'Add to Cart';
      addBtn.disabled = false;
      addBtn.style.opacity = '1';
    }
    console.log(`Variant: ${variant.title} | Stock: ${variant.stock}`);
  });
});

// Add to cart click
addBtn.addEventListener('click', () => {
  if (!addBtn.disabled) {
    addBtn.textContent = 'Adding...';
    setTimeout(() => {
      addBtn.textContent = 'Added!';
      addBtn.style.background = '#1D9E75';
      setTimeout(() => {
        addBtn.textContent = 'Add to Cart';
        addBtn.style.background = '#185FA5';
      }, 1500);
    }, 800);
    console.log('Cart-এ add হচ্ছে...');
  }
});