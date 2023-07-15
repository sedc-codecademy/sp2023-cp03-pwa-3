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
    id: "beef",
    img: `<img src="../images/CustomHamburgerPage-Images/Burger meat.png" alt="Burger meat">`,
    isAdded: false
  },
  {
    name: "Chrispy Chicken",
    price: 2,
    id: "chicken",
    img: '<img src="../images/CustomHamburgerPage-Images/Chrispy-Chicken.png" alt="Chrispy chicken">',
    isAdded: false
  },
  {
    name: "Spicy Chicken",
    price: 2.20,
    id: "spicyChicken",
    img:` <img src="../images/CustomHamburgerPage-Images/Spicy chicken.png" alt="Spicy chicken"></img>`,
    isAdded: false
  },
  {
    name: "Bacon",
    price: 2,
    id:"bacon",
    img: `<img src="../images/CustomHamburgerPage-Images/Bacon.png" alt="Bacon">`,
    addedImage: `<img src="../images/CustomHamburgerPage-Images/Bacon.png" alt="Bacon"
     class = "addedImages"
     style ="margin-bottom: -36px;
     transform: rotate(11deg);">`,
    isAdded: false

  }
];

// array of object vegetables
const VegetablesMenu = [
  {
    name: 'Tomatoes',
    price: 1,
    id: "tomatoes",
    img: `<img  src="../images/CustomHamburgerPage-Images/Tomatoes.png" alt="Tomatoes">`,
    isAdded: false
  },
  {
    name: "Pickles",
    price: 0.70,
    id: "pickles",
    img: '<img  src="../images/CustomHamburgerPage-Images/Pickles.png" alt="Pickles">',
    addedImage:`<img  src="../images/CustomHamburgerPage-Images/Pickles.png" alt="Pickles"
     class = "addedImages"
     style="transform: rotate(-5deg);">`,
    isAdded: false
  },
  {
    name: "Onions",
    price: 0.50,
    id: "onions",
    img: `<img  src="../images/CustomHamburgerPage-Images/Onions.png" alt="Onions">`,
    addedImage: ` <img  src="../images/CustomHamburgerPage-Images/Onions.png" alt="Onions" 
    class = "addedImages"
    style = "transform: rotate(5deg);">`,
    isAdded: false
  },
  {
    name: "Lettuce",
    price: 0.60,
    id: "lettuce",
    img: `<img  src="../images/CustomHamburgerPage-Images/lettuce.png" alt="lettuce">`,
    isAdded: false
  }
];

// array of objects toppings

const ToppingsMenu = [
  {
    name: 'Ketchup',
    price: 0.3,
    id: 'ketchup',
    img: `<img src="../images/CustomHamburgerPage-Images/Ketchup sauce (2).png" alt="Ketchup">`,
    addedImage: `<img src="../images/CustomHamburgerPage-Images/Ketchup3.png" alt="Ketchup sauce" 
    class = "addedImages"
    style="transform: rotateX(62deg);
          margin-bottom: -81px;
          margin-top: -88px;">`,
    isAdded: false
  },
  {
    name: "Burger Sauce",
    price: 0.3,
    id: 'burger-sauce',
    img: '<img src="../images/CustomHamburgerPage-Images/Burger sauce.png" alt="Burger sauce">',
    addedImage:  `<img src="../images/CustomHamburgerPage-Images/Burger-sauce.png" alt="Burger sauce"
    class = "addedImages"
    style = "margin-bottom: -30px;">`,
    isAdded: false
  },
  {
    name: "Cheese sauce",
    price: 0.2,
    id: 'cheese-sauce',
    img: `<img src="../images/CustomHamburgerPage-Images/Chesee sauce.png" alt="Cheese sauce">`,
    addedImage: ` <img src="../images/CustomHamburgerPage-Images/Cheese saucee.png" alt="Cheese sauce" 
    class = "addedImages"
    style = "margin-bottom: -67px;
    margin-top: -21px;
    transform: rotate(-7deg);"
    >
    `,
    
    isAdded: false
  },
  {
    name: "Yellow cheese",
    price: 0.7,
    id: 'yellow-cheese',
    img: `<img src="../images/CustomHamburgerPage-Images/Cheese slice.png" alt="Cheese slice">`,
    addedImage: `<img src="../images/CustomHamburgerPage-Images/Cheese slice.png" alt="Cheese slice"
    class = "addedImages"
    style = "margin-bottom: -20px;">`,
    isAdded: false
  },
  {
    name: "French fries",
    price: 1,
    id: 'french-fries',
    img: `<img src="../images/CustomHamburgerPage-Images/French fries toppings.png" alt="French fries">` ,
    addedImage: `<img src="../images/CustomHamburgerPage-Images/French-fries.png" alt="french fries" class = "addedImages">` ,
    isAdded: false
  }
];

