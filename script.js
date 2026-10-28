const slides = document.querySelectorAll('.slider');

let indiceActual = 0;
 
function cambiaSlide (){

    slides[indiceActual].classList.remove('active');

    indiceActual=(indiceActual+1) % slides.length;

    slides[indiceActual].classList.add('active');
}
   setInterval(cambiaSlide,3000);

// 2. Carga automática del Header adaptada a tu estructura de carpetas
document.addEventListener("DOMContentLoaded", () => {
    // Si la página está dentro de la carpeta 'categorias', sube un nivel con '../'
    let rutaHeader = 'componentes/header.html';
    
    if (window.location.pathname.includes('/categorias/')) {
        rutaHeader = '../componentes/header.html';
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
          if (window.location.pathname.includes('/categorias/')) {
                const logoHeader = document.querySelector('#menu-placeholder img');
                if (logoHeader) {
                    logoHeader.src = '../imagenes/eolicas.jpg';
                }
            }
        })  
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