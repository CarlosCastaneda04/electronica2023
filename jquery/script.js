$(document).ready(function () {
  // Cuando se hace clic en el botón "Mostrar Datos"
  $(".mostrar-datos").click(function () {
    const datosInstrumento = $(this).siblings(".datos-instrumento");
    // Muestra u oculta los datos de la guitarra
    datosInstrumento.toggle();
  });


  // Botón flotante para ir hacia arriba
  $("#btn-flotante").click(function () {
    $("html, body").animate({ scrollTop: 0 }, 500);
  });

   // Animación al hacer clic en los hipervínculos de tipo de instrumento
   $(".tipo-link").click(function (event) {
    event.preventDefault(); // Evita el comportamiento predeterminado del hipervínculo
    const url = $(this).attr("href");
    // Realiza una animación antes de redirigir a la página
    $("body").fadeOut(500, function () {
      window.location.href = url;
    });
  });
});
