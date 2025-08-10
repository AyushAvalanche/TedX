// Space-themed TEDx NMIMS Enhanced JavaScript
console.log('TEDx NMIMS additional scripts loaded');

// Space Loading Animation Controller
class SpaceLoader {
  constructor() {
    this.loader = document.getElementById('spaceLoader');
    this.init();
  }
  
  init() {
    // Start loading sequence
    setTimeout(() => {
      this.hideLoader();
    }, 3000);
  }
  
  hideLoader() {
    if (this.loader) {
      this.loader.classList.add('fade-out');
      setTimeout(() => {
        this.loader.style.display = 'none';
      }, 1000);
    }
  }
}

// Initialize space loader
document.addEventListener('DOMContentLoaded', () => {
  new SpaceLoader();
});

// Enhanced scroll animations using GSAP when available
if (typeof gsap !== 'undefined') {
  // Smooth reveal animations
  gsap.registerPlugin(ScrollTrigger);
  
  // Animate sections on scroll
  gsap.utils.toArray('.section-title').forEach((title) => {
    gsap.from(title, {
      y: 100,
      opacity: 0,
      duration: 1,
      scrollTrigger: {
        trigger: title,
        start: 'top 80%',
        toggleActions: 'play none none none'
      }
    });
  });
  
  // Animate speaker cards
  gsap.utils.toArray('.speaker-card').forEach((card, index) => {
    gsap.from(card, {
      y: 50,
      opacity: 0,
      duration: 0.8,
      delay: index * 0.1,
      scrollTrigger: {
        trigger: card,
        start: 'top 85%',
        toggleActions: 'play none none none'
      }
    });
  });
}

// Space-themed enhanced particle system
function enhanceParticles() {
  if (window.particlesJS && document.getElementById('particles-js')) {
    particlesJS('particles-js', {
      particles: {
        number: {
          value: 120,
          density: {
            enable: true,
            value_area: 800
          }
        },
        color: {
          value: ["#ff0000", "#dc2626", "#ef4444", "#991b1b"]
        },
        shape: {
          type: ["circle", "triangle"],
          stroke: {
            width: 0,
            color: "#000000"
          }
        },
        opacity: {
          value: 0.6,
          random: true,
          anim: {
            enable: true,
            speed: 0.5,
            opacity_min: 0.1,
            sync: false
          }
        },
        size: {
          value: 3,
          random: true,
          anim: {
            enable: true,
            speed: 2,
            size_min: 0.1,
            sync: false
          }
        },
        line_linked: {
          enable: true,
          distance: 150,
          color: "#ff0000",
          opacity: 0.2,
          width: 1
        },
        move: {
          enable: true,
          speed: 1.5,
          direction: "none",
          random: true,
          straight: false,
          out_mode: "out",
          bounce: false,
          attract: {
            enable: true,
            rotateX: 600,
            rotateY: 1200
          }
        }
      },
      interactivity: {
        detect_on: "canvas",
        events: {
          onhover: {
            enable: true,
            mode: "repulse"
          },
          onclick: {
            enable: true,
            mode: "push"
          },
          resize: true
        },
        modes: {
          grab: {
            distance: 140,
            line_linked: {
              opacity: 1
            }
          },
          bubble: {
            distance: 400,
            size: 40,
            duration: 2,
            opacity: 8,
            speed: 3
          },
          repulse: {
            distance: 100,
            duration: 0.4
          },
          push: {
            particles_nb: 4
          },
          remove: {
            particles_nb: 2
          }
        }
      },
      retina_detect: true
    });
    console.log('Particles system enhanced');
  }
}

// Initialize enhanced features when DOM is ready
document.addEventListener('DOMContentLoaded', () => {
  enhanceParticles();
  
  // Add smooth scrolling for anchor links
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();
      const target = document.querySelector(this.getAttribute('href'));
      if (target) {
        target.scrollIntoView({
          behavior: 'smooth',
          block: 'start'
        });
      }
    });
  });
  
  console.log('Enhanced features initialized');
});

// Utility functions for React components
window.TEDxUtils = {
  // Format date utility
  formatDate: (date) => {
    return new Intl.DateTimeFormat('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    }).format(new Date(date));
  },
  
  // Scroll to top utility
  scrollToTop: () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  },
  
  // Share event utility
  shareEvent: async () => {
    if (navigator.share) {
      try {
        await navigator.share({
          title: 'TEDx NMIMS Indore 2025',
          text: 'Join us on September 13, 2025 for TEDx NMIMS Indore - Ideas Worth Spreading',
          url: window.location.href
        });
      } catch (err) {
        console.log('Error sharing:', err);
      }
    } else {
      // Fallback for browsers that don't support Web Share API
      navigator.clipboard.writeText(window.location.href);
      alert('Event link copied to clipboard!');
    }
  }
};