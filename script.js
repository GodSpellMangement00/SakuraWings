// 🌸 SCROLL REVEAL
const reveals = document.querySelectorAll(".reveal");

function revealOnScroll(){
  reveals.forEach(el=>{
    const top = el.getBoundingClientRect().top;
    if(top < window.innerHeight - 100){
      el.classList.add("active");
    }
  });
}

window.addEventListener("scroll", revealOnScroll);
window.addEventListener("load", revealOnScroll);


// 🌙 SKILL BAR ANIMATION
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


// 🌸 COUNTER ANIMATION
const counters = document.querySelectorAll(".counter");
let counterStarted = false;

function runCounters(){
  counters.forEach(counter=>{
    const target = +counter.dataset.target;
    let count = 0;
    const increment = target / 100;

    function update(){
      count += increment;
      if(count < target){
        counter.innerText = Math.ceil(count);
        requestAnimationFrame(update);
      } else {
        counter.innerText = target + "+";
      }
    }
    update();
  });
}

window.addEventListener("scroll", ()=>{
  if(counterStarted) return;

  const stats = document.querySelector(".stats-section");
  if(!stats) return;

  const rect = stats.getBoundingClientRect();
  if(rect.top < window.innerHeight - 100){
    runCounters();
    counterStarted = true;
  }
});


// 🌙 PARALLAX HERO
window.addEventListener("scroll", ()=>{
  const hero = document.querySelector(".hero");
  if(hero){
    hero.style.backgroundPositionY = window.scrollY * 0.4 + "px";
  }
});


// 🌸 FLOATING SAKURA PETALS
function createPetal(){
  const petal = document.createElement("div");
  petal.innerHTML = "🌸";
  petal.style.position = "fixed";
  petal.style.top = "-20px";
  petal.style.left = Math.random() * window.innerWidth + "px";
  petal.style.fontSize = Math.random() * 15 + 15 + "px";
  petal.style.opacity = Math.random();
  petal.style.pointerEvents = "none";
  petal.style.animation = `fall ${Math.random()*5+5}s linear forwards`;

  document.body.appendChild(petal);

  setTimeout(()=>{
    petal.remove();
  },10000);
}

setInterval(createPetal, 800);


// 🌸 PETAL FALL KEYFRAME (inject dynamically)
const style = document.createElement("style");
style.innerHTML = `
@keyframes fall {
  0% { transform: translateY(0) rotate(0deg); }
  100% { transform: translateY(110vh) rotate(360deg); }
}
`;
document.head.appendChild(style);


// 🌸 BUSINESS CTA GROW EFFECT
function growCard(el){
  el.style.transform = "scale(1.1)";
  setTimeout(()=>{
    el.style.transform = "scale(1)";
  },200);

  window.open("https://discord.com/users/1121062759971430510","_blank");
}
