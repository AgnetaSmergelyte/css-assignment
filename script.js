const hamburger = document.querySelector('.hamburger');
const mobileNav = document.querySelector('.mobile-nav');
const showPagesDesktop = document.querySelector('#pages-desktop');
const subMenuDesktop = document.querySelector('#pages-sub-menu-d');
const showPagesMobile = document.querySelector('#pages-mobile');
const subMenuMobile = document.querySelector('#pages-sub-menu-m');
const scrollUpBtn = document.querySelector('.finger');

hamburger.onclick = () => {
    mobileNav.classList.toggle('shown');
}

showPagesDesktop.onmouseover = () => {
    subMenuDesktop.classList.add('show-sub-menu');
}

showPagesDesktop.onmouseout = () => {
    subMenuDesktop.classList.remove('show-sub-menu');
}

showPagesMobile.onmouseover = () => {
    subMenuMobile.classList.add('show-sub-menu-mobile');
}

showPagesMobile.onmouseout = () => {
    subMenuMobile.classList.remove('show-sub-menu-mobile');
}

function scrollToTop() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth',
    });
}

scrollUpBtn.onclick = () => {
    scrollToTop();
}

function handleScroll() {
    const scrollY = window.scrollY;
    if (scrollY > window.innerHeight) {
        scrollUpBtn.style.opacity = '1';
    } else {
        scrollUpBtn.style.opacity = '0';
    }
}

window.addEventListener('scroll', handleScroll);
handleScroll();

//numbers animation when scrolled on
const numberElementBox = document.querySelector('#changing-numbers');
const numberElements = document.querySelectorAll('.number-circle > p');

let observerCounter = new IntersectionObserver(function(entries, observer) {
    entries.forEach(function(entry) {
        if (entry.isIntersecting) {
            startNumberChange();
        }
    });
}, { threshold: 0.5 });

observerCounter.observe(numberElementBox);

function startNumberChange() {
    const startNumber = 0;
    const targetNumber1 = 85000;
    const targetNumber2 = 120;
    const targetNumber3 = 72000;
    const targetNumber4 = 30;
    const duration = 3000;
    let startTime = null;

    function animateNumber(timestamp) {
        if (!startTime) startTime = timestamp;

        let progress = timestamp - startTime;
        let percentage = Math.min(progress / duration, 1);
        let currentNumber1 = Math.floor(percentage * (targetNumber1 - startNumber)) + startNumber;
        let currentNumber2 = Math.floor(percentage * (targetNumber2 - startNumber)) + startNumber;
        let currentNumber3 = Math.floor(percentage * (targetNumber3 - startNumber)) + startNumber;
        let currentNumber4 = Math.floor(percentage * (targetNumber4 - startNumber)) + startNumber;

        numberElements[0].textContent = currentNumber1 + " +";
        numberElements[1].textContent = currentNumber2 + " +";
        numberElements[2].textContent = currentNumber3 + " +";
        numberElements[3].textContent = currentNumber4 + " +";
        numberElementBox.style.opacity = '1';

        if (percentage < 1) {
            requestAnimationFrame(animateNumber);
        }
    }

    requestAnimationFrame(animateNumber);
}