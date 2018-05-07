// Styles
import '../scss/master.scss';
// jQuery
import jQuery from "jquery";
window.$ = window.jQuery = jQuery;
// Scripts
import './counters';

document.addEventListener('DOMContentLoaded', () => {
  // Form validation
  const reqInputs = document.querySelectorAll('.req');
  reqInputs.forEach((input) => {
    input.addEventListener('blur', (e) => {
      e.target.setAttribute('required', true);
    })
  })
})
