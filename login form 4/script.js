function eyeClosed(id, passwordId) {
    let eye = document.getElementById(id);
    let pass = document.getElementById(passwordId);

    eye.addEventListener("click", () => {
        if (pass.type == "password") {
            eye.setAttribute("class", "ri-eye-line");
            pass.setAttribute("type", "text");
        } else {
            eye.setAttribute("class", "ri-eye-off-fill");
            pass.setAttribute("type", "password");
        }
    })
}

eyeClosed("eye","password");
eyeClosed("eye1","password-sec");

const lar = document.getElementById("loginAccessReg");
let loginBtn = document.getElementById("login");
let regBtn = document.getElementById("cAcc");

regBtn.addEventListener("click",()=>{
    lar.classList.add("active");
})

loginBtn.addEventListener("click",()=>{
    lar.classList.remove("active");
})


