const email_usuario = "javier@gmail.com";
const pass_usuario = "pass1234";
const regex_mail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

/*

id = "btn-submit"

id="floatingInput"

id="floatingPassword"

*/

let boton_submit = document.getElementById("btn-submit");

boton_submit.addEventListener('click', function(event){

    console.log("Pulsaste el botton");

    const form_email = document.getElementById("floatingInput").value;
    const form_pass = document.getElementById("floatingPassword").value;
    const errores = [];

    console.log(form_email);
    console.log(form_pass);
    
    if(form_email === ""){

        console.log("El campo email es obligatorio")
        errores.push("El campo email es obligatorio");
    
    }

    if(form_pass === ""){

        console.log("El campo password es obligatorio");
        errores.push("El campo password es obligatorio");

    }

    if(!regex_mail.test(form_email)){

        console.log("El mail debe tener el formato alguien@example.com");
        errores.push("El mail debe tener el formato alguien@example.com");

    }

    if(form_email != email_usuario){
        
        console.log("El mail ingresado no coincide");
        errores.push("El mail ingresado no coincide");

    }
    if(form_pass != pass_usuario){

        console.log("El password ingresado no coincide");
        errores.push("El password ingresado no coincide");

    }

    if(errores.length() > 0){

        console.log("Tai tapao en errores");
        //event.preventDefault();

    
    }else{

        

    }

});