let burger = [
  {
    name: "Top bun",
    id: 'top-bun',
    img: `<img src="../images/CustomHamburgerPage-Images/Bun top.png" alt="Top bun">` 
  },
  {
    name: "Bottom bun",
    id: 'bottom-bun',
    img: `<img src="../images/CustomHamburgerPage-Images/Bun bottom.png" alt="Bottom bun">`
  }
];
addIngredientInBurger();

function resetMenuAndBurger() {
  burger = [
    {
      name: "Top bun",
      id: 'top-bun',
      img: `<img src="../images/CustomHamburgerPage-Images/Bun top.png" alt="Top bun">` 
    },
    {
      name: "Bottom bun",
      id: 'bottom-bun',
      img: `<img src="../images/CustomHamburgerPage-Images/Bun bottom.png" alt="Bottom bun">`
    }
  ];

  meatMenu.forEach(meat => {
    meat.isAdded = false;
    enableIngredient(meat)
  });
  VegetablesMenu.forEach(veg => {
    veg.isAdded = false;
    enableIngredient(veg)
  });
  ToppingsMenu.forEach(top => {
    top.isAdded = false;
    enableIngredient(top)
  });


  // reseting the price
  totalHamburgerPrice = 0;
  priceContainer.innerHTML = `Price: ${totalHamburgerPrice.toFixed(2)}$`


  addIngredientInBurger();
}

// Ingredients containers
let meat = document.getElementById("Meat");
let vegetables = document.getElementById("Vegetables");
let toppings = document.getElementById("Toppings");

let priceContainer = document.getElementById("price");

let burgerCreating = document.getElementById("BurgerCreating");
let ingredientBoxes = document.getElementsByClassName("ingredients-box");




// Define a variable to store the total price
let totalHamburgerPrice = 0;

// Function to add ingredient and price to the burger 
function addIngredient(type, index) {
  let menu;

  switch(type) {
    case 'meat':
      menu = meatMenu
      break;
    case 'vegetables':
      menu = VegetablesMenu
      break;
    case 'toppings':
      menu = ToppingsMenu
      break;
    default:
      menu = null;
  }

  if(!menu) return;
  if(menu[index].isAdded) return;
  
  menu[index].isAdded = true;
    
  totalHamburgerPrice += menu[index].price; // Add the price to the total

  // Show the total price in the container
  priceContainer.innerHTML = `<i class="fas fa-hand-holding-usd"></i> Price : ${totalHamburgerPrice.toFixed(2)}$`

  // Display the updated total price in the console
  //console.log("Total Price: $" + totalHamburgerPrice.toFixed(2));


  // disable the added ingredient
  disableIngredient(menu[index]);

  // Function for adding ingredients in burger
  addIngredientInBurger(menu[index]);
}


// Disableing the ingredient if is already added
function disableIngredient(ingredient) {
  const ingredientElement = document.getElementById(ingredient.id);
  ingredientElement.classList.add('disable');

  const abbr = ingredientElement.querySelector('abbr');
  //  Changeing abbreviation
  abbr.title = 'Added';
}


