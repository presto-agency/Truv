document.addEventListener('DOMContentLoaded', function () {
    let cardsBlock = document.querySelector('.cards-block');
    setIdent();
    setTimeout(  () => {showText()}, 500);
    cardsBlock?popUp(cardsBlock):null;
})

let showText = () => {
    let itemsText = document.querySelectorAll('.cards-block__side_accordion>ul')
    if(itemsText.length > 0){
        itemsText.forEach(item => {
            if(item.offsetHeight > 72){
                let itemHeight = item.offsetHeight + 'px';
                let parentOfItem= item.parentNode;
                parentOfItem.classList.add('show-text');
                let showMore = document.createElement('span');
                showMore.innerHTML = 'See more';
                parentOfItem.appendChild(showMore);
                showMore.onclick = () => {
                    if(parentOfItem.classList.contains('active')){
                        item.style.maxHeight = '';
                        parentOfItem.classList.remove('active');
                        parentOfItem.classList.add('show-text');
                        showMore.innerHTML = 'See more';
                    }
                    else {
                        parentOfItem.classList.add('active');
                        item.style.maxHeight = itemHeight;
                        showMore.innerHTML = 'See less';
                        parentOfItem.classList.remove('show-text')
                    }
                }
            }
        })
    }
}

let setIdent = () => {
    let cards = document.querySelectorAll('.cards-block__content');
    if(cards.length > 0){
        cards.forEach((card, n  )=> {
            let callBtn_1 = card.querySelector('.trigger.tab-1');
            let tab_1 = card.querySelector('.cards-block__img_tab.tab-1');
            let closeBtn_1 = card.querySelector('.sub-close.tab-1');
            let callBtn_2 = card.querySelector('.trigger.tab-2');
            let tab_2 = card.querySelector('.cards-block__img_tab.tab-2');
            let closeBtn_2 = card.querySelector('.sub-close.tab-2');
            callBtn_1.setAttribute('data-attr', `call-${2*n + 1}`);
            tab_1.setAttribute('id', `call-${2*n + 1}`);
            closeBtn_1.setAttribute('data-close', `call-${2*n + 1}`);
            callBtn_2.setAttribute('data-attr', `call-${2*n + 2}`);
            tab_2.setAttribute('id', `call-${2*n + 2}`);
            closeBtn_2.setAttribute('data-close', `call-${2*n + 2}`);
        })
    }
}

let popUp = (currentBlock) => {
    let triggersOpen = document.querySelectorAll(".trigger");
    let triggersClose = document.querySelectorAll(".sub-close");
    triggersOpen?triggersOpen.forEach((btn) =>
        btn.addEventListener("click", function () {
            let activeTab = currentBlock.querySelector(".active");
            activeTab && activeTab.classList.remove("active");
            let tabAttr = this.getAttribute("data-attr");
            document.getElementById(tabAttr).classList.add("active");
        })
    ):null;
    triggersClose?triggersClose.forEach(btnClose =>
        btnClose.addEventListener("click", function () {
            let closeTabAttr = this.getAttribute("data-close");
            document.getElementById(closeTabAttr).classList.remove("active");
        })
    ):null;
}



;
document.addEventListener('DOMContentLoaded', function () {
    let optimizedTabs = document.querySelectorAll('.optimized-tabs');
    let identPagination_1 = '.ident-1';
    let identPagination_2 = '.ident-2';
    optimizedTabs.length>0?callTabs(optimizedTabs):null;
    sliderCoverage();
    counterList(optimizedTabs);
    window.screen.width < 1024?sliderTabs(identPagination_1):null;
    window.screen.width < 1024?sliderTabs(identPagination_2):null;
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
            el: `.optimized-tabs__pagination${ident}`,
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
};











