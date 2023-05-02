//Corregir: Genera error cuando tengo dos unidades de stock del producto y trato de eliminar la ultima unidad (en el carrito)

// Opcion 1: cargar Productos

function cargarProductos() {
    
    let nombre = ""
    let descripcion = ""
    let precio = 0
    let stock = 0
    
    
    nombre = prompt('Indique el NOMBRE del producto: ')
    descripcion = prompt('Indique la DESCRIPCIÓN del producto: ')
    precio = prompt('Indique el PRECIO neto del producto: ')
    stock = prompt('Indique el STOCK disponible del producto: ')

    if (nombre == "" || descripcion == "" || precio == 0 || stock == 0) {
        alert('Algun dato fue mal ingresado. Intente nuevamente')
    }else{
        productos.push(new producto(nombre, descripcion, precio, stock))
    }
}


// Opcion 2: listar Productos

function listarProductos(lista,tipo) {
    let mensaje = ""
    
    if (lista.length == 0) {
        return 'No hay productos cargados'
    }

    if (tipo == "productos") {
        for (let i=0; i < lista.length; i++) {
            mensaje = mensaje + '\n' + `${i}) ${lista[i].nombre}: \n     - Precio: ${lista[i].precio} \n     - Descripción: ${lista[i].descripcion} \n     - Stock: ${lista[i].stock}`
        }
    }else {
        for (let i=0; i < lista.length; i++) {
            mensaje = mensaje + '\n' + `${i}) ${lista[i].nombre}: \n     - Precio: ${lista[i].precio} \n     - Descripción: ${lista[i].descripcion} \n`
        }

    }

    return mensaje

}

// Opcion 3: eliminar Productos.

function eliminarProductos(lista,tipo) {
    
    // Antes de eliminar un producto, primero hay que asegurarse que no haya productos en el carrito
    if (tipo == "productos" && carrito.length != 0) {
        alert('Antes de eliminar un producto de la tienda, tiene que VACIAR el carrito.')
        return
    }
    
    let eliminarProducto = parseInt(prompt(listarProductos(lista) + '\n \n Indique el producto a eliminar: '))
    
    if (eliminarProducto < 0 || eliminarProducto > (lista.length - 1)) {
        alert('Opcion no valida')
    }else {
        //Si lo que se elimina es un elemento del carrito, entonces sube el stock de la tienda 
        if (tipo =="carrito") {
            for (let i = 0; i < productos.length; i++) {
                if(productos[i].nombre === lista[eliminarProducto].nombre) {
                    productos[i].stock++
                }
            }
        }

        lista.splice(eliminarProducto,1)

        alert('Producto ELIMINADO existosamente')
    }
}

// Opcion 4: agregar Al Carrito

    function agregarAlCarrito () {
        
        let agregarProducto = 0
        
        agregarProducto = parseInt(prompt(listarProductos(productos, "productos") + ' \n \n ¿Que producto quiere agregar al carrito?'))
        

        if (productos[agregarProducto].stock > 0) {
            carrito.push(productos[agregarProducto]) // Agrega el producto al carrito
            productos[agregarProducto].stock-- //Disminuye en 1 unidad el stock de los productos
        }else {
            alert("No hay stock del producto")
        }
        
    }

// Opcion 5: listar Carrito

    function listarCarrito() {
        let mensaje = ""
        let total = 0
        
        if (carrito.length == 0) {
            alert('Su carrito esta VACIO')
            return ""
        }
        
        for (let producto of carrito) {
            total = total + producto.precio
        }


        mensaje = `Contenido del CARRITO: \n ${listarProductos(carrito)} \n \n ---------- \n TOTAL: $ ${total} \n CANTIDAD: ${carrito.length} productos` 
        
        alert(mensaje)
                
    }

// Opcion 6: eliminar Item Carrito

function eliminarItemCarrito() {
    eliminarProductos(carrito,'carrito',productos)           
}

// Opcion 7: vaciar Carrito

function vaciarCarrito() {
    carrito.splice(0,carrito.length)
    alert('Ahora su carrito se encuentra VACIO')
}