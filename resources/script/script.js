// burger menu
document.addEventListener('DOMContentLoaded', nav)
function nav(){
    const burger = document.querySelector('.burger');
    const nav = document.querySelector('.main-nav');
    burger.addEventListener('click', ()=>{
        nav.classList.toggle('show')
    })
}

// Members carousel
const memberContainers = [...document.querySelectorAll('.members-container')];
const nxtBtn = [...document.querySelectorAll('.nxt-btn')];
const preBtn = [...document.querySelectorAll('.pre-btn')];

memberContainers.forEach((item, i) => {
    let containerDimensions = item.getBoundingClientRect();
    let containerWidth = containerDimensions.width;

    nxtBtn[i].addEventListener('click', () => {
        console.log('next');
        item.scrollLeft += containerWidth;
    })

    preBtn[i].addEventListener('click', () => {
        item.scrollLeft -= containerWidth;
    })
});

window.onresize = function(){ location.reload(); }

// donation banner behaviour
const donationCards = document.querySelectorAll('.donation-card');

donationCards.forEach(function(card) {
  card.addEventListener('click', function() {
    card.classList.toggle('active');
  });
});
