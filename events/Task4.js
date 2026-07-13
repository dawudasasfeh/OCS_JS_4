const cards=document.querySelectorAll(".card")

cards.forEach(element => {
    element.querySelector(".show").addEventListener("click", function () {
        element.querySelector("a").style.display="none"
        element.querySelector(".content").style.display='block'


    })
    
});


cards.forEach(element => {
    element.querySelector(".hide").addEventListener("click", function () {
        element.querySelector("a").style.display="block"
        element.querySelector(".content").style.display='none'


    })
    
});