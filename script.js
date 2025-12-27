const themeToggle = document.getElementById('themeToggle');
const root = document.documentElement;
function applyTheme(theme){
  if(theme === 'dark'){
    root.setAttribute('data-theme','dark');
    themeToggle.textContent = '☀️';
    themeToggle.setAttribute('aria-pressed','true');
  } else {
    root.removeAttribute('data-theme');
    themeToggle.textContent = '🌙';
    themeToggle.setAttribute('aria-pressed','false');
  }
}
const saved = localStorage.getItem('theme') || 'light';
applyTheme(saved);
themeToggle.addEventListener('click', () => {
  const next = (root.getAttribute('data-theme') === 'dark')? 'light' : 'dark';
  applyTheme(next);
  localStorage.setItem('theme', next);
});


const cards = document.querySelectorAll('.card');
if('IntersectionObserver' in window){
  const obs = new IntersectionObserver(entries=>{
    entries.forEach(e=>{
      if(e.isIntersecting){
        const el = e.target;
        const idx = Array.from(cards).indexOf(el);
        setTimeout(()=>{
          el.classList.add('animate-in');
          obs.unobserve(el);
        }, idx * 150);
      }
    });
  },{threshold:0.18});
  cards.forEach(c=>{ obs.observe(c); });
}