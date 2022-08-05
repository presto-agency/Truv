document.addEventListener('DOMContentLoaded', function () {
    let optimizedTabs = document.querySelectorAll('.optimized-tabs');
    let identPagination_1 = '.ident-1';
    let identPagination_2 = '.ident-2';
    optimizedTabs.length>0?callTabs(optimizedTabs):null;
    sliderCoverage();
    counterList(optimizedTabs);
    window.screen.width < 1024?sliderTabs(identPagination_1):null;
    window.screen.width < 1024?sliderTabs(identPagination_2):null;
    sliderIndustry();
    sliderClients();
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

let sliderTabs = (ident) => {
    let slider = document.querySelector(`.optimized-tabs__swiper${ident}`);
    slider?new Swiper(`.optimized-tabs__swiper${ident}`, {
        slidesPerView: 1,
        slidesPerGroup: 1,
        speed: 500,
        spaceBetween: 32,
        pagination: {
            el: `.pagination${ident}`,
            type: 'bullets',
        },
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
    }): null;
}

let callTabs = (optimizedTabs)=>{
    optimizedTabs.forEach(optimizedTab => {
        let elementsLink = optimizedTab.querySelectorAll('.trigger');
        window.screen.width >= 1024?
            elementsLink.forEach(link => link.addEventListener('click', function () {
                let attr = this.getAttribute('data-attr');
                const activeLink = optimizedTab.querySelectorAll('.active');
                let subWindow = optimizedTab.querySelector(`#${attr}`);
                activeLink.forEach(active => {
                    active.classList.remove('active');
                })
                subWindow.classList.add('active');
                link.classList.add('active');
            }))
            :null;
    })
}

let counterList = (sections) => {
    sections.forEach(section => {
        let numbers = section.querySelectorAll('.optimized-tabs__list.counting>li>p>b');
        if(numbers.length>0){
            for(let i = 0; i < numbers.length; i++){
                numbers[i].innerHTML = `${i + 1}.`;
            }
        }
    })
}

let sliderIndustry = () => {
    let slider = document.querySelector('.benchmark-industry__swiper');
    slider?new Swiper('.benchmark-industry__swiper', {
        slidesPerView: 1,
        slidesPerGroup: 1,
        speed: 500,
        spaceBetween: 32,
        pagination: {
            el: '.benchmark-industry__pagination',
            type: 'bullets',
        },
        breakpoints: {
            1024: {
                slidesPerView: 2,
            }
        }
    }): null;
}

let sliderClients = () => {
    let slider = document.querySelector('.benchmark-industry__swiper');
    slider?new Swiper('.our-clients__swiper', {
        slidesPerView: 1,
        slidesPerGroup: 1,
        speed: 500,
        spaceBetween: 32,
        grabCursor: true,
        pagination: {
            el: '.our-clients__pagination',
            type: 'bullets',
        },
    }): null;
}