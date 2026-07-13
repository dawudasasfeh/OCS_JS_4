
const log = document.getElementById("login")

log.addEventListener("submit", function(e){
    e.preventDefault();
    console.log("ok")
    const email = document.getElementById("email")
    const pass = document.getElementById("pass")

    const cred = JSON.parse(localStorage.getItem("userCredentials"));

    if (email.value === cred.email && pass.value === cred.password) {
        alert("Login Successful.");
    } else {
        alert("Login Failed: Incorrect email or password credentials.");
    }
})
