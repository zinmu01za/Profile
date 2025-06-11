document.addEventListener('DOMContentLoaded', function() {
    const slides = document.querySelectorAll('.hobby-slide');
    const dotsContainer = document.querySelector('.slide-dots');
    let current = 0;

    // สร้าง dot ตามจำนวนสไลด์
    slides.forEach((_, i) => {
        const dot = document.createElement('button');
        dot.className = 'slide-dot';
        dot.addEventListener('click', () => {
            current = i;
            showSlide(current);
            resetInterval();
        });
        dotsContainer.appendChild(dot);
    });
    const dots = document.querySelectorAll('.slide-dot');

    function showSlide(idx) {
        slides.forEach((img, i) => {
            img.classList.remove('active', 'prev', 'next');
            if (i === idx) {
                img.classList.add('active');
            } else if (i === (idx - 1 + slides.length) % slides.length) {
                img.classList.add('prev');
            } else if (i === (idx + 1) % slides.length) {
                img.classList.add('next');
            }
        });
        dots.forEach((dot, i) => dot.classList.toggle('active', i === idx));
    }

    function nextSlide() {
        current = (current + 1) % slides.length;
        showSlide(current);
    }

    // Auto slide
    let interval = setInterval(nextSlide, 3000);

    function resetInterval() {
        clearInterval(interval);
        interval = setInterval(nextSlide, 3000);
    }

    showSlide(current);
});