// Enableing the ingredient
function enableIngredient(ingredient) {
  const ingredientElement = document.getElementById(ingredient.id);
  ingredientElement.classList.remove('disable');

  const abbr = ingredientElement.querySelector('abbr');
  abbr.title = 'Click to add';
}



// Add ingredient in the burger
function addIngredientInBurger(ingredient) {
  // burger = [top, tomato-sauce, beef, bottom]
  if(ingredient) {
    const topBunIndex = 0;
    burger.splice(topBunIndex + 1, 0, ingredient); // Insert ingredient after the top bun
  }

  const burgerElement = document.getElementById('BurgerCreating');

  burgerElement.innerHTML = '';
  const ingredientsList = [];

  for(let i = 0; i <= burger.length - 1; i++) {
    const container = document.createElement('div');
    container.classList.add('burger-ingredient-container');
    container.style.zIndex = (burger.length - i) + 1;
    container.innerHTML = burger[i].addedImage || burger[i].img;

    ingredientsList.push(container);
  }

  // console.log(ingredientsList)
  ingredientsList.forEach(el => {
    burgerElement.appendChild(el);
  });
}


// Tabs
  function openIngredients(event, ingredientName, tabId) {
    
    let ingredient = document.getElementsByClassName("ingredient");
    for (let i = 0; i < ingredient.length; i++) {
      ingredient[i].style.display = "none";
    }

    let tablinks = document.getElementsByClassName("tablink");
    for (let i = 0; i < ingredient.length; i++) {
      tablinks[i].className = tablinks[i].className.replace(" w3-border-red", "");

    }
    document.getElementById(ingredientName).style.display = "block";

    const activeTab = document.getElementById(tabId);
    activeTab.classList.add('w3-border-red');


     // Meats selector (Adds meats on container )
    let meatHTML = '';
      for (let i = 0; i < meatMenu.length; i++) {
      meatHTML += `
      <div class="ingredients-box ${meatMenu[i].isAdded ? 'disable' : ''}" id="${meatMenu[i].id}" onclick="addIngredient('meat', ${i})">
        <abbr title='Click to add'>${meatMenu[i].img}</abbr>
        <p class="ingridients-paragraph">${meatMenu[i].name} ${meatMenu[i].price}$.</p>
      </div>
    `;
  }
  meat.innerHTML = meatHTML;


    //Vegetables selector (Adds vegetables on container)
    let vegetablesHTML = '';
    for (let i = 0; i < VegetablesMenu.length; i++) {
      vegetablesHTML += `
      <div class="ingredients-box ${VegetablesMenu[i].isAdded ? 'disable' : ''}" id="${VegetablesMenu[i].id}" onclick="addIngredient('vegetables', ${i})">
        <abbr title= 'Click to add'>${VegetablesMenu[i].img}</abbr>
        <p class="ingridients-paragraph">${VegetablesMenu[i].name} ${VegetablesMenu[i].price}$.</p>
      </div>
    `;    
  }
  vegetables.innerHTML = vegetablesHTML;

    
    // toppings selector
    let toppingsHTML = '';
    for (let i = 0; i < ToppingsMenu.length; i++) {
      toppingsHTML += `
      <div class="ingredients-box ${ToppingsMenu[i].isAdded ? 'disable' : ''}" id="${ToppingsMenu[i].id}" onclick="addIngredient('toppings', ${i})">
        <abbr title='Click to add'>${ToppingsMenu[i].img}</abbr>
        <p class="ingridients-paragraph">${ToppingsMenu[i].name} ${ToppingsMenu[i].price}$.</p>
      </div>
    `;    
  }
  toppings.innerHTML = toppingsHTML;
  }
  
    // Set the "Meat" tab as active by default
  document.addEventListener("DOMContentLoaded", function(event) {
    let meatTab = document.getElementById("meatTab");
    meatTab.classList.add("w3-border-red");
    openIngredients(event, 'Meat', 'meatTab');
  });


  // Pop up on add to cart button
  function openPopup() {
    let popup = document.getElementById("popup");
    popup.style.display = "block";
  }


  // Od ovde trebit da vlecis
  const cart = localStorage.getItem('cart'); // kje mu dajt niza so site burgeri
  const storageCart = cart ? JSON.parse(cart) : [];

  // primer
