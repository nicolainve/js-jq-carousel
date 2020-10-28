// SLIDER

$(document).ready( function() {

    $('.next').click( function() {
        slideImg('next');
    });
    
    $('.prev').click( function() {
        slideImg('prev');
    });
    
    $(document).keydown( function(event) {
        
        if (event.keyCode === 39) {
            slideImg('next');
        } else if (event.keyCode === 37) {
            slideImg('prev');
        }
    })  
})

// FUNCTION

function slideImg(direction) {
    var activeImg = $('.images img.active');
    var activeCircle = $('.nav i.active');

    activeImg.removeClass('active');
    activeCircle.removeClass('active');
    
    // NEXT
    if (direction === 'next') {

        if (activeImg.hasClass('last') === true) {
            $('.images img.first').addClass('active');
            $('.nav i.first').addClass('active');
        } else {
            activeImg.next().addClass('active');
            activeCircle.next().addClass('active');
        }
    }

    // PREV
    if (direction === 'prev') {

        if (activeImg.hasClass('first') === true) {
            $('.images img.last').addClass('active');
            $('.nav i.last').addClass('active');
        } else {
            activeImg.prev().addClass('active');
            activeCircle.prev().addClass('active');
        }
    }
}