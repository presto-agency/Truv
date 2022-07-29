window.addEventListener('DOMContentLoaded', function () {
    setTimeout( function () {
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
                            showMore.innerHTML = 'Hide';
                            parentOfItem.classList.remove('show-text')
                        }
                    }
                }
            })
        }
    }, 500)
})






