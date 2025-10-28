let opened = false;

function openBox() {
    if (opened) return;
    opened = true;

    document.querySelector('.lid').style.transform = "translateY(-140px) rotate(25deg)";
    document.querySelector('.gift-box').style.transform = "scale(1.1)";
    document.getElementById('message').style.display = "block";

    const container = document.getElementById("otters-container");
    const nutrias = ["🦦", "🦦💞", "💞🦦"];

    nutrias.forEach((emoji, i) => {
        let otter = document.createElement("div");
        otter.classList.add("otter");
        otter.innerHTML = emoji;
        otter.style.animationDelay = `${i * 0.3}s`;
        container.appendChild(otter);
    });
}
