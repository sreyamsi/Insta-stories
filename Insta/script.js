let currentScrollPosition=0;
        let scrollAmount=320;
        const sCount=document.querySelector(".storys-container");
        const hScroll=document.querySelector(".horizantal-scroll");
        const btnScrollLeft=document.querySelector("#btn-scroll-left");
        const btnScrollRight=document.querySelector("#btn-scroll-right");
        btnScrollLeft.style.opacity="0";
        let maxScroll= -sCount.offsetWidth + hScroll.offsetWidth;
        function scrollHorizantally(val){
            currentScrollPosition+=(val * scrollAmount);
            if(currentScrollPosition >= 0){
                currentScrollPosition=0;
                btnScrollLeft.style.opacity="0";
            }
            else{
                btnScrollLeft.style.opacity="1";
            }
            if(currentScrollPosition <= maxScroll){
                currentScrollPosition=maxScroll;
                btnScrollRight.style.opacity="0";
            }
            else{
                btnScrollRight.style.opacity="1";
            }
            sCount.style.left=currentScrollPosition+"px";
        }