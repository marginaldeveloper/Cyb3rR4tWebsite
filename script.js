document.addEventListener("DOMContentLoaded", () => {
    gsap.from(".navbar", { y: -50, opacity: 0, duration: 1 });
    gsap.from(".hero-content h1", { opacity: 0, x: -100, duration: 1 });
    gsap.from(".hero-content p", { opacity: 0, x: 100, duration: 1 });

    const sections = document.querySelectorAll("section");
    const navLinks = document.querySelectorAll(".menu a");

    window.addEventListener("scroll", () => {
        let current = "";
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            if (pageYOffset >= sectionTop - 60) {
                current = section.getAttribute("id");
            }
        });
        navLinks.forEach(link => {
            link.classList.remove("active");
            if (link.getAttribute("href").includes(current)) {
                link.classList.add("active");
            }
        });
    });
});
document.addEventListener("DOMContentLoaded", () => {
    const cursor = document.querySelector(".cursor");
    let cursorX = 0, cursorY = 0; 
    let targetX = 0, targetY = 0; 
    document.addEventListener("mousemove", (e) => {
        targetX = e.clientX;
        targetY = e.clientY;
    });
    function animateCursor() {
        cursorX += (targetX - cursorX) * 0.1; 
        cursorY += (targetY - cursorY) * 0.1;
        cursor.style.transform = `translate(${cursorX}px, ${cursorY}px)`;
        requestAnimationFrame(animateCursor);
    }
    animateCursor();
});

