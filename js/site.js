/***********************************************************
 *         Javascript for the site pages
 **********************************************************/

/* Navigation JQuery */
$("#mainNav").find("a").each(function(){
    if( $(this).attr('href') == window.location.pathname )
        $(this).parent().addClass('active');
});

/* Carousel JQuery */
$('.carousel-control').hide();
$('#myCarousel').on('mouseenter', function() {
    $('.carousel-control').show('slow', function(){});
}).on('mouseleave', function() {
    $('.carousel-control').hide('slow', function(){});
});