//   cart.forEach(burger => {  
//     // container get by id 
//     // div -> burger.burgerImage.innerHTMl
//     // div -> burgerPrice
//     // vaka da se dodavet primer 
// // `<div> burger.burgerImageN
// // <SPAN>bURGER NAME: ${burger.burgerName}</SPAN>
// // <span>burger.burgerPrice<span>>
// // </div>`
//     // totalPrice -> 
//   })

  
  // if yes is clicked
  function handleYes() {
    // alert("No button clicked!");

    const burgerEl = document.getElementById('BurgerCreating');
    const input = document.getElementById('burgerName');

    storageCart.push({
      burgerImage: burgerEl.innerHTML,
      burgerName: input.value || 'Burger',
      burgerPrice: totalHamburgerPrice
    })
    localStorage.setItem('cart', JSON.stringify(storageCart));
    resetMenuAndBurger();

    closePopup();

    return false;
  }
  
  //  if no is clicked
  function handleNo() {
    // alert("No button clicked!");

    
    const cart = localStorage.getItem('cart');
    const storageCart = cart ? JSON.parse(cart) : [];

    // storageCart.push(burger);
    const burgerEl = document.getElementById('BurgerCreating');
    const input = document.getElementById('burgerName');

    storageCart.push({
      burgerImage: burgerEl.innerHTML,
      burgerName: input.value || 'Burger',
      burgerPrice: totalHamburgerPrice
    })

    // Sending and converting the array in the local storage
    localStorage.setItem('cart', JSON.stringify(storageCart));

    resetMenuAndBurger();

    closePopup();

    // Redirect to this location after click
    window.location.href = '../index.html';

    return false;
  }
  
  // Closing pop up function
  function closePopup() {
    let popup = document.getElementById("popup");
    popup.style.display = "none";
  }




  // Pop up on delete button
function openPopupDelete() {
  let popup= document.getElementById("popup-Delete");
  popup.style.display = "block";
}

// if no is clicked
function handleNoDelete(){
  alert("No button clicked!");
  closePopupDelete();     
}

// if yes is clicked 
function handleYesDelete() {
  // document.getElementById('BurgerCreating').innerHTML = '';
  closePopupDelete();
  resetMenuAndBurger();
}

// Close pop up function 
function closePopupDelete(){
  let popup = document.getElementById("popup-Delete");
    popup.style.display = "none";
}

  
// Real time clock and status
 // Function to display real-time clock and status
function realtimeClock() {
  let date = new Date();

  // Formatting the date to display
  let options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
  let formattedDate = date.toLocaleDateString(undefined, options);

  // Extracting hours, minutes, seconds, and AM/PM indicator
  let hours = date.getHours();
  let minutes = date.getMinutes();
  let seconds = date.getSeconds();
  let amPm = hours >= 12 ? 'PM' : 'AM';

  // Converting hours to 12-hour format
  hours = hours % 12;
  hours = hours ? hours : 12;

  // Displaying the date and time in the specified format
  let clock = document.getElementById('clock');
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
  let statusElement = document.getElementById('status');
  let isOpen =
    (hours >= 7 && amPm === 'AM') ||
    (hours < 9 && amPm === 'PM') ||
    (date.getDay() !== 0); // Sunday is represented by 0 in JavaScript's Date object

  // Updating the status message and color based on the opening status
  if (isOpen) {
    statusElement.innerHTML = 'Open untill 9 PM';
    statusElement.style.color = 'green';
  } else {
    statusElement.innerHTML = 'Closed untill 7 AM';
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
