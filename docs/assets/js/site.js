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
  const canvas = document.getElementById("cursor-trail");
  const ctx = canvas.getContext("2d");

  let width = window.innerWidth;
  let height = window.innerHeight;
  canvas.width = width;
  canvas.height = height;

  window.addEventListener("resize", () => {
    width = window.innerWidth;
    height = window.innerHeight;
    canvas.width = width;
    canvas.height = height;
  });

  const trail = [];
  const maxTrail = 20;

  document.addEventListener("mousemove", (e) => {
    trail.push({ x: e.clientX, y: e.clientY, time: Date.now() });
    if (trail.length > maxTrail) trail.shift();
  });

  function draw() {
    ctx.clearRect(0, 0, width, height);
    for (let i = 0; i < trail.length - 1; i++) {
      const p1 = trail[i];
      const p2 = trail[i + 1];
      const age = Date.now() - p1.time;
      const opacity = 1 - i / trail.length;

      ctx.strokeStyle = `rgba(245,198,208,${opacity})`;
      ctx.lineWidth = 8 * opacity;
      ctx.beginPath();
      ctx.moveTo(p1.x, p1.y);
      ctx.lineTo(p2.x, p2.y);
      ctx.stroke();
    }
    requestAnimationFrame(draw);
  }

  draw();
});

document.querySelectorAll('.project-card').forEach(card => {
  const canvas = card.querySelector('.ripple-canvas');
  const img = card.querySelector('img');
  const ctx = canvas.getContext('2d');

  // Setup canvas size
  function resize() {
    canvas.width = img.clientWidth;
    canvas.height = img.clientHeight;
  }
  resize();
  window.addEventListener('resize', resize);

  // Draw image on canvas initially
  function draw() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.drawImage(img, 0, 0, canvas.width, canvas.height);
  }
  draw();

  let ripples = [];

  // Add ripple on mouse move
  card.querySelector('.card-image').addEventListener('mousemove', e => {
    const rect = canvas.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    ripples.push({ x, y, radius: 0 });
  });

  // Animate ripples
  function animate() {
    draw();
    ripples.forEach((ripple, index) => {
      ripple.radius += 2;
      ctx.beginPath();
      ctx.strokeStyle = `rgba(255, 255, 255, ${1 - ripple.radius / 50})`;
      ctx.lineWidth = 3;
      ctx.arc(ripple.x, ripple.y, ripple.radius, 0, 2 * Math.PI);
      ctx.stroke();

      if (ripple.radius > 50) {
        ripples.splice(index, 1);
      }
    });
    requestAnimationFrame(animate);
  }
  animate();
});

function resizeCanvasToDisplaySize(canvas) {
  const dpr = window.devicePixelRatio || 1;
  const width = canvas.clientWidth * dpr;
  const height = canvas.clientHeight * dpr;
  if (canvas.width !== width || canvas.height !== height) {
    canvas.width = width;
    canvas.height = height;
    return true;
  }
  return false;
}




