//LOCALSTORAGE
const obtenerLs = (clave) => {
    return JSON.parse(localStorage.getItem(clave));
};

let carrito = obtenerLs("carrito");

const containerCarro = document.querySelector(".contain-carrito");


//ELEMENTOS DEL CARRITO
const cardsHtml = (array) => {
    const arrayReducido = array.reduce(
        (acc, element) => {
            return (
                acc +
                `
            <div class="prod-en-carrito" id=${element.id}>
                <div class="card-img">
                    <img src=${element.img} alt=${element.producto}>
                </div>
                <h2>
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
                    <button class="button-carrito" id=${element.id}>Quitar del carrito</button>
                </label>
            </div>
        `
            );
        }, "");
        
        return arrayReducido;
};

containerCarro.innerHTML = cardsHtml(productos)


//EVENTO PARA ELIMINAR OBJETOS DEL CARRITO
const quitarProductos = () => {
    const productoCarrito = document.querySelectorAll(".prod-en-carrito");
    productoCarrito.forEach((element) => {
        element.onclick = () => {
            const recortar = element.id;
            carrito = carrito.filter((filtrado) => {
                return filtrado.id != recortar;
            });
            localStorage.setItem("carrito", JSON.stringify(carrito));
            containerCarro.innerHTML = cardsHtml(carrito);
            quitarProductos()
        };
    });
};

quitarProductos();

