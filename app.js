// CARRITO DE COMPRAS


// --------------------- 


//Declaracion de variables Globales


const productos = [] //array
const carrito = [] //array





do{
      
    menubar()
  
    switch(opcionElegida){
        case 1:
            cargarProductos()
            break
        case 2:
            alert(listarProductos(productos, "productos"))
            break
        case 3:
            eliminarProductos(productos, "productos")
            break
        case 4:
            agregarAlCarrito()
            break
        case 5:
            listarCarrito()
            break
        case 6:
            eliminarItemCarrito ()
            break
        case 7:
            vaciarCarrito()
            break
        case 0:
            break //Salir
        default:
            alert('Tiene que elegir una opción valida')
    }

}while(opcionElegida != 0)

alert('Gracias por utilizar el sistema de carrito')




