const menuButton = document.querySelector('.menu-button');
const navLinks = document.querySelector('.nav-links');

menuButton.addEventListener('click', () => {
  const isOpen = navLinks.classList.toggle('open');
  menuButton.setAttribute('aria-expanded', isOpen);
});

document.querySelectorAll('.nav-links a').forEach((link) => {
  link.addEventListener('click', () => {
    navLinks.classList.remove('open');
    menuButton.setAttribute('aria-expanded', 'false');
  });
});

document.getElementById('message-form').addEventListener('submit', (event) => {
  event.preventDefault();
  const name = document.getElementById('name').value.trim();
  const dedication = document.getElementById('dedication').value.trim();
  const result = document.getElementById('result');
  result.textContent = `Para ${name}: “${dedication}” 💛`;
});

document.getElementById('share-button').addEventListener('click', async () => {
  const shareData = { title: 'Día de Flores Amarillas', text: 'Te envío un poquito de sol y flores amarillas 💛', url: window.location.href };
  try {
    if (navigator.share) {
      await navigator.share(shareData);
    } else {
      await navigator.clipboard.writeText(window.location.href);
      alert('¡Enlace copiado! Ya puedes compartir la alegría 💛');
    }
  } catch (error) {
    if (error.name !== 'AbortError') console.error('No se pudo compartir:', error);
  }
});

document.getElementById('year').textContent = new Date().getFullYear();
