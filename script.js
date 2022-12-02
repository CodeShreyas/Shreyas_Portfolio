document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener("click", function(e){
        e.preventDefault();
        document.querySelector(this.getAttribute("href")).scrollIntoView({
            behavior : "smooth"
        });
    });
});


const btnScrollToTop = document.querySelector("#btnScrollToTop");

window.addEventListener("scroll", scrollFunction);

function scrollFunction() {
    if (window.pageYOffset > 500) {
        btnScrollToTop.style.display = "block";
    }
    else {
        btnScrollToTop.style.display = "none"
    }
}

btnScrollToTop.addEventListener("click", function () {

   window.scrollTo({
        top: 0,
        left: 0,
        behavior : "smooth"
   });


});
