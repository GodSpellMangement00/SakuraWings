// ===== SKILL BAR ANIMATION =====
const fills = document.querySelectorAll(".fill");

function animateSkills(){
  fills.forEach(fill=>{
    const rect = fill.getBoundingClientRect();
    if(rect.top < window.innerHeight - 100){
      fill.style.width = fill.dataset.width;
    }
  });
}

window.addEventListener("scroll", animateSkills);
window.addEventListener("load", animateSkills);


// ===== SERVICE ICON SLIDE ANIMATION =====
const serviceCards = document.querySelectorAll(".service-card");

serviceCards.forEach(card=>{
  card.addEventListener("click", ()=>{
    const icon = card.querySelector(".icon");

    icon.style.transition = "0.4s";
    icon.style.transform = "translateX(-40px) scale(1.2)";

    setTimeout(()=>{
      icon.style.transform = "translateX(40px) scale(1.2)";
    },400);

    setTimeout(()=>{
      icon.style.transform = "translateX(0) scale(1)";
    },800);
  });
});
