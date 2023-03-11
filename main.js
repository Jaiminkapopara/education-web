//change navbar style color

window.addEventListener('scroll', () => {
    document.querySelector('nav').classList.toggle('window-scroll', window.scrollY > 0)
})



//show / hide faq answer

const faqs = document.querySelectorAll('.faq')

faqs.forEach((faq) => {
    faq.addEventListener('click', () => {
        faq.classList.toggle('open')


        //change icon
        const icon = faq.querySelector('.faq_icon i')
        if(icon.className === 'uil uil-plus'){
            icon.className = 'uil uil-minus'
        }else {
            icon.className = 'uil uil-plus'
        }
    })
})



// swiper

var swiper = new Swiper(".mySwiper", {
    slidesPerView: 3,
    spaceBetween: 30,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    breakpoints: {
        600: {
            slidesPerView: 2
        },

        100: {
            slidesPerView: 1
        }
    }
  });







// show / hide nav menu

const menu = document.querySelector('.nav_menu')
const menuBtn = document.querySelector('#open-menu-btn')
const closeBtn = document.querySelector('#close-menu-btn')

menuBtn.addEventListener('click', () => {
    menu.style.display = 'flex';
    closeBtn.style.display = 'inline-block';
    menuBtn.style.display = 'none'
})

closeBtn.addEventListener('click', () => {
    menu.style.display = 'none';
    closeBtn.style.display = 'none';
    menuBtn.style.display = 'inline-block'
})