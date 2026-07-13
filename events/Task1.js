const gret = document.getElementById("greeting")

console.log(gret)

gret.addEventListener("mouseover",function(){
    gret.style.background="yellow"
    gret.style.fontWeight="bold"
})


gret.addEventListener("mouseout",function(){
    gret.style.background=""
    gret.style.fontWeight=""
})
