// ===== Skill Bar Animation (on scroll) =====
const fills = document.querySelectorAll(".fill");

function animateSkills() {
  fills.forEach(fill => {
    const rect = fill.getBoundingClientRect();

    if (rect.top < window.innerHeight - 100) {
      fill.style.width = fill.dataset.width;
    }
  });
}

window.addEventListener("scroll", animateSkills);
window.addEventListener("load", animateSkills);
