document.addEventListener("DOMContentLoaded", () => {
    // 1. Leemos los parámetros de la URL
    const parametros = new URLSearchParams(window.location.search);
    const categoria = parametros.get('categoria'); // Ej: "categoria1" o "categoria2"
    const productoId = parseInt(parametros.get('id')); 

    // 2. DICCIONARIO ADAPTADO A TUS NUEVOS NOMBRES
    const baseDeDatosGlobal = {
        'categoria1': typeof objetosCategoria1 !== 'undefined' ? objetosCategoria1 : [],
        'categoria2': typeof objetosCategoria2 !== 'undefined' ? objetosCategoria2 : []
    };

    // 3. Buscamos automáticamente la lista correcta
    const listaAUsar = baseDeDatosGlobal[categoria] || [];
    const producto = listaAUsar.find(p => p.id === productoId);

    if (producto) {
        document.getElementById('nombre-producto').textContent = producto.nombre;
        document.getElementById('codigo-producto').textContent = producto.codigo;
        document.getElementById('precio-actual').textContent = producto.precio;

        const imgPrincipal = document.getElementById('imagen-principal');
        imgPrincipal.src = producto.imagenPrincipal;

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
    } else {
        console.error("No se encontró el producto o la categoría no es válida.");
    }
});

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