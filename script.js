
// ===== Skill Bar Animation =====
const fills = document.querySelectorAll(".fill");
const skillsSection = document.querySelector("#skills");

let started = false;

window.addEventListener("scroll", () => {
  const sectionTop = skillsSection.offsetTop - 300;
  if (window.scrollY > sectionTop && !started) {
    fills.forEach(fill => {
      const width = fill.style.width;
      fill.style.width = "0";
      setTimeout(() => {
        fill.style.width = width;
      }, 200);
    });
    started = true;
  }
});

// ===== Floating Bubbles =====
const hero = document.querySelector(".hero");

const bubbles = ["Python", "Web", "Discord", "Security", "Management"];

bubbles.forEach((text, i) => {
  const bubble = document.createElement("div");
  bubble.innerText = text;
  bubble.style.position = "absolute";
  bubble.style.padding = "8px 15px";
  bubble.style.background = "rgba(255,255,255,0.7)";
  bubble.style.borderRadius = "20px";
  bubble.style.fontSize = "14px";
  bubble.style.top = `${20 + i*12}%`;
  bubble.style.left = `${10 + i*15}%`;
  bubble.style.animation = "float 6s ease-in-out infinite";
  hero.appendChild(bubble);
});

// ===== Falling Petals =====
function createPetal() {
  const petal = document.createElement("div");
  petal.innerHTML = "🌸";
  petal.style.position = "fixed";
  petal.style.top = "-10px";
  petal.style.left = Math.random() * window.innerWidth + "px";
  petal.style.fontSize = Math.random() * 20 + 10 + "px";
  petal.style.opacity = Math.random();
  petal.style.animation = `fall ${Math.random()*5+5}s linear forwards`;
  document.body.appendChild(petal);

  setTimeout(() => {
    petal.remove();
  }, 10000);
}

setInterval(createPetal, 500);
