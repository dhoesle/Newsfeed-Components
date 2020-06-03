/* This is the data we will be using, study it but don't change anything, yet. */

let menuItems = [
  'Students',
  'Faculty',
  "What's New",
  'Tech Trends',
  'Music',
  'Log Out'
];

/* 
  Step 1: Write a component called 'menuMaker' to create a menu like the markup below:

  <div class="menu">
    <ul>
      {each menu item as a list item}
    </ul>
  </div>

  The 'menuMaker' takes an array as its only argument.

  Step 2: Inside the function, iterate over the array creating a list item <li> element for each item in the array. 
  Add those items to the <ul>

  Step 3: Using a DOM selector, select the menu button (the element with a class of 'menu-button') currently on the DOM.

  Step 4: add a click event listener to the menu button. When clicked it should toggle the class 'menu--open' on the menu (your div with a 'menu' class).

  Step 5: return your div with a 'menu' class.

  Step 6: Use 'menuMaker' to create a menu using the 'menuItems' array, and append the returned markup to the DOM.
*/

let div = document.createElement('div')
function menuMaker (array){
  header.prepend(div)
  div.classList.add('menu')
  let ul = document.createElement('ul')
  div.appendChild(ul)
  array.forEach (item => {
    let li = document.createElement('li')
    li.innerHTML = item
    ul.appendChild(li)
  })
   return div
}
let header = document.querySelector('.header')
let menuButton = document.querySelector('.menu-button')
menuButton.addEventListener ('click', event =>{
  div.classList.toggle('menu--open')
})
menuMaker(menuItems);
