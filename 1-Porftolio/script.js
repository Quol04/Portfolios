//open the menu when the hamburger icon is clicked
const navlinks=document.querySelector('.nav-links')
const navMenuOpen=document.querySelector('#open-menu')
const navMenuClose=document.querySelector('#close-menu')


navMenuOpen.addEventListener('click',()=>{
    navlinks.style.display='flex'
    navMenuOpen.style.display='none'
    navMenuClose.style.display='inline-block'
})

navMenuClose.addEventListener('click',()=>{
    navlinks.style.display='none'
    navMenuOpen.style.display='inline-block'
    navMenuClose.style.display='none'
})

