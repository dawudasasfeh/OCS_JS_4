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


    letters.test(first.value) ?document.getElementById("errFirstName").style.display = "none" : (document.getElementById("errFirstName").style.display = "inline", isValid = false)

    letters.test(last.value) ?document.getElementById("errLastName").style.display = "none" : (document.getElementById("errLastName").style.display = "inline", isValid = false)

    const phoneRegex = /^07\d{8}$/;

    phoneRegex.test(phone.value) ? document.getElementById("errpnum").style.display = "none" : (document.getElementById("errpnum").style.display = "inline", isValid = false)

    BD.value ? (document.getElementById("errBD").style.display="inline", isValid = false) : document.getElementById("errBD").style.display="none"

    const emailRegex =/^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    emailRegex.test(email.value) ? document.getElementById("errEmail").style.display = "none" : (document.getElementById("errEmail").style.display = "inline", isValid = false)
    
    email.value ===remail.value ? document.getElementById("errrEmail").style.display = "none" : (document.getElementById("errrEmail").style.display = "inline", isValid = false)

     const passwordRegex = /^[A-Z](?=(?:.*\d){2,})(?=.*[!@#$%^&*(),.?":{}|<>_\[\]\-\+\=\/\\~`';])[A-Za-z0-9!@#$%^&*(),.?":{}|<>_\[\]\-\+\=\/\\~`';]{7,31}$/

    passwordRegex.test(pass.value) ? document.getElementById("errPassword").style.display = "none" : (document.getElementById("errPassword").style.display = "inline", isValid = false)

    pass.value ===rpass.value ? document.getElementById("errrPass").style.display = "none" : (document.getElementById("errrPass").style.display = "inline", isValid = false)

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
    }
})

log.addEventListener("submit", function(){
    
    const email = document.getElementById("email")
    const pass = document.getElementById("pass")

    const cred = JSON.parse(localStorage.getItem("registeredUser"));

     if (email === cred.email && pass === cred.pass) {
        resultBanner.style.color = "green";
        resultBanner.textContent = `Welcome back, ${savedUser.firstName}! Login Successful.`;
    } else {
        resultBanner.style.color = "red";
        resultBanner.textContent = "Login Failed: Incorrect email or password credentials.";
    }
})


