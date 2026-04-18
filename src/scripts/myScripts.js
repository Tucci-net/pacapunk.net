const isHomepage = window.location.pathname === '/' || window.location.pathname === '/index.html';

if (isHomepage) {
  const overlay = document.getElementById('intro-overlay');
  const mainSite = document.getElementById('main-site');
  const enterBtn = document.getElementById('enter-btn');

  const hasVisited = sessionStorage.getItem('paca-visited');

  if (overlay && hasVisited) {
    overlay.style.display = 'none';
    mainSite.classList.add('visible');
  }

  enterBtn?.addEventListener('click', () => {
    sessionStorage.setItem('paca-visited', 'true');
    overlay?.classList.add('hidden');
    mainSite?.classList.add('visible');
  });
}