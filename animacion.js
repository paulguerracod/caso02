const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if(entry.isIntersecting) {
            entry.target.classList.add('visible');
        }
    });
}, { threshold: 0.3 }); // 30% visible

document.querySelectorAll('.fade-in').forEach(el => observer.observe(el));