
window.addEventListener('scroll', () => {
  let header = document.querySelector('.page-header');
    header.classList.toggle('sticky', window.scrollY > 0);
})

let hamburger = document.querySelector('.hamburger');
let listContainer = document.querySelector('.list-container');
let dropdownButton = document.querySelector('#dropdown-button');
let dropdownMenu = document.querySelector('.dropdown-menu');

hamburger.addEventListener('click', () => {
  listContainer.classList.toggle('show');
});

function myFunction(x) {
  x.classList.toggle("change");
}



for(let i = 1; i <= 100; i++) {
  let output = '';
  if(i % 3 == 0) {
    output += ('Fizz');
  }
  if(i % 5 == 0) {
    output += ('Buzz');
  }
  if(output == ''){
    output = i
  }
  console.log(output)
}
