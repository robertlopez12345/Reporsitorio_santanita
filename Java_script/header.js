// 2. Carga automática del Header adaptada de forma segura
document.addEventListener("DOMContentLoaded", () => {
    
    // Detectamos si estamos en una subcarpeta (como /categorias/ o /detalleProducto/)
    let rutaHeader = 'componentes/header.html';
    let rutaLogo = 'imagenes/eolicas.jpg';

    // Si la URL actual incluye subcarpetas, ajustamos los puntos para salir al directorio raíz
    if (window.location.pathname.includes('/categorias/') || window.location.pathname.includes('/detalleProducto/') || window.location.pathname.includes('/detalle-producto/')) {
        rutaHeader = '../componentes/header.html';
        rutaLogo = '../imagenes/eolicas.jpg';
    }

    fetch(rutaHeader)
        .then(response => {
            if (!response.ok) {
                throw new Error("No se pudo cargar el header desde: " + rutaHeader);
            }
            return response.text();
        })
        .then(data => {
            document.getElementById('menu-placeholder').innerHTML = data;
            
            // Ajustar la ruta del logo dentro del header cargado
            const logoHeader = document.querySelector('#menu-placeholder img');
            if (logoHeader) {
                logoHeader.src = rutaLogo;
            }
        })
        .catch(error => console.error("Error cargando el menú:", error));
});