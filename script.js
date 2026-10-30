const slides = document.querySelectorAll('.slider');

let indiceActual = 0;
 
function cambiaSlide (){

    slides[indiceActual].classList.remove('active');

    indiceActual=(indiceActual+1) % slides.length;

    slides[indiceActual].classList.add('active');
}
   setInterval(cambiaSlide,3000);


// 2. Carga automática del Header adaptada a tu estructura
document.addEventListener("DOMContentLoaded", () => {
    
    // Por defecto asumimos que estamos en una subcarpeta (como /categorias/ o /detalleProducto/)
    let rutaHeader = '../componentes/header.html';
    let rutaLogo = '../imagenes/eolicas.jpg';

    // Si estamos en la página principal (index.html de la raíz)
    if (!window.location.pathname.includes('/categorias/') && !window.location.pathname.includes('/detalleProducto/')) {
        rutaHeader = 'componentes/header.html';
        rutaLogo = 'imagenes/eolicas.jpg';
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
        }) // <-- ¡Aquí estaba el cierre que faltaba!
        .catch(error => console.error("Error cargando el menú:", error));
});


function moverCarrusel(direccion, idContenedor) {
    const slider = document.getElementById(idContenedor);
    
    // 300 es la cantidad de píxeles que se desplaza la vista por cada clic en la flecha
    const desplazamiento = 300 * direccion; 
    
    slider.scrollBy({
        left: desplazamiento,
        behavior: 'smooth' // Hace que se mueva fluido tipo animación
    });
}
