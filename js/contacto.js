
const nombre = document.getElementById("user-name")
const email = document.getElementById("user-correo")
const direccion = document.getElementById("user-direccion")
const form = document.getElementById("form-contact")
const mensaje = document.getElementById("mensaje")
const boton = document.getElementById("button-contact")


const validarCampoVacio = (e) => {
    const field = e.target;
    const fieldValue = e.target.value;
    if (fieldValue.trim().length === 0){
        field.classList.add ("invalid")
        field.nextElementSibling.classList.add("error")
        field.nextElementSibling.innerText = `${field.name} es requerido`
    } else {
        field.classList.remove("invalid")
        field.nextElementSibling.classList.remove("error")
        field.nextElementSibling.innerText = ""
    }
}

const validarEmail = (e) =>{
    const field = e.target;
    const fieldValue = e.target.value
    const regex = new RegExp(/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/);
    if (fieldValue.trim().length > 4 && !regex.test(fieldValue)){
        field.classList.add ("invalid")
        field.nextElementSibling.classList.add("error")
        field.nextElementSibling.innerText = `no es un ${field.name} valido`
    } else {
        field.classList.remove("invalid")
        field.nextElementSibling.classList.remove("error")
        field.nextElementSibling.innerText = ""
    }
}


nombre.addEventListener ("blur", validarCampoVacio)
email.addEventListener ("blur", validarCampoVacio)
direccion.addEventListener ("blur", validarCampoVacio)
mensaje.addEventListener ("blur", validarCampoVacio)

email.addEventListener("input", validarEmail)


