
let boxOpened = false;

function openBox() {
    if (boxOpened) return;
    boxOpened = true;
    
    document.querySelector('.lid').style.transform = 'translateY(-120px) rotate(20deg)';
    document.querySelector('.gift-box').style.transform = 'scale(1.1)';
    document.getElementById('message').style.display = 'block';
    document.getElementById('musicBtn').style.display = 'inline-block';

    // Create roses animation
    for (let i = 0; i < 12; i++) {
        let rose = document.createElement('div');
        rose.classList.add('rose');
        rose.innerHTML = '🌹';
        rose.style.left = Math.random() * window.innerWidth + 'px';
        rose.style.animationDelay = (Math.random() * 2) + 's';
        document.body.appendChild(rose);
    }
}

function playMusic() {
    window.open("https://www.youtube.com/watch?v=8S4vE2F3WnI", "_blank");
}
