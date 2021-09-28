$(window).scroll(function() {

    if ($(window).scrollTop() > 30) {
        $('.main_h').addClass('top');
        $('.mobile-toggle').addClass('ch')
    } else {
        $('.main_h').removeClass('top');
        $('.mobile-toggle').removeClass('ch')
    }
});

$('.mobile-toggle').click(function() {
    if ($('.main_h').hasClass('open-nav')) {
        $('.main_h').removeClass('open-nav');
    } else {
        $('.main_h').addClass('open-nav');
    }
});

$('.main_h li a').click(function() {
    if ($('.main_h').hasClass('open-nav')) {
        $('.navigation').removeClass('open-nav');
        $('.main_h').removeClass('open-nav');
    }
});

$('nav a').click(function(event) {
    var id = $(this).attr("href");
    var offset = 70;
    var target = $(id).offset().top - offset;
    $('html, body').animate({
        scrollTop: target
    }, 650);
    event.preventDefault();
});

function btnFunc(){
    alert("Jelenleg az online foglalás szünetel. Amennyiben foglalni szeretne kérjük vegye fel velünk a kapcsolatot!")
}