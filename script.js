//variables declaration
const navlinks=document.querySelector('.nav-links')
const navMenuOpen=document.querySelector('#open-menu')
const navMenuClose=document.querySelector('#close-menu')
const navMenuItem=document.querySelectorAll('.nav-links a')


//if the user clicks navlinks <a> tag then close the menu
//open the menu when the hamburger icon is clicked
navMenuOpen.addEventListener('click',()=>{
    navlinks.style.display='flex'
    navMenuOpen.style.display='none'
    navMenuClose.style.display='inline-block'
    
    navMenuItem.forEach(item => {
      item.addEventListener('click', () => {
        navlinks.style.display = 'none';          // Hide the menu
        navMenuOpen.style.display = 'inline-block'; // Show the hamburger icon
        navMenuClose.style.display = 'none';      // Hide the close icon
      });
    });
   
})
//close the menu when the close icon is clicked

navMenuClose.addEventListener('click',()=>{
    navlinks.style.display='none'
    navMenuOpen.style.display='inline-block'
    navMenuClose.style.display='none'
})

