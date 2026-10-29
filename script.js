const slides = document.querySelectorAll('.slider');

let indiceActual = 0;
 
function cambiaSlide (){

    slides[indiceActual].classList.remove('active');

    indiceActual=(indiceActual+1) % slides.length;

    slides[indiceActual].classList.add('active');
}
   setInterval(cambiaSlide,3000);



function moverCarrusel(direccion, idContenedor) {
    const slider = document.getElementById(idContenedor);
    
    // 300 es la cantidad de píxeles que se desplaza la vista por cada clic en la flecha
    const desplazamiento = 300 * direccion; 
    
    slider.scrollBy({
        left: desplazamiento,
        behavior: 'smooth' // Hace que se mueva fluido tipo animación
    });
}
