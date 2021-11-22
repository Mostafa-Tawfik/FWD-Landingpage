/**
 * 
 * Manipulating the DOM exercise.
 * Exercise programmatically builds navigation,
 * scrolls to anchors from navigation,
 * and highlights section in viewport upon scrolling.
 * 
 * Dependencies: None
 * 
 * JS Version: ES2015/ES6
 * 
 * JS Standard: ESlint
 * 
*/

/**
 * Comments should be present at the beginning of each procedure and class.
 * Great to have comments before crucial code sections within the procedure.
*/

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
            block: 'center'
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
function switchToActiveSection (){
    sections.forEach(active => {
        // Determine when to call using getBoundingClientRect
        const position = active.getBoundingClientRect();
        if (position.top >= 10 && position.bottom <= window.innerHeight){
            // Loop over sections to remove the class & add it to the active one
                sections.forEach(notActive => {
                    notActive.classList.remove('your-active-class');
                });
                active.classList.add('your-active-class');
            };
    });
};

// function to hide the navbar while not scrolling
function checkScrolling(){
    let scrolling;
    let isScrolling = true;
    // when not scrolling hide the header
    window.addEventListener('scroll',()=> {
        scrolling = setTimeout(() => {
            header.style.visibility = 'hidden';
        }, 3000);
        isScrolling = false;
    });
    // when scrolling show the header
    if(isScrolling = true){
        clearTimeout(scrolling);
        header.style.visibility = 'visible';
    }
}

// scroll to top button
// hide the button
function scrollBtn() {
    if(document.body.scrollTop > 1000){
        btn.style.display='block';
    }else{
        btn.style.display='none';
    }
}
window.onscroll = () => { scrollBtn(); };

// scroll to top
function goUp() {
    document.body.scrollTop = 0;
}

// style the button
btn.setAttribute('style','display: none; position: fixed; bottom: 2rem; right: 1rem; padding: 0.5rem');

/**
 * End Main Functions
 * Begin Events 
 */

// Set sections as active
window.addEventListener('scroll', switchToActiveSection);

// hide navbar while not scrolling
window.addEventListener('scroll',checkScrolling);

/**
 * End Events
 */

