const animationObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if(entry.isIntersecting) {
            // Delay basado en posición del elemento
            const delay = Array.from(entry.target.parentNode.children)
                             .indexOf(entry.target) * 200;
            
            setTimeout(() => {
                entry.target.classList.add('visible');
            }, delay);
        }
    });
}, {
    rootMargin: '0px',
    threshold: 0.2
});

document.querySelectorAll('.fade-in').forEach(el => {
    animationObserver.observe(el);
});