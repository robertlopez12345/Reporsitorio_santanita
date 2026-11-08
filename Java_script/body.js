// Archivo: script.js
document.addEventListener("DOMContentLoaded", () => {
    const contenedorGrid = document.getElementById('contenedor-productos');
    
    if (contenedorGrid) {
        // Determinamos qué lista de objetos existe en esta página actual
        // (Busca automáticamente cuál variable está cargada en esta página)
        let listaActiva = [];
        let nombreCategoria = "";

        // Verificamos cuál variable está disponible en el archivo de esta categoría
        if (typeof objetosCategoria1 !== 'undefined') {
            listaActiva = objetosCategoria1;
            nombreCategoria = "categoria1"; // El nombre que usas en el diccionario
        } else if (typeof objetosCategoria2 !== 'undefined') {
            listaActiva = objetosCategoria2;
            nombreCategoria = "categoria2";
        }
        // Si creas categoria3, solo agregas otro "else if" aquí arriba

        let contenidoHTML = '';

        // Recorremos la lista activa de esta página
        listaActiva.forEach(item => {
            contenidoHTML += `
            
                <div class="box-producto">
                    <!-- Imagen que lleva al detalle con su categoría y su ID -->
                    <a href="../detalleProducto/detalle_producto.html?categoria=${nombreCategoria}&id=${item.id}">
                        <img src="${item.imagenPrincipal}" alt="${item.nombre}">
                    </a>
                    <div class="contenedor-detalles">
                    <h2>${item.nombre}</h2>
                     <p>${item.precio}</p></div>
                    <div class="contenedor-btn">
                    <a class="btn-comprar" href="../detalleProducto/detalle_producto.html?categoria=${nombreCategoria}&id=${item.id}">Comprar</a>
                     </div> 
                    </div>
                   
            `;
        });

        // Inyectamos todo en el HTML de la categoría
        contenedorGrid.innerHTML = contenidoHTML;
    }
});