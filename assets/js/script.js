$(document).ready(function () {

    $("a").click(function (e) {
        var gato = this.hash
        $("html, body").animate({
            scrollTop: $(gato).offset().top - 56
        }, 300);
    })
})

// $("a").click(function (event) {

//     if (this.hash !== "") {

//         event.preventDefault();

//         var hash = this.hash;

//         $("html, body").animate({
//             scrollTop: $(hash).offset().top
//         }, 100); // primero probar con 0 y aumente de 1000 en 1000 para ver diferencia
//     }
// });

// $(document).ready(function () {
//     $("a").on('click', function (event) {
//         if (this.hash !== "") {
//             event.preventDefault();
//             var hash = this.hash;
//             $('html, body').animate({
//                 scrollTop: $(hash).offset().top
//             }, 1000, function () {
//                 window.location.hash = hash;
//             });
//         }
//     });
// });