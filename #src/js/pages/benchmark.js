document.addEventListener('DOMContentLoaded', function () {
    let optimizedTabs = document.querySelector('.optimized-tabs');
    optimizedTabs?callTabs(optimizedTabs):null;
    sliderCoverage();
    counterList();
    window.screen.width < 1024?sliderTabs():null;
})

let sliderCoverage = () => {
    let slider = document.querySelector('.coverage__swiper');
    slider?new Swiper('.coverage__swiper', {
        slidesPerView: 1,
        slidesPerGroup: 1,
        grabCursor: true,
        speed: 500,
        loop: true,
        spaceBetween: 32,
        centeredSlides: true,
        breakpoints: {
            1024: {
                slidesPerView: 3,
                centeredSlides: false,
            }
        }
    }): null;
}

let sliderTabs = () => {
    let slider = document.querySelector('.optimized-tabs__swiper');
    slider?new Swiper('.optimized-tabs__swiper', {
        slidesPerView: 1,
        slidesPerGroup: 1,
        speed: 500,
        spaceBetween: 32,
        pagination: {
            el: '.optimized-tabs__pagination',
            type: 'bullets',
        },
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
    }): null;
}

let callTabs = (optimizedTabs)=>{
    let elementsLink = document.querySelectorAll('.trigger');
    window.screen.width >= 1024?
        elementsLink.forEach(link => link.addEventListener('click', function () {
        let attr = this.getAttribute('data-attr');
        const activeLink = optimizedTabs.querySelectorAll('.active');
        let subWindow = document.getElementById(attr);
        activeLink.forEach(active => {
            active.classList.remove('active');
        })
        subWindow.classList.add('active');
        link.classList.add('active');
    }))
        :null;
}

let counterList = () => {
    let numbers = document.querySelectorAll('.optimized-tabs__list>li>p>b');
    if(numbers.length>0){
        for(let i = 0; i < numbers.length; i++){
            numbers[i].innerHTML = `${i + 1}.`;
        }
    }
}