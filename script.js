
let opened = false;

function openBox() {
    if (opened) return;
    opened = true;

    document.querySelector('.lid').style.transform = 'translateY(-140px) rotate(25deg)';
    document.querySelector('.gift-box').style.transform = 'scale(1.15)';
    document.getElementById('message').style.display = 'block';

    for (let i = 0; i < 18; i++) {
        let rose = document.createElement('div');
        rose.classList.add('rose');
        rose.innerHTML = '🌹';
        rose.style.left = Math.random() * window.innerWidth + 'px';
        rose.style.bottom = '0px';
        rose.style.animationDelay = (Math.random() * 2) + 's';
        document.body.appendChild(rose);
    }
}
