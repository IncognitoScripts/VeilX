document.getElementById('toggle').addEventListener('click', () => {
  document.body.classList.toggle('light');
});

particlesJS('particles-js', {
  particles: {
    number: { value: 100, density: { enable: true, value_area: 800 } },
    color: { value: '#00ffff' },
    shape: {
      type: 'circle',
      stroke: { width: 0, color: '#000000' },
      polygon: { nb_sides: 5 }
    },
    opacity: {
      value: 0.5,
      random: false,
      anim: { enable: false }
    },
    size: {
      value: 3,
      random: true,
      anim: { enable: false }
    },
    line_linked: {
      enable: true,
      distance: 150,
      color: '#00ffff',
      opacity: 0.4,
      width: 1
    },
    move: {
      enable: true,
      speed: 3,
      direction: 'none',
      random: false,
      straight: false,
      out_mode: 'out',
      bounce: false
    }
  },
  interactivity: {
    detect_on: 'canvas',
    events: {
      onhover: { enable: true, mode: 'grab' },
      onclick: { enable: true, mode: 'push' },
      resize: true
    },
    modes: {
      grab: { distance: 140, line_linked: { opacity: 1 } },
      push: { particles_nb: 4 }
    }
  },
  retina_detect: true
});
