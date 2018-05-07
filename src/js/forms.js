document.addEventListener('DOMContentLoaded', () => {
  // Form validation
  const reqInputs = document.querySelectorAll('.req');
  reqInputs.forEach((input) => {
    input.addEventListener('blur', (e) => {
      e.target.setAttribute('required', true);
    });
  });
});
// jQuery
// import jQuery from "jquery";
// window.$ = window.jQuery = jQuery;
//
// $(() => {
//   $("#contact-form").submit((e) => {
//     e.preventDefault();
//     // Form validation
//     const reqInputs = document.querySelectorAll('.req');
//     reqInputs.forEach((input) => {
//       input.setAttribute('required', true);
//     });
//     // $.post(form.attr("action"), form.serialize()).then(function() {
//     //   alert("Thank you!");
//     // });
//   });
// })
