/* =========================
   🌸 ELEGANT ANIME NIGHT JS
   ========================= */


/* ================= AUTO HIDE NAVBAR ================= */

let lastScroll = 0;
const navbar = document.querySelector(".navbar");

window.addEventListener("scroll", () => {
  const currentScroll = window.pageYOffset;

  if (currentScroll > lastScroll) {
    navbar.style.transform = "translateY(-100%)";
  } else {
    navbar.style.transform = "translateY(0)";
  }

  lastScroll = currentScroll;
});


/* ================= TYPING EFFECT ================= */

const textArray = [
  "Building elegant Discord ecosystems.",
  "Designing aesthetic web experiences.",
  "Crafting structured digital communities."
];

let textIndex = 0;
let charIndex = 0;
let isDeleting = false;
const typingElement = document.getElementById("typing-text");

function typeEffect() {
  if (!typingElement) return;

  const currentText = textArray[textIndex];

  if (!isDeleting) {
    typingElement.textContent = currentText.substring(0, charIndex++);
    if (charIndex > currentText.length) {
      isDeleting = true;
      setTimeout(typeEffect, 1200);
      return;
    }
  } else {
    typingElement.textContent = currentText.substring(0, charIndex--);
    if (charIndex === 0) {
      isDeleting = false;
      textIndex = (textIndex + 1) % textArray.length;
    }
  }

  setTimeout(typeEffect, isDeleting ? 40 : 70);
}

typeEffect();


/* ================= SUBTLE STARS ================= */

const starsContainer = document.querySelector(".stars");

if (starsContainer) {
  for (let i = 0; i < 35; i++) {
    const star = document.createElement("div");
    star.classList.add("star");
    star.style.top = Math.random() * 100 + "%";
    star.style.left = Math.random() * 100 + "%";
    star.style.animationDelay = Math.random() * 3 + "s";
    starsContainer.appendChild(star);
  }
}


/* ================= RARE PETALS ================= */

function createPetal() {
  const petal = document.createElement("div");
  petal.textContent = "🌸";
  petal.style.position = "fixed";
  petal.style.top = "-20px";
  petal.style.left = Math.random() * window.innerWidth + "px";
  petal.style.fontSize = "18px";
  petal.style.opacity = "0.6";
  petal.style.pointerEvents = "none";
  petal.style.animation = "fall 8s linear forwards";

  document.body.appendChild(petal);

  setTimeout(() => {
    petal.remove();
  }, 8000);
}

setInterval(createPetal, 5000);


/* Petal Animation */
const style = document.createElement("style");
style.innerHTML = `
@keyframes fall {
  0% { transform: translateY(0) rotate(0deg); }
  100% { transform: translateY(110vh) rotate(360deg); }
}
`;
document.head.appendChild(style);


/* ================= SMOOTH REVEAL ================= */

const revealElements = document.querySelectorAll(".section");

function revealOnScroll() {
  revealElements.forEach(el => {
    const rect = el.getBoundingClientRect();
    if (rect.top < window.innerHeight - 100) {
      el.style.opacity = "1";
      el.style.transform = "translateY(0)";
    }
  });
}

revealElements.forEach(el => {
  el.style.opacity = "0";
  el.style.transform = "translateY(40px)";
  el.style.transition = "all 0.8s ease";
});

window.addEventListener("scroll", revealOnScroll);
window.addEventListener("load", revealOnScroll);
