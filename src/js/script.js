const NavSlide = () => {
    const burger = document.querySelector('.burger');
    const nav = document.querySelector('.navlinks');
    const navLinks = document.querySelectorAll('.navlinks li')

    burger.addEventListener('click', () => {
        nav.classList.toggle('nav-active');
    });

    navLinks.forEach((link, index) => {
        link.style.animation = 'navlinkFade 0.5s ease forwards ${index /5 +2}s'
        console.log(index/5 +0.2);
    });
}

NavSlide();