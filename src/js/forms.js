$(() => {
  $("#contact-form").submit((e) => {
    e.preventDefault();

    let form = $(this);
    $.post(form.attr("action"), form.serialize()).then(function() {
      alert("Thank you!");
    });
  });
})
