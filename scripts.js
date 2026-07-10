function Mode() {
  const body = document.body;
  if (body.getAttribute('mode') === 'dark') {
      document.querySelector('.mode-btn').textContent = '🏙️';
      body.setAttribute('mode', 'light');
  } else {
      document.querySelector('.mode-btn').textContent = '🌃';
      body.setAttribute('mode', 'dark');
  }
}
