/* =============================================
   HOME.JS — Home Page Scripts
   ============================================= */

// ── TYPEWRITER ────────────────────────────────
const roles = [
  'Frontend Developer',
  'React Engineer',
  'UI Craftsman',
  'CSS Wizard',
  'Web Builder'
];

let roleIndex = 0;
let charIndex = 0;
let isDeleting = false;
const roleEl = document.getElementById('roleText');
const heroRole = document.getElementById('heroRole');

// Make visible only when JS is running — prevents raw code showing
if (heroRole) heroRole.style.visibility = 'visible';

function typeWriter() {
  const current = roles[roleIndex];

  if (isDeleting) {
    roleEl.textContent = current.substring(0, charIndex - 1);
    charIndex--;
  } else {
    roleEl.textContent = current.substring(0, charIndex + 1);
    charIndex++;
  }

  let speed = isDeleting ? 60 : 100;

  if (!isDeleting && charIndex === current.length) {
    speed = 2200;
    isDeleting = true;
  } else if (isDeleting && charIndex === 0) {
    isDeleting = false;
    roleIndex = (roleIndex + 1) % roles.length;
    speed = 400;
  }

  setTimeout(typeWriter, speed);
}

setTimeout(typeWriter, 800);

// ── COUNTER ANIMATION ────────────────────────
function animateCounter(el) {
  const target = parseInt(el.getAttribute('data-target'));
  let current = 0;
  const increment = target / 50;
  const timer = setInterval(() => {
    current += increment;
    if (current >= target) {
      current = target;
      clearInterval(timer);
    }
    el.textContent = Math.floor(current);
  }, 40);
}

const statNums = document.querySelectorAll('.stat-num');
const statsSection = document.querySelector('.hero-stats');

// Trigger counters after page load with a small delay
setTimeout(() => {
  statNums.forEach(num => animateCounter(num));
}, 1000);
