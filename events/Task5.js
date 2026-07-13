const fontsize = document.getElementById("fs")

for(let i =1; i<=90 ; i++){
    const option = document.createElement("option")
    option.value=`${i}px`
    option.innerHTML=`${i}px`

    fontsize.appendChild(option)
}


const ff = document.getElementById("fontfamily")
const fs = document.getElementById("fontsize")
const it = document.getElementById("it")
const b = document.getElementById("b")
const ul = document.getElementById("ul")
const inp = document.getElementById("in")

console.log(inp)

ff.addEventListener("change",function (){
    ff.value ? inp.style.fontFamily=ff.value : inp.style.fontFamily=""
})
fs.addEventListener("change",function (){
    fs.value ? inp.style.fontSize=fs.value : inp.style.fontsize=""
})
it.addEventListener("change",function (){
    it.checked  ? inp.style.fontStyle = "italic": inp.style.fontStyle =""
})
b.addEventListener("change",function (){
    b.checked  ? inp.style.fontWeight="bold" :inp.style.fontWeight=""
})
ul.addEventListener("change",function (){
     ul.checked  ? inp.style.textDecoration="underline" : inp.style.textDecoration=""
})
ff.addEventListener("change",function (){
    inp.style.fontFamily=ff
})


