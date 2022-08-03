document.addEventListener('DOMContentLoaded', function () {
    setIdent();
    setTimeout(  () => {showText()}, 500);
    popUp();
    sliderCoverage();
})

let popUp = () => {
    document.querySelectorAll(".trigger").forEach((btn) =>
        btn.addEventListener("click", function () {
            let activeTab = document.querySelector(".cards-block__img_tab.active");
            activeTab && activeTab.classList.remove("active");
            let tabAttr = this.getAttribute("data-attr");
            document.getElementById(tabAttr).classList.add("active");
        })
    ),
        document.querySelectorAll(".sub-close").forEach((btnClose) =>
            btnClose.addEventListener("click", function () {
                let closeTabAttr = this.getAttribute("data-close");
                document.getElementById(closeTabAttr).classList.remove("active");
            })
        );
}

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










