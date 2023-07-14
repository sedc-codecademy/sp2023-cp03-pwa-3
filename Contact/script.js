const menuIcon = document.querySelector('.Menue')
const navbar=document.querySelector('.navbar')
const blurOverlay = document.querySelector('.blur');

menuIcon.addEventListener('click',()=>{
navbar.classList.toggle('change');
if (blurOverlay.style.backdropFilter === 'blur(10px)') {
  blurOverlay.style.backdropFilter = 'none';
  blurOverlay.style.zIndex=500;
} else {
  blurOverlay.style.backdropFilter = 'blur(10px)';
  blurOverlay.style.zIndex = 2000;
}
})
const inputs = document.querySelectorAll(".input");

function focusFunc() {
  let parent = this.parentNode;
  parent.classList.add("focus");
}

function blurFunc() {
  let parent = this.parentNode;
  if (this.value == "") {
    parent.classList.remove("focus");
  }
}

inputs.forEach((input) => {
  input.addEventListener("focus", focusFunc);
  input.addEventListener("blur", blurFunc);
});