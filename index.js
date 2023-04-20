const navLinks = document.querySelectorAll('nav a');

navLinks.forEach(link => {
    link.addEventListener('click', e=>{
        e.preventDefault();
        const targetId = link.getAttribute('href');
        const targetElement = document.querySelector(targetId);
        const topOffset = targetElement.offsetTop;

        window.scrollTo({
            top: topOffset,
            behavior: 'smooth'
        })
    })
})
