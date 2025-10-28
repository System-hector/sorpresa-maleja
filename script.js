
let opened = false;

function openBox() {
    if (opened) return;
    opened = true;

    document.querySelector('.lid').style.transform = 'translateY(-140px) rotate(25deg)';
    document.querySelector('.gift-box').style.transform = 'scale(1.15)';
    document.getElementById('message').style.display = 'block';

    let otters = ["🦦", "🦦💞", "💞🦦"];
    for (let i = 0; i < 3; i++) {
        let otter = document.createElement('div');
        otter.classList.add('otter');
        otter.innerHTML = otters[i % otters.length];
        otter.style.left = (window.innerWidth / 2 - 30 + (i * 40)) + 'px';
        otter.style.bottom = '20px';
        otter.style.animationDelay = (i * 0.4) + 's';
        document.body.appendChild(otter);
    }
}
