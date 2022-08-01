window.addEventListener('DOMContentLoaded', function () {
    setTimeout(  () => {showText()}, 500);
    popUp();
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









