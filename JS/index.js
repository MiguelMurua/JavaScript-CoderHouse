
// CASO ECOMMERCE

// * TODO TIENEN QUE ESTAR DENTRO DE FUNCIONES

// * LA ÚNICA VARIABLE GLOBAL VA A SER LA DEL ARRAY

// * EL ARRAY DE OBJETOS PUEDE ESTAR EN EL MISMO CÓDIGO O EN OTRO ARCHIVO
// 1) Hacer un array de objetos que tenga 15 productos. Cada objeto deberá tener las siguientes propiedades:

// - id –> number

// - producto –> nombre del producto

// - precio –> number

// - fechaVencimiento (en el caso de que tenga una) —> string

// - descripción –> string

// - categoría (si tiene una) —> string

// - oferta (booleano) –> true o false

// Quiero que algunos de los elementos tengan un true en oferta.

let productos = [{
    producto : "leche",
    id: 1,
    precio: 240,
    fechaVencimiento: "03/01/2023",
    descripcion: "Leche entera",
    categoria: "A",
    oferta: true
},
{
    producto : "pan",
    id: 2,
    precio: 250,
    fechaVencimiento: "01/01/2023",
    descripcion: "Pan de papa",
    categoria: "B",
    oferta: false
},
{
    producto : "manteca",
    id: 3,
    precio: 300,
    fechaVencimiento: "04/01/2023",
    descripcion: "a base de grasa de cerdo",
    categoria: "A",
    oferta: true
},
{
    producto : "coca",
    id: 4,
    precio: 450,
    fechaVencimiento: "10/01/2023",
    descripcion: "CocaCola Sabor Original",
    categoria: "C",
    oferta: false
},
{
    producto : "queso",
    id: 5,
    precio: 400,
    fechaVencimiento: "07/01/2023",
    descripcion: "Hecho con la mejor leche de vaca",
    categoria: "A",
    oferta: true
},
{
    producto : "azucar",
    id: 6,
    precio: 150,
    fechaVencimiento: "10/06/2023",
    descripcion: "Azucar blanca",
    categoria: "D",
    oferta: false
},
{
    producto : "milanesas",
    id: 7,
    precio: 750,
    fechaVencimiento: "08/01/2023",
    descripcion: "Hechas con carne de vaca",
    categoria: "E",
    oferta: true
},
{
    producto : "harina",
    id: 8,
    precio: 200,
    fechaVencimiento: "04/12/2023",
    descripcion: "Trigo 0000",
    categoria: "B",
    oferta: true
},
{
    producto : "huevos",
    id: 9,
    precio: 350,
    fechaVencimiento: "06/06/2023",
    descripcion: "De gallina",
    categoria: "D",
    oferta: false
},
{
    producto : "arroz",
    id: 10,
    precio: 250,
    fechaVencimiento: "01/10/2023",
    descripcion: "Blanco, no se pasa",
    categoria: "D",
    oferta: true
},
{
    producto : "fideos",
    id: 11,
    precio: 120,
    fechaVencimiento: "09/11/2023",
    descripcion: "Tirabuzon",
    categoria: "D",
    oferta: false
},
{
    producto : "mayonesa",
    id: 12,
    precio: 350,
    fechaVencimiento: "04/07/2023",
    descripcion: "Natura",
    categoria: "F",
    oferta: true
},
{
    producto : "yogurt",
    id: 13,
    precio: 320,
    fechaVencimiento: "05/02/2023",
    descripcion: "De frutilla",
    categoria: "A",
    oferta: true
},
{
    producto : "galletas",
    id: 14,
    precio: 400,
    fechaVencimiento: "01/09/2023",
    descripcion: "Oreo",
    categoria: "B",
    oferta: true
},
{
    producto : "helado",
    id: 15,
    precio: 1500,
    fechaVencimiento: "01/05/2023",
    descripcion: "Familiar: sabor frutilla, vainilla y chocolate",
    categoria: "B",
    oferta: true
},
]

// 2) Utilizar un método de array que verifique si oferta es true, en el caso de que lo sea,
// haga un 15%, 5%, 20%, 10% de descuento (elijan el descuento que quieran).

let copiaProductos = productos.slice()

function methodForEach(){
    copiaProductos.forEach ( (element ) =>{
        if (element.oferta === true && element.categoria === "A")
        console.log ("Con el 10%, el producto tiene un descuento de: $"+element.precio*10/100)
        if (element.oferta === true && element.categoria === "B")
        console.log ("Con el 5%, el producto tiene un descuento de: $"+element.precio*5/100)
    })
}
methodForEach()
// 3) Utilizando un método de array, que ordene a los elementos de manera alfabética (a - z o z - a), 
//como ustedes prefieran. También pueden ordenar por número de id (ascendente o descendente).

function methodSort (){
    copiaProductos.sort ((a,b)=>{
        if (a.producto < b.producto){
            return -1
        }else if (a.producto > b.producto){
            return 1
        } else {
            return 0
        }
    })
    
    console.log(copiaProductos)
}
methodSort()
// Usen este método haciendo una copia segura del array. 
//Pueden copiar el array de manera segura con los siguientes métodos:

// - […array] —> spread operator

// - array.slice() —> copia segura en otra variable

// - [].concat(array) —> copia segura en otra variable

// 4) A través de un confirm, pregúntele al usuario si quiere ver las ofertas 
//de la tienda. 
//En el caso de que si, entonces con filter, filtre el array y que 
//muestre en consola cada una de las ofertas.

function ofertasDelDia (){
    let ofertas = confirm ("Desea ver las ofertas de la tienda?") 
    if (ofertas === true){
        copiaProductos.filter ((objetoOferta)=>{
            if (/*objetoOferta.oferta === true &&*/ objetoOferta.categoria === "A"){
                console.log (`${objetoOferta.producto} tiene descuento del 10%`)
            }
            if (/*objetoOferta.oferta === true &&*/ objetoOferta.categoria === "B"){
                console.log (`${objetoOferta.producto} tiene descuento del 5%`)
            }
        }) 
    }
}

ofertasDelDia ()
// 5) A través de un prompt, permita al usuario buscar productos. 
//Una vez que ingrese un producto, busquen con find dicho producto y muestrelo en un alert().

function buscarProducto(){
    let busqueda = prompt(`Buscar producto`)
    copiaProductos.find((buscar)=>{
        if (buscar.producto === busqueda){
            alert(`${buscar.producto}`)
        }
    })
}

buscarProducto()