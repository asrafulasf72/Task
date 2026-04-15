// window scroll — Shopify sticky header
window.addEventListener('scroll', () => {
  const header = document.querySelector('#demo-header');
  const backBtn = document.querySelector('#back-top');
  const scrolled = window.scrollY;

  // 50px scroll হলে header sticky হবে
  if (scrolled > 50) {
    header.classList.add('is-sticky');
    backBtn.style.opacity = '1';
    backBtn.style.pointerEvents = 'auto';
  } else {
    header.classList.remove('is-sticky');
    backBtn.style.opacity = '0';
    backBtn.style.pointerEvents = 'none';
  }

  // scroll progress bar
  const docHeight = document.body.scrollHeight - window.innerHeight;
  const progress = docHeight > 0 ? (scrolled / docHeight) * 100 : 0;
  document.querySelector('#scroll-progress').style.width = Math.min(progress, 100).toFixed(0) + '%';

  document.querySelector('#scroll-val').textContent = `ScrollY: ${Math.round(scrolled)}px`;
});

// back to top button
document.querySelector('#back-top').addEventListener('click', () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
});

// resize — mobile/desktop layout switch
window.addEventListener('resize', () => {
  const w = window.innerWidth;
  document.querySelector('#screen-size').textContent = `Window: ${w}px — ${w < 768 ? 'Mobile' : 'Desktop'}`;
});

document.querySelector('#screen-size').textContent = `Window: ${window.innerWidth}px`;
console.log('Scroll & resize listeners ready!');