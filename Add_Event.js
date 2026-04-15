const addBtn = document.querySelector('#add-btn');
const wishBtn = document.querySelector('#wish-btn');
const qtyInput = document.querySelector('#qty');
const log = document.querySelector('#ev-log');

function addLog(msg) {
  log.innerHTML = `<div style="padding:3px 0;border-bottom:0.5px solid var(--color-border-tertiary);font-size:12px;">${msg}</div>` + log.innerHTML;
}

// click event
addBtn.addEventListener('click', () => {
  addLog('Add to Cart clicked!');
  addBtn.textContent = 'Added!';
  addBtn.style.background = '#1D9E75';
  setTimeout(() => {
    addBtn.textContent = 'Add to Cart';
    addBtn.style.background = '#185FA5';
  }, 1200);
});

// mouseenter / mouseleave (hover)
wishBtn.addEventListener('mouseenter', () => {
  wishBtn.textContent = 'Save Item';
  addLog('Wishlist hover!');
});
wishBtn.addEventListener('mouseleave', () => {
  wishBtn.textContent = 'Wishlist';
});

// change event — input বদলালে
qtyInput.addEventListener('change', (e) => {
  addLog(`Quantity changed: ${e.target.value}`);
});

// dblclick
addBtn.addEventListener('dblclick', () => {
  addLog('Double clicked!');
});

addLog('Events ready — click করো!');