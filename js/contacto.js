
const nombre = document.getElementById("user-name")
const email = document.getElementById("user-correo")
const direccion = document.getElementById("user-direccion")
const form = document.getElementById("form-contact")
const mensaje = document.getElementById("mensaje")


const validarForm = ()=>{

    form.addEventListener("submit", e=>{
        e.preventDefault()
        let regexEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/
        if( nombre.value === "" ){
            alert("no ah ingresado ningun nombre")
        }
        else if( nombre.value.length <6 ){
            alert("Nombre demasiado corto")
        }
        
        if( regexEmail.test(email.value) === true){
            
        }
        else if ( regexEmail.test(email.value) === false){
            swal({
                title: "No ha ingresado un Email",
                icon: "error",
                button: "Ok",
            });
        }

        form.reset()
    })

}

validarForm()

