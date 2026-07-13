const pass = document.getElementById("pass")
const repass = document.getElementById("repass")
const topass = document.getElementById("toPass")
const torepass = document.getElementById("toRePass")


pass.addEventListener("change",function (){
    if(pass.value.length < 6){
        topass.style.visibility="visible"
    }

    else
        topass.style.visibility=""
    
    if(pass.value !== repass.value){
        torepass.style.visibility="visible"
    }
    else
        torepass.style.visibility=""
})

repass.addEventListener("change",function (){
    if(pass.value !== repass.value){
        torepass.style.visibility="visible"
    }
    else
        torepass.style.visibility=""
})