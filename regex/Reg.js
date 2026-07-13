const reg = document.getElementById("reg")
const log = document.getElementById("login")

reg.addEventListener("submit",function (e){
    e.preventDefault(); 

    const first = document.getElementById("first")
    const last = document.getElementById("last")
    const phone = document.getElementById("pnum")
    const BD = document.getElementById("bd")
    const email = document.getElementById("email")
    const remail = document.getElementById("remail")
    const pass = document.getElementById("pass")
    const rpass = document.getElementById("rpass")

    let isValid = true;

    const letters = /^[A-Za-z]+$/
    
    if (letters.test(first.value)) {
        document.getElementById("errFirstName").style.display = "none"
    } else {
        document.getElementById("errFirstName").style.display = "inline"
        isValid = false
    }

    if (letters.test(last.value)) {
        document.getElementById("errLastName").style.display = "none"
    } else {
        document.getElementById("errLastName").style.display = "inline"
        isValid = false
    }

    const phoneRegex = /^07\d{8}$/;

    if (phoneRegex.test(phone.value)) {
        document.getElementById("errpnum").style.display = "none"
    } else {
        document.getElementById("errpnum").style.display = "inline"
        isValid = false
    }

    if (BD.value) {
        document.getElementById("errBD").style.display = "none"
    } else {
        document.getElementById("errBD").style.display = "inline"
        isValid = false
    }

    const emailRegex =/^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (emailRegex.test(email.value)) {
        document.getElementById("errEmail").style.display = "none"
    } else {
        document.getElementById("errEmail").style.display = "inline"
        isValid = false
    }
    
    if (email.value === remail.value) {
        document.getElementById("errrEmail").style.display = "none"
    } else {
        document.getElementById("errrEmail").style.display = "inline"
        isValid = false
    }

    const passwordRegex = /^[A-Z](?=(?:.*\d){2,})(?=.*[!@#$%^&*(),.?":{}|<>_\[\]\-\+\=\/\\~`';])[A-Za-z0-9!@#$%^&*(),.?":{}|<>_\[\]\-\+\=\/\\~`';]{7,31}$/

    if (passwordRegex.test(pass.value)) {
        document.getElementById("errPassword").style.display = "none"
    } else {
        document.getElementById("errPassword").style.display = "inline"
        isValid = false
    }

    if (pass.value === rpass.value) {
        document.getElementById("errrPass").style.display = "none"
    } else {
        document.getElementById("errrPass").style.display = "inline"
        isValid = false
    }

    if (isValid) {
        const userData = {
            firstName: first.value,
            lastName: last.value,
            birthDate: BD.value,
            mobile: phone.value,
            email: email.value,
            password: pass.value
        };
       
        localStorage.setItem("userCredentials", JSON.stringify(userData));
        alert("User cred saved")
    }
})

