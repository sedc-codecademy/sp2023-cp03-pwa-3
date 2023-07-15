let AllMenuOne = [
    {
      burgerNameOne: 'Crispy Chicken',
      burgerPrice: 5.5 ,
      customerName: 'Marko',
      burgerImage : '<img src="../MenuPage/BurgerImages/CrispyChicken2.png" alt="CrispyChicken">',
      customerImage: '<img class="male-order" src="../MenuPage/sliderImages/male1.png" alt="Male">'
    }];
  let AllMenuTwo = [
  {
    burgerNameTwo: 'Beef Burger',
    burgerPrice: 9,
    customerName: 'Nikola',
    burgerImage : '<img src="../MenuPage/BurgerImages/BeefBurger.png" alt="Beef Burger">',
    customerImage: '<img class="male-order" src="../MenuPage/sliderImages/male2.png" alt="Male">'
  }];
  let AllMenuThree =[
   {
    burgerNameThree: 'Bacon Burger',
      burgerPrice: 10,
      customerName: 'Nikolce',
      burgerImage : '<img src="../MenuPage/BurgerImages/BaconBurger.png" alt="Bacon Burger">',
      customerImage: '<img class="male-order" src="../MenuPage/sliderImages/male3.png" alt="Male">'
   }];
  let AllMenuFour = [
    {
      burgerNameFour: 'Spicy Chicken',
      burgerPrice: 21,
      customerName: 'Ilche',
      burgerImage : '<img src="../MenuPage/BurgerImages/SpicyBurger.png" alt="Spicy Burger">',
      customerImage: '<img class="male-order" src="../MenuPage/sliderImages/male4.png" alt="Male">'
   }];
  let AllMenuFive = [
    {
      burgerNameFive: 'Delicious Burger',
      burgerPrice: 5.50,
      customerName: 'Kosta',
      burgerImage : '<img src="../MenuPage/BurgerImages/DeliciousBurger3.png" alt="Delicious Burger">',
      customerImage: '<img class="male-order" src="../MenuPage/sliderImages/male5.jpg" alt="Male">'
  }];
let AllMenuSix =[
  {
    burgerNameSix: 'Tasty Burger',
    burgerPrice: 9,
    customerName: 'Biljana',
    burgerImage : '<img src="../MenuPage/BurgerImages/TastyBurger.png" alt="Tasty Burger">',
    customerImage: '<img class="female-order" src="../MenuPage/sliderImages/female1.png" alt="Female">'
  }];
let AllMenuSeven =[
   {
      burgerNameSeven: 'Bigfoot Burger',
      burgerPrice: 10,
      customerName: 'Martina',
      burgerImage : '<img src="../MenuPage/BurgerImages/BigfootBurger2.png" alt="Bigfoot Burger">',
      customerImage: '<img class="female-order" src="../MenuPage/sliderImages/female2.png" alt="Female">'
   }];
  let AllMenu =[
   {
    burgerName: 'Cheese Please',
      burgerPrice: 21,
      customerName: 'Angela',
      burgerImage : '<img src="../MenuPage/BurgerImages/CheeseBurger.png" alt="Cheese Burger">',
      customerImage: '<img class="female-order" src="../MenuPage/sliderImages/female3.png" alt="Female">'
   },
   {
    burgerName: 'Hangover Burger',
      burgerPrice: 21,
      customerName: 'Aleksandra',
      burgerImage : '<img src="../MenuPage/BurgerImages/HangoverBurger.png" alt="Hangover Burger">',
      customerImage: '<img class="female-order" src="../MenuPage/sliderImages/female44.avif" alt="Female">'
   },
   {
      burgerName: 'Hangry Burger',
      burgerPrice: 21,
      customerName: 'Klimentina',
      burgerImage : '<img src="../MenuPage/BurgerImages/HungryBurger.png" alt="Hungry Burger">',
      customerImage: '<img class="female-order" src="../MenuPage/sliderImages/female5.jpg" alt="Female">'
   }];
  
  
  let Dinamic = document.getElementById("DinamicTest");


 AllMenuOne.forEach(burgerTest =>{
    Dinamic.innerHTML += `
     <div class="menus">

    <div class="menu-items">
      <div class="title"> ${burgerTest.burgerNameOne}</div>
      <div class="single-menu">
        <span>${burgerTest.burgerPrice} $</span>
        ${burgerTest.burgerImage}
        <p class ="textMenu-food">Own made by :</p>
        <div class="maleFood-Image">
        ${burgerTest.customerImage}<br>
        <h4>${burgerTest.customerName}</h4>
        </div>

        <a href="">Order Now</a>
      </div>
    
    `
 })
 
 AllMenuTwo.forEach(burgerOne =>{
  Dinamic.innerHTML += `
   <div class="menus">

  <div class="menu-items">
    <div class="title"> ${burgerOne.burgerNameTwo}</div>
    <div class="single-menu">
      <span>${burgerOne.burgerPrice} $</span>
      ${burgerOne.burgerImage}
      <p class ="textMenu-food">Own made by :</p>
      <div class="maleFood-Image">
      ${burgerOne.customerImage}<br>
      <h4>${burgerOne.customerName}</h4>
      </div>

      <a href="">Order Now</a>
    </div>
  
  `
})

