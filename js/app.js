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

/**
 * End Global Variables
 * Start Helper Functions
 * 
*/



/**
 * End Helper Functions
 * Begin Main Functions
 * 
*/

// build the nav
sections.forEach(function(elem) {
    const newList = document.createElement('li');
    const text = elem.getAttribute('data-nav');
    const newLink = document.createElement('a');
    newLink.textContent = text;
    newList.appendChild(newLink);

    // scroll into view
    newList.addEventListener('click',() => {
            elem.scrollIntoView({
                behavior: 'smooth',
                block: 'center'
            });
        })

    // style the navbar
    newList.setAttribute('style','color: black; padding: 1rem; font-weight:bold; float: left');
    
    // append to Fragment
    frag.appendChild(newList);
});

// append to navbar__list
navbarList.appendChild(frag);

// Add class 'active' to section when near top of viewport


// Scroll to anchor ID using scrollTO event


/**
 * End Main Functions
 * Begin Events
 * 
*/

// Build menu 

// Scroll to section on link click

// Set sections as active


