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


const botonWp = document.getElementById('btn-whatsapp');

if (botonWp) {
    botonWp.addEventListener('click', (e) => {
         const parametros = new URLSearchParams(window.location.search);
        const productoId = parseInt(parametros.get('id'));    
        const producto = listaProductos.find(p => p.id == productoId);
        
        if (producto) {
            // Creamos el mensaje justo al hacer clic (todo en una sola línea fluida)
            let numeroWhatsApp = "50496200913";
            let urlPagina = window.location.href;
            let textoMensaje = `Hola, deseo comprar el producto: *${producto.nombre}* (Código: ${producto.codigo})${urlPagina}. ¿Está disponible?`;
            
            let enlaceFinal = `https://wa.me/${numeroWhatsApp}?text=${encodeURIComponent(textoMensaje)}`;
            
            // Asignamos el enlace justo antes de que abra la pestaña
            botonWp.href = enlaceFinal;
        }
    });
}