/* Homepage SCRIPT 🡻 */

/* End of Homepage SCRIPT 🡹  */

/* Navigation bar SCRIPT 🡻 */

const menuIcon = document.querySelector('.Menue')
const navbar=document.querySelector('.navbar')

menuIcon.addEventListener('click',()=>{
navbar.classList.toggle('change');
})
const inputs = document.querySelectorAll(".input");


/* Navigation bar SCRIPT 🡹  */

/* Custom burger SCRIPT 🡻 */
// DOM elements
const arrowUpLeft = document.querySelector('.arrow-up-left');
const arrowDownLeft = document.querySelector('.arrow-down-left');
const arrowUpRight = document.querySelector('.arrow-up-right');
const arrowDownRight = document.querySelector('.arrow-down-right');
const ingredientsLeft = document.querySelectorAll('.arrow-up-left ~ .ingredients-box');
const ingredientsRight = document.querySelectorAll('.arrow-up-right ~ .ingredients-box');
const additionalIngredientsLeft = document.querySelectorAll('.additional-arrow-up-left ~ .ingredients-box');
const additionalIngredientsRight = document.querySelectorAll('.additional-arrow-up-right ~ .ingredients-box');

// Event listeners for sliding up/down on the left side
arrowUpLeft.addEventListener('click', () => {
  ingredientsLeft.forEach((ingredient, index) => {
    ingredient.style.transform = `translateY(-${index * 220}px)`;
    setTimeout(() => {
      ingredient.style.visibility = 'hidden';
    }, 500);
    ingredient.classList.add('show');
  });

  arrowUpLeft.style.display = 'none';
  arrowDownLeft.style.display = 'block';
  additionalIngredientsLeft.forEach((ingredient, index) => {
    ingredient.style.transform = `translateY(-${(index + ingredientsLeft.length) * 220}px)`;
    ingredient.style.visibility = 'visible';
    ingredient.classList.add('show');
  });
});

arrowDownLeft.addEventListener('click', () => {
  ingredientsLeft.forEach(ingredient => {
    ingredient.style.transform = '';
    ingredient.style.visibility = 'visible';
    ingredient.classList.remove('show');
  });
  arrowUpLeft.style.display = 'block';
  arrowDownLeft.style.display = 'none';
  additionalIngredientsLeft.forEach(ingredient => {
    ingredient.style.transform = '';
    ingredient.style.visibility = 'hidden';
    ingredient.classList.remove('show');
  });
});

// Event listeners for sliding up/down on the right side
arrowUpRight.addEventListener('click', () => {
  ingredientsRight.forEach((ingredient, index) => {
    ingredient.style.transform = `translateY(-${index * 220}px)`;
    ingredient.classList.add('show');
  });
  arrowUpRight.style.display = 'none';
  arrowDownRight.style.display = 'block';
  additionalIngredientsRight.forEach((ingredient, index) => {
    ingredient.style.transform = `translateY(-${(index + ingredientsRight.length) * 220}px)`;
    ingredient.style.visibility = 'visible';
    ingredient.classList.add('show');
  });
});

arrowDownRight.addEventListener('click', () => {
  ingredientsRight.forEach(ingredient => {
    ingredient.style.transform = '';
    ingredient.classList.remove('show');
  });
  arrowUpRight.style.display = 'block';
  arrowDownRight.style.display = 'none';
  additionalIngredientsRight.forEach(ingredient => {
    ingredient.style.transform = '';
    ingredient.style.visibility = 'hidden';
    ingredient.classList.remove('show');
  });
});




/* End of custom burger SCRIPT 🡹  */

/* About us SCRIPT 🡻 */

/* code for about us here  (delete this line)*/

/* End of about us SCRIPT 🡹  */

/* Contact SCRIPT 🡻 */

/* code for contact here  (delete this line)*/

/* End of contact SCRIPT 🡹  */

/* History  SCRIPT 🡻 */

/* code for history here  (delete this line)*/

/* End of history SCRIPT 🡹  */

/* Cart SCRIPT 🡻 */

/* code for cart here  (delete this line)*/

/* End of cart  SCRIPT 🡹  */

/* Rewiew  SCRIPT 🡻 */

/* code for custom burger here  (delete this line)*/

/* End of custom burger SCRIPT 🡹  */

/* Menu SCRIPT 🡻 */

/* code for menu here  (delete this line)*/

/* End of menu SCRIPT 🡹  */

// Login ovde proba neso
// Check if the user is already logged in
