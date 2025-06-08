document.addEventListener("DOMContentLoaded", () => {
    const outer = document.querySelector('.cursor-outer');
    const inner = document.querySelector('.cursor-inner');

    document.addEventListener('mousemove', e => {
        const x = e.clientX;
        const y = e.clientY;

        outer.style.left = x + 'px';
        outer.style.top = y + 'px';
        inner.style.left = x + 'px';
        inner.style.top = y + 'px';
    });
});


document.addEventListener("DOMContentLoaded", function () {
    const openAboutBtn = document.getElementById("open-about");
    const closeAboutBtn = document.getElementById("close-about");
    const aboutModal = document.getElementById("about-modal");

    if (openAboutBtn && closeAboutBtn && aboutModal) {
        openAboutBtn.addEventListener("click", function (e) {
            e.preventDefault();
            aboutModal.style.display = "flex";
        });

        closeAboutBtn.addEventListener("click", function () {
            aboutModal.style.display = "none";
        });

        aboutModal.addEventListener("click", function (e) {
            if (e.target === aboutModal) {
                aboutModal.style.display = "none";
            }
        });
    }
});

document.addEventListener("DOMContentLoaded", () => {
    const outer = document.querySelector('.cursor-outer');
    const inner = document.querySelector('.cursor-inner');

    document.addEventListener('mousemove', e => {
        outer.style.left = `${e.clientX}px`;
        outer.style.top = `${e.clientY}px`;
        inner.style.left = `${e.clientX}px`;
        inner.style.top = `${e.clientY}px`;
    });
});

