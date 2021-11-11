const arrows = document.querySelectorAll(".arrow");
const movieLists = document.querySelectorAll(".movie-list");

arrows.forEach((arrow, i) =>{
    const itemNumber = movieLists[i].querySelectorAll("img").length;
    let counter = 0;
    arrow.addEventListener("click", ()=>{
        counter++;
        if(itemNumber - (Math.floor(window.innerWidth/270)+counter) >= 0){
            movieLists[i].style.transform = `translateX(${movieLists[i].computedStyleMap().get("transform")[0].x.value - 300 
            }px)`
        }else{
            movieLists[i].style.transform = "translateX(0)";
            counter = 0;
        }
       
    })
})

const toggle = document.querySelector(".toggle-ball");
const items = document.querySelectorAll(".container,.movie-list-title,.navbar-container,.sidebar,.left-menu-icon,.toggle");
toggle.addEventListener("click",()=>{
    items.forEach(item => {
        item.classList.toggle("active");
    })
    toggle.classList.toggle("active");
})