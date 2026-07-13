const country = document.getElementById("country")


const jo = document.getElementById("jo")
const sa = document.getElementById("sa")
const sy = document.getElementById("sy")

let val = 'jo'
jo.style.display="block"

country.addEventListener("change", function(){
    val = country.value

    console.log(country.value)

    if(val == "jo"){
        jo.style.display="block"
        sa.style.display="none"
        sy.style.display="none"
    }

    
    if(val == "sa"){
        jo.style.display="none"
        sa.style.display="block"
        sy.style.display="none"
    }
    
    if(val == "sy"){
        jo.style.display="none"
        sa.style.display="none"
        sy.style.display="block"
    }
    
})


