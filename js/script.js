//Script for scroll to section effect//
$('a').click(function(){
    $('html, body').animate({
        scrollTop: $( $(this).attr('href') ).offset().top
    }, 900);
    return false;
});