document.addEventListener("DOMContentLoaded", () => {
    const parametros = new URLSearchParams(window.location.search);
    const productoId = parseInt(parametros.get('id'));

    // Buscamos el producto en tu archivo de datos
    const producto = listaProductos.find(p => p.id === productoId);

    if (producto) {
        // 1. Rellenamos textos y precios
        document.getElementById('nombre-producto').textContent = producto.nombre;
        document.getElementById('codigo-producto').textContent = producto.codigo;
        document.getElementById('precio-actual').textContent = producto.precio;
        document.getElementById('precio-anterior').textContent = producto.precioAnterior;
        document.getElementById('badge-descuento').textContent = producto.descuento;

        // 2. Establecemos la imagen principal por defecto (la primera de la lista)
        const imgPrincipal = document.getElementById('imagen-principal');
        imgPrincipal.src = producto.imagenPrincipal;

        // 3. Generamos las miniaturas en la columna izquierda
        const contenedorMiniaturas = document.getElementById('contenedor-miniaturas');
        let htmlMiniaturas = '';

        producto.imagenesSecundarias.forEach((rutaImg) => {
            htmlMiniaturas += `
                <div class="caja-miniatura">
                    <img src="${rutaImg}" alt="miniatura" onclick="cambiarImagenGrande('${rutaImg}')">
                </div>
            `;
        });

        contenedorMiniaturas.innerHTML = htmlMiniaturas;
    }
});

// Función global para cambiar la foto grande al hacer clic en una miniatura
function cambiarImagenGrande(nuevaRuta) {
    const imgPrincipal = document.getElementById('imagen-principal');
    imgPrincipal.src = nuevaRuta;
}