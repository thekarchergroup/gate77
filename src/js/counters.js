// stat counter
const counterSpeed = 100; // ms
let counters = document.querySelectorAll('[data-counter]');

function unmount(counter) {
  counter.removeAttribute('data-counter-end');
}

counters.forEach(counter => {
  let end = counter.getAttribute('data-counter-end');
  let options = {
    threshold: .5
  }
  let io = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        // increment counters
        for(let i = 0; i <= end; i++) {
          setTimeout(() => {
            counter.innerHTML = i;
            }, i * counterSpeed);
          } io.unobserve(counter);
        }
      });
  }, options);
  io.observe(counter);
})
