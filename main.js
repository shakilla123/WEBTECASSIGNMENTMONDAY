const container = document.getElementById("container");
const toggleButton = document.getElementById("register");
const logButton = document.getElementById("login");
const signInForm = document.querySelector(".sign-in");
const signUpForm = document.querySelector(".sign-up");
const forgotPwd = document.getElementById("forgot-password");


toggleButton.addEventListener("click", () => {
  container.classList.toggle("active");
  signUpForm.classList.toggle("active");
  signInForm.classList.toggle("active");
});

logButton.addEventListener("click", () => {
    container.classList.toggle("active");
    signUpForm.classList.toggle("active");
    signInForm.classList.toggle("active");
  });
  
// Validation

const name = document.getElementById("name");
const email = document.getElementById("email-signup");
const password = document.getElementById("password-signup");
const btn = document.querySelector('.btn');
const error = document.querySelector('.error');

btn.addEventListener("click", () => {
  if(name.value !== "" && email.value !== "" && password.value !== "") {
    console.log("Success")
  }else {
    error.style.display  = "block"
    error.textContent = "Please fill the field"
    console.log("clicked")

    setTimeout(() => {
      error.style.display =" none";
    },3500)
  }
})

// Sign in validation js

const emailSignin = document.getElementById("email-signin");
const passwordSignin = document.getElementById("password-signin");
const btnSignin = document.querySelector(".btnSign");
const errorSign = document.querySelector(".errorSign");

btnSignin.addEventListener("click", () => {
  if(emailSignin.value !== "" && passwordSignin.value !== ""){
    if(passwordSignin.value.length >= 5 ) {
      console.log("Success")
      errorSign.style.display= 'NONE'
      emailSignin.value = "";
      passwordSignin.value = "";
    }else {
      console.log(passwordSignin.value.length)
      errorSign.style.display  = "block"
  errorSign.innerHTML = "Password is less than 5";
    console.log("Clicked")
    setTimeout(() => {
      errorSign.style.display =" none";
    },3500)
    }
  // set the location to the redirect path (Dashboard)
  }else {
    errorSign.style.display  = "block"
  errorSign.innerHTML = "Please fill the field";
    console.log("Clicked")
    setTimeout(() => {
      errorSign.style.display =" none";
    },3500)
  }
})

