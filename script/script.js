var dots = document.querySelector('.dots')
var quant = document.querySelectorAll('.slides .image')
var atual = 0
var imagem = document.getElementById('atual')
var next = document.getElementById('next')
var back = document.getElementById('back')

for(let i = 0; i < quant.length; i++){
    var div = document.createElement('div')
    div.id = i
    dots.appendChild(div)
}
document.getElementById('0').classList.add('imgAtual')

var pos = document.querySelectorAll('.dots div')

for(let i = 0; i < pos.length; i++){
    pos[i].addEventListener('click', ()=>{
        atual = pos[i].id
        slide()
     })
}

back.addEventListener('click', ()=>{
    atual-- 
    slide()
})

next.addEventListener('click', ()=>{
    atual++
    slide()
})

function slide(){
    if(atual >= quant.length){
        atual = 0
    }
    else if(atual < 0){
        atual = quant.length-1
    }
    document.querySelector('.imgAtual').classList.remove('imgAtual')
    imagem.style.marginLeft = -700*atual+'px'
    document.getElementById(atual).classList.add('imgAtual')
}


// CLICK SCROLL 

const menuLinks = document.querySelectorAll('.header__nav__menu a[href^="#"]');

function getDistanceFromTheTop(element) {
    const id = element.getAttribute("href");
    return document.querySelector(id).offsetTop;
}

//function nativeScroll(distanceFromTheTop) {
//    window.scroll({
//        top: distanceFromTheTop,
//        behavior: "smooth",
//    });
//}

function scrollToSection(event) {
    event.preventDefault();
    const distanceFromTheTop = getDistanceFromTheTop(event.target) - 50;
    smoothScrollTo(0, distanceFromTheTop, )
}

menuLinks.forEach((link) => {
    link.addEventListener("click", scrollToSection);
});

function smoothScrollTo(endX, endY, duration) {
    const startX = window.scrollX || window.pageXOffset;
    const startY = window.scrollY || window.pageYOffset;
    const distanceX = endX - startX;
    const distanceY = endY - startY;
    const startTime = new Date().getTime();

    duration = typeof duration !== "undefined" ? duration :800;

    const easeInOutQuart = (time, from, distance, duration) => {
    if ((time /= duration / 2) < 1)
      return (distance / 2) * time * time * time * time + from;
    return (-distance / 2) * ((time -= 2) * time * time * time - 2) + from;
  };

    const timer = setInterval(() => {
    const time = new Date().getTime() - startTime;
    const newX = easeInOutQuart(time, startX, distanceX, duration);
    const newY = easeInOutQuart(time, startY, distanceY, duration);
    if (time >= duration) {
      clearInterval(timer);
    }
    window.scroll(newX, newY);
  }, 1000 / 60);
    
}

// MENU MOBILE

const btnMobile = document.getElementById('btn-mobile');

function toggleMenu(event) {
    if (event.type === 'touchstart') event.preventDefault();
    const nav = document.getElementById('nav');
    nav.classList.toggle('active');
    const active = nav.classList.contains('active');
    event.currentTarget.setAttribute('aria-expanded', 'active');
    if (active) { 
        event.currentTarget.setAttribute('aria-label', 'close menu');
    } else {
        event.currentTarget.setAttribute('aria-label', 'open menu');
    }
}

btnMobile.addEventListener('click', toggleMenu);
btnMobile.addEventListener('touchstart', toggleMenu);



















