AllMenuThree.forEach(burgerTwo =>{
  Dinamic.innerHTML += `
   <div class="menus">

  <div class="menu-items">
    <div class="title"> ${burgerTwo.burgerNameThree}</div>
    <div class="single-menu">
      <span>${burgerTwo.burgerPrice} $</span>
      ${burgerTwo.burgerImage}
      <p class ="textMenu-food">Own made by :</p>
      <div class="maleFood-Image">
      ${burgerTwo.customerImage}<br>
      <h4>${burgerTwo.customerName}</h4>
      </div>

      <a href="">Order Now</a>
    </div>
  
  `
})
AllMenuFour.forEach(burgerFour =>{
  Dinamic.innerHTML += `
   <div class="menus">

  <div class="menu-items">
    <div class="title"> ${burgerFour.burgerNameFour}</div>
    <div class="single-menu">
      <span>${burgerFour.burgerPrice} $</span>
      ${burgerFour.burgerImage}
      <p class ="textMenu-food">Own made by :</p>
      <div class="maleFood-Image">
      ${burgerFour.customerImage}<br>
      <h4>${burgerFour.customerName}</h4>
      </div>

      <a href="">Order Now</a>
    </div>
  
  `
})
AllMenuFive.forEach(burgerFive =>{
  Dinamic.innerHTML += `
   <div class="menus">

  <div class="menu-items">
    <div class="title"> ${burgerFive.burgerNameFive}</div>
    <div class="single-menu">
      <span>${burgerFive.burgerPrice} $</span>
      ${burgerFive.burgerImage}
      <p class ="textMenu-food">Own made by :</p>
      <div class="maleFood-Image">
      ${burgerFive.customerImage}<br>
      <h4>${burgerFive.customerName}</h4>
      </div>

      <a href="">Order Now</a>
    </div>
  
  `
})
AllMenuSix.forEach(burgerSix =>{
  Dinamic.innerHTML += `
   <div class="menus">

  <div class="menu-items">
    <div class="title"> ${burgerSix.burgerNameSix}</div>
    <div class="single-menu">
      <span>${burgerSix.burgerPrice} $</span>
      ${burgerSix.burgerImage}
      <p class ="textMenu-food">Own made by :</p>
      <div class="maleFood-Image">
      ${burgerSix.customerImage}<br>
      <h4>${burgerSix.customerName}</h4>
      </div>

      <a href="">Order Now</a>
    </div>
  
  `
})
AllMenuSeven.forEach(burgerSeven =>{
  Dinamic.innerHTML += `
   <div class="menus">

  <div class="menu-items">
    <div class="title"> ${burgerSeven.burgerNameSeven}</div>
    <div class="single-menu">
      <span>${burgerSeven.burgerPrice} $</span>
      ${burgerSeven.burgerImage}
      <p class ="textMenu-food">Own made by :</p>
      <div class="maleFood-Image">
      ${burgerSeven.customerImage}<br>
      <h4>${burgerSeven.customerName}</h4>
      </div>

      <a href="">Order Now</a>
    </div>
  
  `
})
AllMenu.forEach(burger =>{
  Dinamic.innerHTML += `
   <div class="menus">

  <div class="menu-items">
    <div class="title"> ${burger.burgerName}</div>
    <div class="single-menu">
      <span>${burger.burgerPrice} $</span>
      ${burger.burgerImage}
      <p class ="textMenu-food">Own made by :</p>
      <div class="maleFood-Image">
      ${burger.customerImage}<br>
      <h4>${burger.customerName}</h4>
      </div>

      <a href="">Order Now</a>
    </div>
  
  `
})











