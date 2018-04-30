// Styles
import '../scss/master.scss';
// Scripts
import jQuery from "jquery";
window.$ = window.jQuery = jQuery;

$(function() {
  // todo: check if in viewport
  // 
  // state counter
  const counterSpeed = 70;
  const counters = $('[data-counter]');
  counters.each(function() {
    let end = $(this).data('counter-end');
    let counter = $(this);

    // increment if in view
    for(let i = 0; i <= end; i++) {
      setTimeout(function() {
        counter.html(i);
      }, i * counterSpeed);
    }
  })

});
