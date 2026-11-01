let Mail = document.getElementById("E-Mail")
let password = document.getElementById("Password-Id");
let mailError = document.getElementById("email-error");
let passwordError = document.getElementById("password-error");
let submit = document.getElementById("Submit-btn");
let CorrectValidation = document.getElementById("allgood") 

let stylefn = () => {
    mailError.style.color = "red";
    passwordError.style.color = "red"
    CorrectValidation.style.color = "green"
}

function detialsvalidation(){
    let MailPattern = /^[a-zA-Z0-9]+@gmail\.com$/i;
    let passwordpattern = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d+)(?=.*[!@#$%^&*])[a-zA-Z\d!@#$%^&*]{8,}$/g;
    if(Mail.value === ""){
        mailError.innerHTML = "";
        passwordError.innerHTML = "";
    }

    stylefn()


    Mail.addEventListener("input" , () => {
        Mail.value === "" ? mailError.innerHTML = "Make sure email is more than 3 characters and has @ and a." : "" 
       
    })
    password.addEventListener("input" , () => {
      password.value === "" ?  passwordError.innerHTML = "Make sure password is more than 8 characters." : ""
    })
   
   
  

    submit.addEventListener("click" , () => {
        if(Mail.value === "" && password.value === ""){
            alert("Enter The Email and Password Before Submitting")
            mailError.innerHTML = ""
        }
        else if(!MailPattern.test(Mail.value) && !passwordpattern.test(password.value)){
             mailError.innerHTML = "Enter Valid E-Mail!";
        }
        else{
            CorrectValidation.innerHTML = "All good to go"
        }
        
    })
}


detialsvalidation()