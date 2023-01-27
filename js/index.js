let carrito = []
const containerCards = document.querySelector(".container-cards")


//LISTA DE PRODUCTOS
const cardsHtml = (array) => {

    const arrayReducido = array.reduce((acc, element) => {
        return acc + `
            <div class="cards" id=${element.id}>
                <div class="card-img">
                    <img src=${element.img} alt=${element.producto}>
                </div>
                <h2 class="nombreProducto">
                    ${element.producto}
                </h2>
                <br>
                <h3>
                    ${element.descripcion}
                </h3>
                <br>
                <h3>
                    ${"Precio: $" + element.precio}
                </h3>
                <br>
                <label>
                    <button class="button-carrito" id=${element.id}>Agregar al carrito</button>
                </label>
            </div>
        `
    }, "")
    return arrayReducido
}

containerCards.innerHTML = cardsHtml(productos)

const aLocalStorage = (clave, valor) => {
    return localStorage.setItem(clave, JSON.stringify(valor))
}

const pushAlArray = (array, value) => {
    array.push(value)
}


const obtenerLs = (clave) => {
    return JSON.parse(localStorage.getItem("clave"))
}

//EVENTO PARA AGREGAR PRODUCTOS AL CARRITO
const anadirAlCarrito = () => {
    const buttonsCards = document.querySelectorAll(".button-carrito")
    buttonsCards.forEach(button => {
        button.onclick = () => {
            const buscarProducto = productos.find(producto => {
                return producto.id === Number(button.id)
            })
            pushAlArray(carrito, buscarProducto)
            aLocalStorage("carrito", carrito)
        }
    })
}



anadirAlCarrito()

const carritoActual = JSON.parse(localStorage.getItem("carrito")) || []
carrito = carritoActual
