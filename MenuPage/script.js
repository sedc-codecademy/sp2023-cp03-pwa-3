let AllMenu = [
    {
      burgerName: 'Crispy Chicken',
      burgerPrice: 5.50,
      customerName: 'Marko',
      burgerImage : '<img src="./staticMenuImages/hamburger1.jpeg" alt"Hamburger">',
      customerImage: '<img class="male-order" src="../MenuPage/sliderImages/male1.png" alt="Male">'
  },
  {
    burgerName: 'Debel Burger',
    burgerPrice: 9,
    customerName: 'Marko',
    burgerImage : '<img src="./staticMenuImages/hamburger1.jpeg" alt"Hamburger">',
    customerImage: '<img class="male-order" src="../MenuPage/sliderImages/male1.png" alt="Male">'
  },
   {
    burgerName: 'Dietalen Burger',
      burgerPrice: 10,
      customerName: 'Marko',
      burgerImage : '<img src="./staticMenuImages/hamburger1.jpeg" alt"Hamburger">',
      customerImage: '<img class="male-order" src="../MenuPage/sliderImages/male1.png" alt="Male">'
   },
   {
    burgerName: 'Cofte Burger',
      burgerPrice: 21,
      customerName: 'Ilche',
      burgerImage : '<img src="./staticMenuImages/hamburger1.jpeg" alt"Hamburger">',
      customerImage: '<img class="male-order" src="../MenuPage/sliderImages/male1.png" alt="Male">'
   },
    {
      burgerName: 'Sedc Burger',
      burgerPrice: 5.50,
      customerName: 'Marko',
      burgerImage : '<img src="./staticMenuImages/hamburger1.jpeg" alt"Hamburger">',
      customerImage: '<img class="male-order" src="../MenuPage/sliderImages/male1.png" alt="Male">'
  },
  {
    burgerName: 'Debel Burger',
    burgerPrice: 9,
    customerName: 'Marko',
    burgerImage : '<img src="./staticMenuImages/hamburger1.jpeg" alt"Hamburger">',
    customerImage: '<img class="male-order" src="../MenuPage/sliderImages/male1.png" alt="Male">'
  },
   {
    burgerName: 'Dietalen Burger',
      burgerPrice: 10,
      customerName: 'Marko',
      burgerImage : '<img src="./staticMenuImages/hamburger1.jpeg" alt"Hamburger">',
      customerImage: '<img class="male-order" src="../MenuPage/sliderImages/male1.png" alt="Male">'
   },
   {
    burgerName: 'Cofte Burger',
      burgerPrice: 21,
      customerName: 'Ilche',
      burgerImage : '<img src="./staticMenuImages/hamburger1.jpeg" alt"Hamburger">',
      customerImage: '<img class="male-order" src="../MenuPage/sliderImages/male1.png" alt="Male">'
   },
   {
    burgerName: 'Cofte Burger',
      burgerPrice: 21,
      customerName: 'Ilche',
      burgerImage : '<img src="./staticMenuImages/hamburger1.jpeg" alt"Hamburger">',
      customerImage: '<img class="male-order" src="../MenuPage/sliderImages/male1.png" alt="Male">'
   }
  ];
  
  
  let Dinamic = document.getElementById("DinamicTest");


 AllMenu.forEach(burger =>{
    Dinamic.innerHTML += `
     <div class="menus">

    <div class="menu-items">
      <div class="title"> ${burger.burgerName}</div>
      <div class="single-menu">
        <span>${burger.burgerPrice} $</span>
        ${burger.burgerImage}
        <p class ="textMenu-food">Hamburger with beef , tomato sauce , fries</p>
        <div class="maleFood-Image">
        ${burger.customerImage}<br>
        <h4>${burger.customerName}</h4>
        </div>

        <a href="">Order Now</a>
      </div>
    
    `
 })



