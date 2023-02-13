

fetch("https://63d805b0afbba6b7c9493f6c.mockapi.io/usuario/users")
.then( res => res.json())
.then( data => console.log(data))

const form = document.querySelector("#alta-registro")
const usuario = document.querySelector("#username")
const email = document.querySelector("#email")
const contrasenia = document.querySelector("#password")

form.onsubmit = (e) => {
    e.preventDefault()

    fetch("https://63d805b0afbba6b7c9493f6c.mockapi.io/usuario/users",{
        method: "POST",
        body: JSON.stringify({
            usuario: usuario.value,
            email: email.value,
            contrasenia: contrasenia.value,
        }),
        headers: {
            "Content-type":"application/json"
        }
    })
    .then( res => res.json())
    .then( data => console.log(data))

    swal({
        title: "Cuenta creada con exito!",
        icon: "success",
        button: "Ok",
    });

    form.reset()
}

// const validarCuenta = () =>{
    
//     fetch("https://63d805b0afbba6b7c9493f6c.mockapi.io/usuario/users",{
//         method: "GET",
        
//     }
//     )

// }
