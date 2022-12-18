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

let christmas = {
    delay: null,
    delete: function(){
        document.body.querySelectorAll('.christmas-lights').forEach(function(ul){
            ul.remove();
        });
    },
    create: function(){
        let v = window.innerHeight / 60 + 2,
            h = window.innerWidth / 60 + 2,
            data = {
                'top': h,
                'right': v,
                'bottom': h,
                'left': v
            },
            ul = c = null;
        for (let position in data) {
            c = data[position];
            ul = document.createElement('ul');
            ul.className = 'christmas-lights';
            ul.dataset.position = position;
            for (let i = 0; i <= c; i++) {
                ul.append(document.createElement('li'));
            }
            document.body.append(ul);
        }
    }
}
 
document.addEventListener('DOMContentLoaded', function(){
    christmas.create();
});
 
window.addEventListener('resize', function(e) {
    clearTimeout(christmas.delay);
    christmas.delay = setTimeout(function(){
        christmas.delete();
        christmas.create();
    }, 100)
});

const snow = document.querySelector('#snow');
const jesus = document.querySelector('#jesus');
const normal = document.querySelector('#normal-button');
const diwali = document.querySelector('#diwali')

jesus.addEventListener('click', () => {
   snow.classList.add('snow')
   console.log("snow id applied!");
})
normal.addEventListener('click', () => {
   snow.classList.remove('snow')
   console.log("snow id removed!");
})



var typed = new Typed(".auto-input", {
    strings: ["am Shreyas", "am a coder", "love web dev", "love learning"],
    loop: true,
    typeSpeed: 100,
})

const dropdowns = document.querySelectorAll('.dropdown');

dropdowns.forEach(dropdowns => {
    const select = dropdowns.querySelector('.select');
    const caret = dropdowns.querySelector('.caret');
    const menu = dropdowns.querySelector('.menu');
    const options = dropdowns.querySelector('.menu li');
    const selected = dropdowns.querySelector('.selected');

    select.addEventListener('click', () => {
        select.classList.toggle('select-clicked');
        caret.classList.toggle('caret-rotate');
        menu.classList.toggle('menu-open');
    });

    Array.from(options).forEach(options => {
        options.addEventListener('click', () => {
            selected.innerText = options.innerText;
            select.classList.remove('select-clicked');
            caret.classList.remove('caret-rotate');
            menu.classList.remove('menu-open');
            options.forEach(option => {
                option.classList.remove('active');
            });
            option.classList.add('active');
        });
    });
 });



