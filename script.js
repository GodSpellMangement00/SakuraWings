/* 🌸 PAGE LOAD FADE */
window.addEventListener("load", () => {
  document.body.classList.add("loaded");

  const loader = document.getElementById("loader");
  if (loader) {
    setTimeout(() => {
      loader.style.opacity = "0";
      setTimeout(() => {
        loader.style.display = "none";
      }, 800);
    }, 1200);
  }
});


/* 🌸 SCROLL REVEAL */
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


/* 🌸 SKILL BAR ANIMATION */
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


/* 🌸 COUNTER ANIMATION */
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


/* 🌙 PARALLAX HERO */
window.addEventListener("scroll", ()=>{
  const hero = document.querySelector(".hero");
  if(hero){
    hero.style.backgroundPositionY = window.scrollY * 0.4 + "px";
  }
});


/* 🌸 FLOATING SAKURA PETALS */
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

  setTimeout(()=>{ petal.remove(); },10000);
}

setInterval(createPetal, 900);


/* 🌟 STAR GENERATOR */
const starContainer = document.querySelector(".stars");

if(starContainer){
  for(let i=0;i<40;i++){
    const star = document.createElement("div");
    star.classList.add("star");
    star.style.top = Math.random()*100 + "%";
    star.style.left = Math.random()*100 + "%";
    star.style.animationDelay = Math.random()*3 + "s";
    starContainer.appendChild(star);
  }
}


/* 🌸 CURSOR GLOW */
const glow = document.querySelector(".cursor-glow");

document.addEventListener("mousemove",(e)=>{
  if(glow){
    glow.style.left = e.clientX + "px";
    glow.style.top = e.clientY + "px";
  }
});


/* 🌸 MAGNETIC BUTTONS */
const magneticBtns = document.querySelectorAll(".btn");

magneticBtns.forEach(btn=>{
  btn.addEventListener("mousemove", e=>{
    const rect = btn.getBoundingClientRect();
    const x = e.clientX - rect.left - rect.width/2;
    const y = e.clientY - rect.top - rect.height/2;
    btn.style.transform = `translate(${x*0.2}px, ${y*0.2}px)`;
  });

  btn.addEventListener("mouseleave", ()=>{
    btn.style.transform = "translate(0,0)";
  });
});


/* 🌸 THEME TOGGLE */
const toggle = document.getElementById("themeToggle");

if(toggle){
  toggle.addEventListener("click",()=>{
    document.body.classList.toggle("light-mode");
    toggle.innerText =
      document.body.classList.contains("light-mode") ? "🌸" : "🌙";
  });
}


/* 🔊 SOUND TOGGLE */
const soundBtn = document.getElementById("soundToggle");
const music = document.getElementById("bgMusic");
let playing = false;

if(soundBtn && music){
  soundBtn.addEventListener("click",()=>{
    if(!playing){
      music.play();
      soundBtn.innerText = "🔇";
      playing = true;
    }else{
      music.pause();
      soundBtn.innerText = "🔊";
      playing = false;
    }
  });
}


/* 🌸 PETAL KEYFRAME */
const style = document.createElement("style");
style.innerHTML = `
@keyframes fall {
  0% { transform: translateY(0) rotate(0deg); }
  100% { transform: translateY(110vh) rotate(360deg); }
}
`;
document.head.appendChild(style);
