/* Homepage SCRIPT 🡻 */

let counter = 1;
setInterval(function () {
  document.getElementById(`radio` + counter).checked = true;
  counter++;
  if (counter > 3) {
    counter = 1;
  }
}, 5000);

/* End of Homepage SCRIPT 🡹  */

/* Navigation bar SCRIPT 🡻 */

// const menuIcon = document.querySelector('.Menue')
// const navbar=document.querySelector('.navbar')

// menuIcon.addEventListener('click',()=>{
// navbar.classList.toggle('change');
// })
// const inputs = document.querySelectorAll(".input");

/* Navigation bar SCRIPT 🡹  */

/* Custom burger SCRIPT 🡻 */

// array of object meats
const meatMenu = [
  {
    name: 'Beef',
    price: 3,
    img: `<img id="beef" src="../images/CustomHamburgerPage-Images/Burger meat.png" alt="Burger meat">`
  },
  {
    name: "Chrispy Chicken",
    price: 2,
    img: '<img id="chicken" src="../images/CustomHamburgerPage-Images/Chrispy-Chicken.png" alt="Chrispy chicken">'
  },
  {
    name: "Spicy Chicken",
    price: 2.20,
    img:` <img id="spicyChicken" src="../images/CustomHamburgerPage-Images/Spicy chicken.png" alt="Spicy chicken"></img>`
  },
  {
    name: "Bacon",
    price: 2,
    img: `<img id="bacon" src="../images/CustomHamburgerPage-Images/Bacon.png" alt="Bacon">`

  }
];

// array of object vegetables
const VegetablesMenu = [
  {
    name: 'Tomatoes',
    price: 1,
    img: `<img id="tomatoes" src="../images/CustomHamburgerPage-Images/Tomatoes.png" alt="Tomatoes">`
  },
  {
    name: "Pickles",
    price: 0.70,
    img: '<img id="pickles" src="../images/CustomHamburgerPage-Images/Pickles.png" alt="Pickles">'
  },
  {
    name: "Onions",
    price: 0.50,
    img: `<img id="onions" src="../images/CustomHamburgerPage-Images/Onions.png" alt="Onions">`
  },
  {
    name: "Lettuce",
    price: 0.60,
    img: `<img id="lettuce" src="../images/CustomHamburgerPage-Images/lettuce.png" alt="lettuce">`
  }
];

// array of objects toppings

const ToppingsMenu = [
  {
    name: 'Ketchup',
    price: 0.3,
    img: `<img src="../images/CustomHamburgerPage-Images/Ketchup sauce (2).png" alt="Ketchup">`
  },
  {
    name: "Burger Sauce",
    price: 0.3,
    img: '<img src="../images/CustomHamburgerPage-Images/Burger sauce.png" alt="Burger sauce">'
  },
  {
    name: "Cheese sauce",
    price: 0.2,
    img: `<img src="../images/CustomHamburgerPage-Images/Chesee sauce.png" alt="Cheese sauce">`
  },
  {
    name: "Fry sauce",
    price: 0.4,
    img: `<img src="../images/CustomHamburgerPage-Images/Fry sauce .png" alt="Fry sauce">`
  },
  {
    name: "Yellow cheese",
    price: 0.7,
    img: `<img src="../images/CustomHamburgerPage-Images/Cheese slice.png" alt="Cheese slice">`
  },
  {
    name: "French fries",
    price: 1,
    img: `<img src="../images/CustomHamburgerPage-Images/French fries toppings.png" alt="French fries">` 
  }
];

// Ingredients containers
let meat = document.getElementById("Meat");
let vegetables = document.getElementById("Vegetables");
let toppings = document.getElementById("Toppings");

let ingredient = document.getElementById("ingredient");

let burger = document.getElementById("BurgerCreating");

let priceContainer = document.getElementById("price");



// Define a letiable to store the total price
let totalHamburgerPrice = 0;

// Function to sum total price from each image click
function sumPrice(price) {
  
  totalHamburgerPrice += price; // Add the price to the total
  // Show price in the container
  priceContainer.innerHTML = `Price: ${totalHamburgerPrice.toFixed(2)}$`
  // Display the updated total price in the console
  //console.log("Total Price: $" + totalHamburgerPrice.toFixed(2));
}





