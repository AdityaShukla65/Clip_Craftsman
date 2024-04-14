document.addEventListener("DOMContentLoaded", function() {
    const burger_btn=document.querySelector("#burger");
    const cross_btn=document.querySelector("#cross");
    const list=document.querySelector(".header ul");
    const logo=document.querySelector(".logo");
    const head=document.querySelector(".header");
    burger_btn.addEventListener('click',show);
    cross_btn.addEventListener('click',hide);

    function show(){
        burger_btn.style.display="none";
        cross_btn.style.display="block";
        list.style.display="block";
        logo.style.display="none";
        head.style.padding="0rem";
    }
    function hide(){
        burger_btn.style.display="block";
        cross_btn.style.display="none";
        list.style.display="none";
        logo.style.display="block";
        head.style.padding="0.25rem 1.5rem";
    }

    var typed = new Typed(".auto-type",{
        strings:["Video Editor","Copy Writer"],
        typeSpeed:100,
        backSpeed:150,
        loop:true
    })
    // Function to handle smooth scrolling
    function scrollToElement(element) {
        const topOffset = element.getBoundingClientRect().top + window.pageYOffset;
        window.scrollTo({
            behavior: 'smooth',
            top: topOffset
        });
    }

    // Function to handle click event on anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();

            const target = document.querySelector(this.getAttribute('href'));
            scrollToElement(target);
        });
    });
});
