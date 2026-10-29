// 2. Carga automática del Header adaptada a tu estructura de carpetas
document.addEventListener("DOMContentLoaded", () => {
    // Si la página está dentro de la carpeta 'categorias', sube un nivel con '../'
    let rutaHeader = '../componentes/header.html';

    /*if(window.location.pathname.includes('/detalleProducto/')){
       rutaHeader='../componentes/header.html';
    }

    if (window.location.pathname.includes('/categorias/')) {
        rutaHeader='../componentes/header.html';
    }
    */
   fetch(rutaHeader)
        .then(response => {
            if (!response.ok) {
                throw new Error("No se pudo cargar el header desde: " + rutaHeader);
            }
            return response.text();
        })
        .then(data => {
          document.getElementById('menu-placeholder').innerHTML = data;
          //if (window.location.pathname.includes('/categorias/')||window.location.pathname.includes('/detalleProducto/')) {
                const logoHeader = document.querySelector('#menu-placeholder img');
                if (logoHeader) {
                    logoHeader.src = '../imagenes/eolicas.jpg';
                }
            }
        )  
        .catch(error => console.error("Error cargando el menú:", error));
});