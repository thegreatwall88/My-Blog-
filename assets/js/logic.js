// Access toggle switch HTML element
const themeSwitcher = document.querySelector('#theme-switcher');

const body = document.body;
// Set default mode to dark
let mode = 'light';

// Listen for a click event on toggle switch
themeSwitcher.addEventListener('click', function () {
  // If mode is dark, apply light background
  if (mode === 'dark') {
    mode = 'light';
    
    body.setAttribute('class', 'light');
    
  }
  // If mode is light, apply dark background
  else {
    mode = 'dark';
    
    body.setAttribute('class', 'dark');
 
  }
});