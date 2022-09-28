function openForm() {
  document.getElementById("myForm").style.display = "block";
}

function closeForm() {
  document.getElementById("myForm").style.display = "none";
}

let header__burger = document.querySelector('.header__burger');
let header__menu = document.querySelector('.header__menu');

header__burger.addEventListener('click', function(){
	header__burger.classList.toggle('active');
	header__menu.classList.toggle('active');
})