const slides = document.querySelectorAll('.slider');

let indiceActual = 0;
 
function cambiaSlide (){

    slides[indiceActual].classList.remove('active');

    indiceActual=(indiceActual+1) % slides.length;

    slides[indiceActual].classList.add('active');
}
   setInterval(cambiaSlide,3000);

   