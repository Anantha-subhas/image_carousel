const buttons = document.querySelectorAll("[data-carousel-btn]");

buttons.forEach(btn =>{
btn.addEventListener("click",() => {
    //btn.dataset enable attrib .carouselbtn (refers attrib's value)
    const offset = btn.dataset.carouselbtn === "next" ? 1 : -1;
    //btn nearby parent data-carousel to select all ul slides
    const  slides = btn.closest("[data-carousel]").querySelector("[data-slides]");//ul
    const activeSlide = slides.querySelector("[data-active]");
    //[...slides.chilred] = [li,li,li,li....].indexOf(0)
    // active slide = 0 , 0 + offset = 1
    //offset play important role it increment +1 when click next btn if not we clicked(prev) -1
    //activeSlide remains constant
    // without spread operator const currentIndex = Array.from(slides.children).indexOf(activeSlide);

    let newIndex = [...slides.children].indexOf(activeSlide) + offset 
    if (newIndex < 0){
        //what if we initially clicked prev in initial state
        //it goes back from 0 to -1 as we set it btn.prev = -1
        newIndex = slides.children.length - 1;
    }
    if (newIndex >= slides.children.length){
        newIndex = 0;
    }
    // set current img to active after the each operation
    // in html 2nd, 3rd... has no data_attrib it set to true like something is there
    slides.children[newIndex].dataset.active = true; // data-active and now newIndex calculates current active slide
    //delete current active slide slide
    delete activeSlide.dataset.active

    /**!!!NOTE
     * it add data-active to current img with opacity 1 to show
     * other are in opacity 0
     * go check on css
     * that how this line works
     *  slides.children[newIndex].dataset.active = true;
     */
})
})