document.getElementById('toggle-mode').addEventListener('click', function() {
  document.body.classList.toggle('night-mode');
  if (document.body.classList.contains('night-mode')) {
    this.textContent = 'Modo Claro';
  } else {
    this.textContent = 'Modo Nocturno';
  }
});