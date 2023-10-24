$(document).ready(function () {
  // Cuando se hace clic en el botón "Mostrar Datos"
  $(".mostrar-datos").click(function () {
    const datosGuitarra = $(this).siblings(".datos-guitarra");
    // Muestra u oculta los datos de la guitarra
    datosGuitarra.toggle();
  });
});
