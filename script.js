/* =========================
   🌸 SAFE FINAL JS
   ========================= */

/* SCROLL REVEAL */
function revealOnScroll() {
  const reveals = document.querySelectorAll(".reveal");

  reveals.forEach(el => {
    const rect = el.getBoundingClientRect();
    if (rect.top < window.innerHeight - 100) {
      el.classList.add("active");
    }
  });
}

window.addEventListener("scroll", revealOnScroll);


/* SKILL BAR ANIMATION */
function animateSkills() {
  const fills = document.querySelectorAll(".fill");

  fills.forEach(fill => {
    const rect = fill.getBoundingClientRect();
    if (rect.top < window.innerHeight - 100) {
      fill.style.width = fill.dataset.width;
    }
  });
}

window.addEventListener("scroll", animateSkills);


/* COUNTER ANIMATION */
let counterStarted = false;

function animateCounters() {
  if (counterStarted) return;

  const stats = document.querySelector(".stats-section");
  if (!stats) return;

  const rect = stats.getBoundingClientRect();
  if (rect.top < window.innerHeight - 100) {

    const counters = document.querySelectorAll(".counter");

    counters.forEach(counter => {
      const target = +counter.dataset.target;
      let count = 0;
      const increment = target / 60;

      function update() {
        count += increment;
        if (count < target) {
          counter.innerText = Math.ceil(count);
          requestAnimationFrame(update);
        } else {
          counter.innerText = target + "+";
        }
      }

      update();
    });

    counterStarted = true;
  }
}

window.addEventListener("scroll", animateCounters);


/* PARALLAX HERO (SAFE) */
window.addEventListener("scroll", () => {
  const hero = document.querySelector(".hero");
  if (hero) {
    hero.style.backgroundPositionY = window.scrollY * 0.3 + "px";
  }
});


/* CURSOR GLOW (SAFE) */
const glow = document.querySelector(".cursor-glow");

if (glow) {
  document.addEventListener("mousemove", (e) => {
    glow.style.left = e.clientX + "px";
    glow.style.top = e.clientY + "px";
  });
}


/* THEME TOGGLE */
const toggle = document.getElementById("themeToggle");

if (toggle) {
  toggle.addEventListener("click", () => {
    document.body.classList.toggle("light-mode");
    toggle.textContent =
      document.body.classList.contains("light-mode") ? "🌸" : "🌙";
  });
}


/* SOUND TOGGLE (SAFE) */
const soundBtn = document.getElementById("soundToggle");
const music = document.getElementById("bgMusic");

if (soundBtn && music) {
  let playing = false;

  soundBtn.addEventListener("click", () => {
    if (!playing) {
      music.play().catch(() => {});
      soundBtn.textContent = "🔇";
      playing = true;
    } else {
      music.pause();
      soundBtn.textContent = "🔊";
      playing = false;
    }
  });
}
