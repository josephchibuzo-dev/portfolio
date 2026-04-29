/* =============================================
   CONTACT.JS — Form Handling
   ============================================= */

const form = document.getElementById('contactForm');
const submitBtn = document.getElementById('submitBtn');
const formSuccess = document.getElementById('formSuccess');

form.addEventListener('submit', (e) => {
  e.preventDefault();

  // Simulate submission
  submitBtn.disabled = true;
  submitBtn.querySelector('.submit-text').textContent = 'Sending...';
  submitBtn.querySelector('.submit-arrow').textContent = '⟳';

  setTimeout(() => {
    form.classList.add('hidden');
    formSuccess.classList.remove('hidden');
  }, 1500);
});

function resetForm() {
  form.reset();
  form.classList.remove('hidden');
  formSuccess.classList.add('hidden');
  submitBtn.disabled = false;
  submitBtn.querySelector('.submit-text').textContent = 'Send Message';
  submitBtn.querySelector('.submit-arrow').textContent = '→';
}
