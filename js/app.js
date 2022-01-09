/**
 * Define Global Variables
 * 
*/
const sections = document.querySelectorAll("section");
const navbarList = document.querySelector('#navbar__list');
const frag = document.createDocumentFragment();
const header = document.querySelector('.page__header');
const btn = document.querySelector('#upBtn');

/**
 * End Global Variables
 * Begin Main Functions
 * 
*/

// build the nav
sections.forEach((elem) => {
    const li = document.createElement('li');
    const text = elem.getAttribute('data-nav');
    const anchor = document.createElement('a');
    const anchorText = document.createTextNode(text);
    anchor.appendChild(anchorText);
    anchor.classList.add('menu__link');
    anchor.href = '#text';
    li.appendChild(anchor);

    // Scroll to anchor using scroll into view
    anchor.addEventListener('click', () => {
        elem.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        });
    });

    // style the navbar
    li.setAttribute('style', 'color: black; padding: 1rem; font-weight:bold; float: left');

    // append to Fragment
    frag.appendChild(li);
});

// append to navbar__list
navbarList.appendChild(frag);

// Add class 'active' to section when near top of viewport
// Make a function to set the class for active section
window.addEventListener('scroll', ()=> {
    sections.forEach(active => {
        // Determine when to call using getBoundingClientRect
        const position = active.getBoundingClientRect();
        if (position.top >= 10 && position.bottom <= window.outerHeight){
            // Loop over sections to remove the class & add it to the active one
                sections.forEach(notActive => {
                    notActive.classList.remove('your-active-class');
                });
                active.classList.add('your-active-class');
            };
    });
});

// function to hide the navbar while not scrolling
const nav = document.querySelector('.navbar__menu');
let scrollPos = window.scrollY;

window.addEventListener('scroll', ()=> {
    if (scrollPos < window.scrollY){
        nav.classList.add('nav--hidden');
    } else {
        nav.classList.remove('nav--hidden');
    }
    scrollPos = window.scrollY;
});

// scroll to top button
// hide the button
window.onscroll= () => {
    this.scrollY >= 300 ?btn.classList.add('show'):btn.classList.remove('show');
}
// scroll to top
function goUp() {
    window.scrollTo({top:0, behavior:"smooth"});
}

/**
 * End Main Functions
 */

