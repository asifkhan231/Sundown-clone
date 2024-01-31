

const scroll = new LocomotiveScroll({
    el: document.querySelector('.main'),
    smooth: true
});

let elemc = document.querySelector('.feature-conatainer')
let elem1 = document.querySelector('#elem-1')
let allelem = document.querySelector('.all-feature-elem')
let elems = document.querySelectorAll('.feature-elem')
let fixed = document.querySelector('.fixed-image')



allelem.addEventListener('mouseenter', () => {
    fixed.style.display = "block"
})

allelem.addEventListener('mouseleave', () => {
    fixed.style.display = 'none'
})

elems.forEach((e) => {
    e.addEventListener('mouseenter', () => {
        let bg = e.getAttribute('data-image')
        fixed.style.backgroundImage = `url(${bg})`
    })
})


let headings_h1 = document.querySelectorAll('.wraper-text-heading-h1')
console.log(headings_h1)

let heading_design = document.querySelector('#heading-design')
let heading_proj = document.querySelector('#heading-project')
let heading_exec = document.querySelector('#heading-execution')
let text_p = document.querySelector('#wraper-text-heading-info-p')
let wrap_bg = document.querySelector('.wraper-img')



heading_design.addEventListener('click', () => {
    heading_design.ariaSelected = 'true'
    heading_proj.ariaSelected = 'false'
    heading_exec.ariaSelected = 'false'
    console.log(headings_h1)
    change();
})


heading_proj.addEventListener('click', () => {
    heading_design.ariaSelected = 'false'
    heading_proj.ariaSelected = 'true'
    heading_exec.ariaSelected = 'false'
    console.log(headings_h1)
    change();
})


heading_exec.addEventListener('click', () => {
    heading_design.ariaSelected = 'false'
    heading_proj.ariaSelected = 'false'
    heading_exec.ariaSelected = 'true'
    console.log(headings_h1)
    change();
})

function change() {
    for (let i = 0; i < headings_h1.length; i++) {
        console.log(headings_h1[i].ariaSelected)
        if (headings_h1[i].ariaSelected === 'true') {
            headings_h1[i].style.color = 'White'
            let pera = headings_h1[i].getAttribute('data-p')
            let head_img = headings_h1[i].getAttribute('data-image')
            text_p.textContent = pera;
            wrap_bg.style.backgroundImage = `url(${head_img})`

        } else {
            headings_h1[i].style.color = 'rgb(98, 98, 98)'
        }
    }

}

change()


function swiperAnimation() {
    if (window.innerWidth <= 500) {
        var swiper = new Swiper(".mySwiper", {
            slidesPerView: 2,
            spaceBetween: 50,
        });
       
    }

    else if (window.innerWidth <= 850) {
        var swiper = new Swiper(".mySwiper", {
            slidesPerView: 3,
            spaceBetween: 50,
            // centeredSlides: true,
        });
        // window.reload()
    } else {
        var swiper = new Swiper(".mySwiper", {
            slidesPerView: 3.5,
            spaceBetween: 50,
            // centeredSlides: true,
        });
    }
}

swiperAnimation()

let menu = document.querySelector('.menu')
let logo = document.querySelector('#logo')
let fullScr = document.querySelector('.full-scr')
let body = document.body

let flag = 0
menu.addEventListener('click', () => {
    if (flag == 0) {
        fullScr.style.top = 0;
        logo.style.opacity = 0;
        body.style.overflowY = 'hidden';
        flag = 1
    }
    else {
        fullScr.style.top = "-100%";
        logo.style.opacity = 1;
        body.style.overflowY = auto;
        flag = 0
    }
})


let loader = document.querySelector('.loader')

setTimeout(() => {
    loader.style.top = "-100%"
}, 4000)


let list = document.querySelector('.list')
let li = document.createElement('li')
li.textContent = 'Aaron Smith'

list.append('li')