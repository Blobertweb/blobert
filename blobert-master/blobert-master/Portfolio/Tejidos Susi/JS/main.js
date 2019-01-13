$('#boton-imagenes-clases').click(function () {

        if ($('#scale-demo').hasClass('scale-out')) {
         
            $('#texto-clases').addClass('hide');
            $('#scale-demo').removeClass('hide');
            $('#boton-volver-clases').removeClass('hide');
            $('#boton-imagenes-clases').addClass('hide');
            $('#scale-demo').removeClass('scale-out');
            $('#scale-demo').addClass('scale-in');
        } 

    });
$('#boton-volver-clases').click(function () {
    $('#texto-clases').removeClass('hide');
    $('#scale-demo').addClass('scale-out');
    $('#scale-demo').addClass('hide');
    $('#boton-volver-clases').addClass('hide');
    $('#boton-imagenes-clases').removeClass('hide');
    $('#texto-clases').removeClass('hide');
    $('#scale-demo').removeClass('scale-in');

});

    
$(document).ready(function () {
    $("#productos").click(function () {
        $('html, body').animate({
            scrollTop: $("#seccion-productos").offset().top
        }, 1000);
    });
    $("#productos-2").click(function () {
        $('html, body').animate({
            scrollTop: $("#seccion-productos").offset().top
        }, 1000);
    });
    $("#clases").click(function () {
        $('html, body').animate({
            scrollTop: $("#seccion-clases").offset().top
        }, 1000);
    });
    $("#clases-2").click(function () {
        $('html, body').animate({
            scrollTop: $("#seccion-clases").offset().top
        }, 1000);
    });
    $("#inicio").click(function () {
        $('html, body').animate({
            scrollTop: $("#inicio-menu").offset().top
        }, 1000);
    });
    $("#contacto").click(function () {
        $('html, body').animate({
            scrollTop: $("#seccion-contacto").offset().top
        }, 1000);
    });
    $("#consultar").click(function () {
        $('html, body').animate({
            scrollTop: $("#seccion-contacto").offset().top
        }, 1000);   
    });
    $("#consultar-2").click(function () {
        $('html, body').animate({
            scrollTop: $("#seccion-contacto").offset().top
        }, 1000);
    });

});

$(document).ready(function () {
    $("#productos-responsive").click(function () {
        $('html, body').animate({
            scrollTop: $("#seccion-productos").offset().top
        }, 1000);
    });
    $("#clases-responsive").click(function () {
        $('html, body').animate({
            scrollTop: $("#seccion-clases").offset().top
        }, 1000);
    });
    $("#contacto-responsive").click(function () {
        $('html, body').animate({
            scrollTop: $("#seccion-contacto").offset().top
        }, 1000);
    });
});

$(document).ready(function () {
    var $fotos = $('.card').children('.imagenes-1');
    var $fotos2 = $('.card').children('.imagenes-2');
    var $fotos3 = $('.card').children('.imagenes-3');

    $('#card-1').on('click', function () {
        mostrarEnSecuencia($fotos);
        if ($('.card').children('#flecha-arriba').hasClass('hide')){
        $('.card').children('#flecha-abajo').addClass('hide');
            $('.card').children('#flecha-arriba').removeClass('hide');
        }else{
            $('.card').children('#flecha-arriba').addClass('hide');
            $('.card').children('#flecha-abajo').removeClass('hide');
        }
    });
    $('#card-2').on('click', function () {
        mostrarEnSecuencia($fotos2);
        if ($('.card').children('#flecha-arriba-2').hasClass('hide')) {
            $('.card').children('#flecha-abajo-2').addClass('hide');
            $('.card').children('#flecha-arriba-2').removeClass('hide');
        } else {
            $('.card').children('#flecha-arriba-2').addClass('hide');
            $('.card').children('#flecha-abajo-2').removeClass('hide');
        }
    });
    $('#card-3').on('click', function () {
        mostrarEnSecuencia($fotos3);
        if ($('.card').children('#flecha-arriba-3').hasClass('hide')) {
            $('.card').children('#flecha-abajo-3').addClass('hide');
            $('.card').children('#flecha-arriba-3').removeClass('hide');
        } else {
            $('.card').children('#flecha-arriba-3').addClass('hide');
            $('.card').children('#flecha-abajo-3').removeClass('hide');
        }
    });
    function mostrarEnSecuencia($coleccion, tiempo) {
        tiempo = tiempo || 500;
        $coleccion.each(function (indice, elemento) {
            $(elemento).slideToggle(tiempo );
        });
    }
   
});

$(document).ready(function () {
    $('.materialboxed').materialbox();
 
});



// Mapa
var mymap = L.map('mapid').setView([-34.429699, -58.571835], 13);

         L.tileLayer('http://{s}.tile.osm.org/{z}/{x}/{y}.png', {
        attribution: '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
}).addTo(mymap);
            var circle = L.circle([-34.429699, -58.571835], {
        color: 'red',
    fillColor: '#f03',
    fillOpacity: 0.5,
    radius: 700
}).addTo(mymap);

var slideIndex = 1;
showDivs(slideIndex);

function plusDivs(n) {
    showDivs(slideIndex += n);
}

function showDivs(n) {
    var i;
    var x = document.getElementsByClassName("mySlides");
    if (n > x.length) { slideIndex = 1 }
    if (n < 1) { slideIndex = x.length }
    for (i = 0; i < x.length; i++) {
        x[i].style.display = "none";
    }
    x[slideIndex - 1].style.display = "block";
}

