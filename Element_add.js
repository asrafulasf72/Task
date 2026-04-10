// Shopify cart items — dynamic render
const cartItems = [
  { id: 1, title: "Classic Hoodie", price: 1500, qty: 2, img: "👕" },
  { id: 2, title: "Cap", price: 400, qty: 1, img: "🧢" },
];

const cartList = document.querySelector('#cart-list');
cartList.innerHTML = ''; // আগের content clear

// Method 1: innerHTML দিয়ে (সহজ, Shopify-তে বেশি ব্যবহার)
const itemsHTML = cartItems.map(item => `
  <div style="display:flex;align-items:center;gap:10px;padding:8px 0;border-bottom:0.5px solid var(--color-border-tertiary);">
    <span style="font-size:22px;">${item.img}</span>
    <div style="flex:1;">
      <div style="font-size:13px;font-weight:500;color:var(--color-text-primary);">${item.title}</div>
      <div style="font-size:12px;color:var(--color-text-secondary);">Qty: ${item.qty}</div>
    </div>
    <div style="font-size:13px;font-weight:500;color:var(--color-text-primary);">৳${(item.price * item.qty).toLocaleString()}</div>
  </div>
`).join('');

cartList.innerHTML = itemsHTML;

// total calculate ও দেখানো
const total = cartItems.reduce((sum, i) => sum + i.price * i.qty, 0);
document.querySelector('#cart-total').textContent = `Total: ৳${total.toLocaleString()}`;

// Method 2: createElement (more control)
const notification = document.createElement('div');
notification.textContent = 'Item added to cart!';
notification.style.cssText = 'background:#E1F5EE;color:#085041;padding:8px 12px;border-radius:4px;font-size:13px;margin-top:10px;';
document.querySelector('#notif-area').appendChild(notification);

console.log('Cart items rendered:', cartItems.length);
console.log('Total:', total);