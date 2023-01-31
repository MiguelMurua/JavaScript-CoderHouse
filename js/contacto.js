

const email = document.querySelector("#correo");

const tomamosEmail = email.value;

function validarCorreo (){

    for (let i=0; i<tomamosEmail.length; i++){
        if ( tomamosEmail[i].length === "@"){
            console.log(tomamosEmail[i])
        }
        else{
            console.log("tomamosEmail")
        }
    }
    
}
validarCorreo()