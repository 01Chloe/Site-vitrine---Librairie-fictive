// Navigation
const btnNav = document.querySelector('.container-line')
const navBar = document.querySelector('.left-nav')
const line = document.querySelector('.line')

btnNav.addEventListener('click', handleNav)

function handleNav() {
     navBar.classList.toggle('active')
     line.classList.toggle('active')
}


// Modal
const mentionsLegalesBtn = document.querySelector('.mentions-legales-btn')
const modalMentionsLegales = document.querySelector('.modal-mentions-legales')
const closeModalBtn = document.querySelector('.close-modal-btn')

mentionsLegalesBtn.addEventListener('click', openModal)
function openModal() {
     modalMentionsLegales.classList.add('open');
}

closeModalBtn.addEventListener('click', closeModal)
function closeModal() {
     modalMentionsLegales.classList.remove('open')
}


// Pages
const btnPages = document.querySelectorAll(".nav-btn");
const gloablePages = document.querySelectorAll('.pages')
let indexPage = 0;

btnPages.forEach(btn => {
     btn.addEventListener('click', () => {
          indexPage = btn.getAttribute('data-index');

          for(i = 0; i < gloablePages.length; i++) {
               if(gloablePages[i].getAttribute('data-index') == indexPage) {
                    gloablePages[i].classList.add('active')
               } else {
                    gloablePages[i].classList.remove('active')
               }
          }
     })
})


// Add map
let map = new maplibregl.Map({
     container: 'map',
     style: 'https://api.maptiler.com/maps/streets/style.json?key=get_your_own_OpIi9ZULNHzrESv6T2vL',
     center: [2.297013, 48.859691],
     zoom: 8
});
 
let marker = new maplibregl.Marker()
.setLngLat([2.297013, 48.859691])
.addTo(map);


// Slider member
const memberItems = document.querySelectorAll('.member-item')
const leftChevron = document.querySelector('.left-chevron')
const rightChevron = document.querySelector('.right-chevron')
let index = 0;

leftChevron.addEventListener('click', goLeft)
function goLeft() {
     if(index > 0) {
          memberItems[index].classList.remove('visible-right');
          memberItems[index].classList.remove('visible-left');
          index--;
          memberItems[index].classList.add('visible-left');
     } else if(index === 0) {
          memberItems[index].classList.remove('visible-right');
          memberItems[index].classList.remove('visible-left');
          index = 4;
          memberItems[index].classList.add('visible-left')
     }
}

rightChevron.addEventListener('click', goRight) 
function goRight() {
     if(index < 4) {
          memberItems[index].classList.remove('visible-right');
          memberItems[index].classList.remove('visible-left');
          index++;
          memberItems[index].classList.add('visible-right');
     } else if(index === 4) {
          memberItems[index].classList.remove('visible-right');
          memberItems[index].classList.remove('visible-left');
          index = 0;
          memberItems[index].classList.add('visible-right');
     }
}