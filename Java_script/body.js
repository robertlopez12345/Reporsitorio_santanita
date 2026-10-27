// Archivo: script.js (o el nombre de tu archivo de lógica)
document.addEventListener("DOMContentLoaded", () => {
    const contenedorGrid = document.getElementById('contenedor-productos');

    // Verificamos que el contenedor exista en la página actual
    if (contenedorGrid && typeof listaProductos !== 'undefined') {
        let contenidoHTML = '';

        // Recorremos la lista que viene del otro archivo
        listaProductos.forEach(item => {
            contenidoHTML += `
                <div class="box">
                    <img src="${item.imagen}" alt="${item.alt}">
                </div>
            `;
        });

        // Inyectamos todo en el HTML
        contenedorGrid.innerHTML = contenidoHTML;
    }
});