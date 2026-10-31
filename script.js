// ==========================================
// 1. CARRUSEL AUTOMÁTICO (Protegido)
// ==========================================
const slides = document.querySelectorAll('.slider');
let indiceActual = 0;

function cambiaSlide() {
    if (slides.length > 0) {
        slides[indiceActual].classList.remove('active');
        indiceActual = (indiceActual + 1) % slides.length;
        slides[indiceActual].classList.add('active');
    }
}

// Solo activa el temporizador si existen elementos .slider en esta página
if (slides.length > 0) {
    setInterval(cambiaSlide, 3000);
}


// ==========================================
// 2. CARGA AUTOMÁTICA DEL HEADER (Local y GitHub)
// ==========================================
document.addEventListener("DOMContentLoaded", () => {
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

            // Solución automática: Si estás en GitHub Pages, ajusta los enlaces de forma transparente
            if (window.location.hostname.includes('github.io')) {
                const enlaces = document.querySelectorAll('#menu-placeholder a');
                enlaces.forEach(enlace => {
                    let hrefActual = enlace.getAttribute('href');
                    if (hrefActual && hrefActual.startsWith('/') && !hrefActual.startsWith('/Reporsitorio_santanita')) {
                        enlace.setAttribute('href', '/Reporsitorio_santanita' + hrefActual);
                    }
                });
            }
        })
        .catch(error => console.error("Error cargando el menú:", error));
});


// ==========================================
// 3. MOVIMIENTO DE CARRUSELES (Flechas)
// ==========================================
function moverCarrusel(direccion, idContenedor) {
    const slider = document.getElementById(idContenedor);
    
    if (slider) {
        // 300 es la cantidad de píxeles que se desplaza por cada clic
        const desplazamiento = 300 * direccion; 
        
        slider.scrollBy({
            left: desplazamiento,
            behavior: 'smooth' // Desplazamiento fluido
        });
    }
}