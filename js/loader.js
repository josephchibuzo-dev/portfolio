/* =============================================
   LOADER.JS — Page Loader
   ============================================= */
window.addEventListener('load', () => {
  const loader = document.getElementById('pageLoader');
  if (!loader) return;
  setTimeout(() => {
    loader.classList.add('hidden');
  }, 900);
});
