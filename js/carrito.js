
//LOCALSTORAGE
const obtenerLs = (clave) => {
    return JSON.parse(localStorage.getItem("carrito"));
};

let carrito = obtenerLs("carrito");



//ELEMENTOS DEL CARRITO
const cardsCarrito = (array) => {
    const arrayReducido = array.reduce((acc, element) => {
            return acc +
                `
            <div class="cards-carrito" id=${element.id}>
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
                    <button class="prod-en-carrito" id=${element.id}>Quitar del carrito</button>
                </label>
            </div>
        `
            
        }, "");
        
        return arrayReducido;
    };
    
const containerCarro = document.querySelector(".contain-carrito");

containerCarro.innerHTML = cardsCarrito(obtenerLs(productos))


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
            containerCarro.innerHTML = cardsCarrito(carrito);
            quitarProductos()
        };
    });
};

quitarProductos();

console.log(productos)