// Tabs
  function openIngredients(event, ingredientName) {
    
    let ingredient = document.getElementsByClassName("ingredient");
    for (let i = 0; i < ingredient.length; i++) {
      ingredient[i].style.display = "none";
    }

    let tablinks = document.getElementsByClassName("tablink");
    for (let i = 0; i < ingredient.length; i++) {
      tablinks[i].className = tablinks[i].className.replace(" w3-border-red", "");

    }
    document.getElementById(ingredientName).style.display = "block";
    event.currentTarget.firstElementChild.className += " w3-border-red";




     // Meats selector (Adds meats on container )
    let meatHTML = '';
      for (let i = 0; i < meatMenu.length; i++) {
      meatHTML += `
      <div class="ingredients-box" id = "ingredient" onclick="sumPrice(${meatMenu[i].price})">
        <abbr title="Click to add">${meatMenu[i].img}</abbr>
        <p class="ingridients-paragraph">${meatMenu[i].name} ${meatMenu[i].price}$.</p>
      </div>
    `;
  }
  meat.innerHTML = meatHTML;


    //Vegetables selector (Adds vegetables on container)
    let vegetablesHTML = '';
    for (let i = 0; i < VegetablesMenu.length; i++) {
      vegetablesHTML += `
      <div class="ingredients-box" onclick="sumPrice(${VegetablesMenu[i].price})">
        <abbr title="Click to add">${VegetablesMenu[i].img}</abbr>
        <p class="ingridients-paragraph">${VegetablesMenu[i].name} ${VegetablesMenu[i].price}$.</p>
      </div>
    `;    
  }
  vegetables.innerHTML = vegetablesHTML;

    
    // toppings selector
    let toppingsHTML = '';
    for (let i = 0; i < ToppingsMenu.length; i++) {
      toppingsHTML += `
      <div class="ingredients-box" onclick="sumPrice(${ToppingsMenu[i].price})">
        <abbr title="Click to add">${ToppingsMenu[i].img}</abbr>
        <p class="ingridients-paragraph">${ToppingsMenu[i].name} ${ToppingsMenu[i].price}$.</p>
      </div>
    `;    
  }
  toppings.innerHTML = toppingsHTML;
    
  }



  // Pop up on buttons 
  function openPopup() {
    let popup = document.getElementById("popup");
    popup.style.display = "block";
  }
  
  // if yes is clicked
  function handleYes() {
    alert("Yes button clicked!");
    closePopup();
  }
  
  //  if no is clicked
  function handleNo() {
    alert("No button clicked!");
    closePopup();
  }
  
  // Closing pop up function
  function closePopup() {
    let popup = document.getElementById("popup");
    popup.style.display = "none";
  }
  

// Real time clock and status
 // Function to display real-time clock and status
function realtimeClock() {
  var date = new Date();

  // Formatting the date to display
  var options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
  var formattedDate = date.toLocaleDateString(undefined, options);

  // Extracting hours, minutes, seconds, and AM/PM indicator
  var hours = date.getHours();
  var minutes = date.getMinutes();
  var seconds = date.getSeconds();
  var amPm = hours >= 12 ? 'PM' : 'AM';

  // Converting hours to 12-hour format
  hours = hours % 12;
  hours = hours ? hours : 12;

  // Displaying the date and time in the specified format
  var clock = document.getElementById('clock');
  clock.innerHTML =
    formattedDate +
    ' ' +
    hours +
    ':' +
    addZeroPadding(minutes) +
    ':' +
    addZeroPadding(seconds) +
    ' ' +
    amPm;

  // Checking if the current time falls within the desired range (7 AM to 9 PM) and it's not Sunday
  var statusElement = document.getElementById('status');
  var isOpen =
    (hours >= 7 && amPm === 'AM') ||
    (hours < 9 && amPm === 'PM') ||
    (date.getDay() !== 0); // Sunday is represented by 0 in JavaScript's Date object

  // Updating the status message and color based on the opening status
  if (isOpen) {
    statusElement.innerHTML = 'Open';
    statusElement.style.color = 'green';
  } else {
    statusElement.innerHTML = 'Closed';
    statusElement.style.color = 'red';
  }

  // Updating the clock and status every second
  setTimeout(realtimeClock, 1000);
}

// Function to add zero padding to single-digit values
function addZeroPadding(value) {
  return value < 10 ? '0' + value : value;
}

// Call the realtimeClock function initially to start the clock and status updates
realtimeClock();






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
