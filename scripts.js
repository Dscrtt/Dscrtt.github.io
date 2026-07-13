const body = document.body;
//default mode
body.setAttribute('mode', 'light');

function Mode() {
    if (body.getAttribute('mode') === 'dark') {
        document.querySelector('.mode-btn').textContent = '🏙️';
        body.setAttribute('mode', 'light');
    } else {
        document.querySelector('.mode-btn').textContent = '🌃';
        body.setAttribute('mode', 'dark');
    }
}
