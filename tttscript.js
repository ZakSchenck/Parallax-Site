
window.addEventListener('scroll', () => {
  let header = document.querySelector('.page-header');
    header.classList.toggle('sticky', window.scrollY > 0);
})

let hamburger = document.querySelector('.hamburger');
let listContainer = document.querySelector('.list-container');

hamburger.addEventListener('click', () => {
  listContainer.classList.toggle('show')
  listContainer.classList.toggle('nav-is-open')
});

function myFunction(x) {
  x.classList.toggle("change");
}
