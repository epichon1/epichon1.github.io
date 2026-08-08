/* -- Ethan Pichon -- */
/* JAVASCRIPT */

// ─────────────── Portfolio Media Carousel ───────────────
function moveCarousel(button, direction) {
    if (window.event) window.event.stopPropagation();
    const container = button.closest('.carousel-container');
    const viewport = container.querySelector('.carousel-viewport');
    const style = window.getComputedStyle(viewport);
    const fontSize = parseFloat(style.fontSize);
    const scrollAmount = viewport.offsetWidth + fontSize;
    const dots = container.querySelectorAll('.dot');
    const totalUnique = dots.length;

    viewport.scrollBy({ left: direction * scrollAmount, behavior: 'smooth' });

    setTimeout(() => {
        const currentScroll = viewport.scrollLeft;
        const maxScroll = viewport.scrollWidth - viewport.clientWidth;
        const htmlIndex = Math.round(currentScroll / scrollAmount);
        let dotIndex = htmlIndex % totalUnique;
        if (dotIndex < 0) dotIndex += totalUnique;
        dots.forEach((dot, i) => dot.classList.toggle('active', i === dotIndex));
    }, 200);
}

// Carousel Initialization — first dot active
window.addEventListener('load', () => {
    document.querySelectorAll('.carousel-container').forEach(container => {
        const dots = container.querySelectorAll('.dot');
        if (dots.length > 0) {
            dots.forEach(d => d.classList.remove('active'));
            dots[0].classList.add('active');
        }
    });
});

// ─────────────── Resume fullscreen button ───────────────
const fullscreenBtn = document.getElementById('fullscreen-btn');
const resumeContainer = document.getElementById('resume-container');

if (fullscreenBtn && resumeContainer) {
    fullscreenBtn.addEventListener('click', () => {
        if (!document.fullscreenElement) {
            if (resumeContainer.requestFullscreen) resumeContainer.requestFullscreen();
            else if (resumeContainer.webkitRequestFullscreen) resumeContainer.webkitRequestFullscreen();
            fullscreenBtn.innerHTML = '<i class="fa fa-compress"></i> Exit Full Screen';
        } else {
            if (document.exitFullscreen) document.exitFullscreen();
            fullscreenBtn.innerHTML = '<i class="fa fa-expand"></i> Full Screen';
        }
    });
    document.addEventListener('fullscreenchange', () => {
        if (!document.fullscreenElement) fullscreenBtn.innerHTML = '<i class="fa fa-expand"></i> Full Screen';
    });
}

// ─────────────── Year + content fade-in ───────────────
document.addEventListener('DOMContentLoaded', () => {
    const yr = document.getElementById("year");
    if (yr) yr.textContent = new Date().getFullYear();
});

window.addEventListener("load", () => {
    document.querySelectorAll(".text-box, .pdf-container").forEach(el => el.classList.add("loaded"));
});
