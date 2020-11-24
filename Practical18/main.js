const form=document.getElementById("form");
const username=document.getElementById("username");
const email=document.getElementById("email");
const password1=document.getElementById("password1");
const password2=document.getElementById("password2");


form.addEventListener("submit",function(e){
    e.preventDefault();
    checkInputs();
});

function checkInputs(){
    const usernamevalue=username.value.trim();
    const emailvalue=email.value.trim();
    const password1value=password1.value.trim();
    const password2value=password2.value.trim();



    if(usernamevalue ===""){
        showError(username,"Username cannot be blank");
    }
    else{
        showSuccess(username);
    }
    if(emailvalue ===""){
        showError(email,"email cannot be blank");
    }
    else if(!isEmailValid(emailvalue)){
        showError(email,"email is not valid");
    }
    else{
        showSuccess(email);
    }
    if(password1value ===""){
        showError(password1,"password cannot be blank");
    }
    else{
        showSuccess(password1);
    }
    if(password2value ===""){
        showError(password2,"password cannot be blank");
    }
    else if(password2value!=password1value){
        showError(password2,"password doesn't match");
    }
    else{
        showSuccess(password2);
    }


    
}
function isEmailValid(email){
    return /^([a-zA-Z0-9_\-]+)@([a-zA-Z0-9]+)\.([a-zA-z]{2,3})$/.test(email);
}

function showError(input,msg){
    const formControl = input.parentNode;
    formControl.className = "form-control error";
    const small=formControl.querySelector("small");
    small.innerHTML = msg;
}
function showSuccess(input){
    const formControl = input.parentNode;
    formControl.className = "form-control success";
}
