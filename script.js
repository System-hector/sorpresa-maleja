const otters = document.querySelectorAll(".otter");

otters.forEach((otter, i) => {
    otter.style.animation = `popUp 1.3s ${i * 0.25}s forwards`;
});
