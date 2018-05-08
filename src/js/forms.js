$(() => {
  $("#contact-form").submit((e) => {
    e.preventDefault();
    // Form validation
    // const reqInputs = document.querySelectorAll('.req');
    // reqInputs.forEach((input) => {
    //   input.setAttribute('required', true);
    // });
    let form = $(this);
    $.post(form.attr("action"), form.serialize()).then(function() {
      alert("Thank you!");
    });
  });
})
