//open the menu when the hamburger icon is clicked
const navlinks=document.querySelector('.nav-links')
const navMenuOpen=document.querySelector('#open-menu')
const navMenuClose=document.querySelector('#close-menu')
const navMenuItem=document.querySelectorAll('.nav-links a')


 //if the user clicks navlinks <a> tag then close the menu

navMenuItem.forEach(item => {
    item.addEventListener('click', () => {
      navlinks.style.display = 'none';          // Hide the menu
      navMenuOpen.style.display = 'inline-block'; // Show the hamburger
      navMenuClose.style.display = 'none';      // Hide the close icon
    });
  });


navMenuOpen.addEventListener('click',()=>{
    navlinks.style.display='flex'
    navMenuOpen.style.display='none'
    navMenuClose.style.display='inline-block'
    // closeMenuItem;
})

navMenuClose.addEventListener('click',()=>{
    navlinks.style.display='none'
    navMenuOpen.style.display='inline-block'
    navMenuClose.style.display='none'
})

