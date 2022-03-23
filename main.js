const menuBtn =document.querySelector('#menu-btn');
const closeBtn = document.querySelector('#close-btn');
const menu = document.querySelector('nav .container ul');
const navItems = menu.querySelectorAll('li');



menuBtn.addEventListener('click', () => {
    menu.style.display = "block";
    menuBtn.style.display = "none";
    closeBtn.style.display ='inline-block';
})

closeBtn.addEventListener('click', () => {
    menu.style.display = "none";
    menuBtn.style.display = "inline-block";
    closeBtn.style.display ='none';
});

const changeActive = () => {
   navItems.forEach(item =>{
        const link = item.querySelector('a');
        link.classList.remove('active');
   })
}

navItems.forEach(item => {
    const link = item.querySelector('a');
    link.addEventListener('click', () => {
        changeActive();
        link.classList.add('active');
    });
})

const readMore = document.querySelector('.read-more');
const readLess = document.querySelector('.read-less');
const read = document.querySelector('.read-more-content');

readMore.addEventListener('click', ()=> {
    read.style.display = "block";
    readMore.style.display = "none";
    readLess.style.display = "block";
    

});

readLess.addEventListener('click', () => {
    read.style.display = "none";
    readMore.style.display = "block";
    readLess.style.display = "none";
});

window.addEventListener('scroll',() => {
    document.querySelector('nav').classList.toggle('show-box-shadow',window.scrollY > 0)
})
