document.addEventListener('DOMContentLoaded', () => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if(entry.isIntersecting) {
          const delay = entry.target.dataset.delay || 100;
          setTimeout(() => {
            entry.target.classList.add('visible');
          }, delay);
        }
      });
    }, {
      threshold: 0.2,
      rootMargin: '0px 0px -50px 0px'
    });
  
    document.querySelectorAll('.fade-in').forEach(el => {
      observer.observe(el);
      
      // Reset para animaciones al recargar
      el.classList.remove('visible');
      void el.offsetWidth; // Trigger reflow
    });
  });