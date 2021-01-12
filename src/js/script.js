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

/*function NotReady(){
    alert("This part is not implemented yet, But please check my Github what I´m working on right now and contact me for a test on the \"Lek och lär\" game I made for my kids real quick since it is the only fully complete project i have so far (on Android as .apk file)")
}*/

NavSlide();