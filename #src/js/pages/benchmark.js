document.addEventListener('DOMContentLoaded', function () {
    let optimizedTabs = document.querySelector('.optimized-tabs');
    optimizedTabs?callTabs(optimizedTabs):null;
    sliderCoverage();
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

let callTabs = (optimizedTabs)=>{
    let elementsLink = document.querySelectorAll('.trigger');
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
}