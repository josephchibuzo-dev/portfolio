/* =============================================
   PROJECTS.JS — Filter Logic
   ============================================= */

const filterBtns = document.querySelectorAll('.filter-btn');
const cards = document.querySelectorAll('.pcard');
const noResults = document.getElementById('noResults');

filterBtns.forEach(btn => {
  btn.addEventListener('click', () => {
    // Update active button
    filterBtns.forEach(b => b.classList.remove('active'));
    btn.classList.add('active');

    const filter = btn.getAttribute('data-filter');
    let visibleCount = 0;

    cards.forEach(card => {
      const cat = card.getAttribute('data-cat');
      if (filter === 'all' || cat === filter) {
        card.classList.remove('hidden');
        card.style.animation = 'none';
        // Re-trigger animation
        setTimeout(() => {
          card.style.animation = '';
          card.classList.add('reveal');
          card.classList.add('visible');
        }, 10);
        visibleCount++;
      } else {
        card.classList.add('hidden');
      }
    });

    // Show/hide no results message
    if (visibleCount === 0) {
      noResults.classList.remove('hidden');
    } else {
      noResults.classList.add('hidden');
    }
  });
});
