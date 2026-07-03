const email_usuario = "javier@gmail.com";
const pass_usuario = "pass1234";
const regex_mail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

/*

id = "formLogin"

id = "floatingInput"

id = "floatingPassword"

*/

let btn_submit = document.getElementById("btn-submit");

btn_submit.addEventListener('click', function(event){

    event.preventDefault();

    console.log("Pulsaste el botton");

    const form_email = document.getElementById("floatingInput").value;
    const form_pass = document.getElementById("floatingPassword").value;
    const errores = [];

    document.getElementById("imgLogo").src = "../assets/brand/bootstrap-logo.svg";
    document.getElementById("tAlerta").textContent = "";
    document.getElementById("aError").classList.add("d-none");

    console.log(form_email);
    console.log(form_pass);
    
    if(form_email === ""){

        document.getElementById("imgLogo").src = "../assets/brand/alert.jpg";
        
        document.getElementById("tAlerta").textContent = "El campo email es obligatorio";
        
        document.getElementById("aError").classList.remove("d-none");
        
        errores.push("El campo email es obligatorio");
    
    }else if(!regex_mail.test(form_email)){

        document.getElementById("imgLogo").src = "../assets/brand/alert.jpg";
        
        document.getElementById("tAlerta").textContent = "El mail debe tener el formato alguien@example.com";
        
        document.getElementById("aError").classList.remove("d-none");

        errores.push("El mail debe tener el formato alguien@example.com");

    }else if(form_email != email_usuario){
        
        document.getElementById("imgLogo").src = "../assets/brand/alert.jpg";
        
        document.getElementById("tAlerta").textContent = "El mail ingresado no coincide";
        
        document.getElementById("aError").classList.remove("d-none");
        
        errores.push("El mail ingresado no coincide");

    }else if(form_pass === ""){

        document.getElementById("imgLogo").src = "../assets/brand/alert.jpg";
        
        document.getElementById("tAlerta").textContent = "El campo password es obligatorio";
        
        document.getElementById("aError").classList.remove("d-none");

        errores.push("El campo password es obligatorio");

    }else if(form_pass != pass_usuario){

        document.getElementById("imgLogo").src = "../assets/brand/alert.jpg";
        
        document.getElementById("tAlerta").textContent = "El password ingresado no coincide";
        
        document.getElementById("aError").classList.remove("d-none");
        
        errores.push("El password ingresado no coincide");

    }

    if(errores.length === 0){

        //window.location.href = "";
        console.log("Entre");
    }

});