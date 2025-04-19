particlesJS.load('particles-js', 'particles.json', function() {
  console.log('particles.js loaded');
});

document.getElementById("toggle").addEventListener("click", () => {
  document.body.classList.toggle("light");
});
