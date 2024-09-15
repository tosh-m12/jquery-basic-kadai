$(function () {
    $('#fadeOut').on('click', function() {
        // $('.box').fadeOut(3000, function(){
        //     alert('fadeOut完了');
        // });
        // $('.box').fadeOut();
        $('.box').css('opacity', 0);
    });
    $('#fadeIn').on('click', function(){
        $('.box').css('opacity', 1);
    });
    // $('#fadeToggle').on('click', function() {
        // $('.box').fadeToggle();
    // });
    $('#slideUp').on('click', function() {
        // $('.box').slideUp();
        $('.box').css('height', 0);
    });
    $('#slideDown').on('click', function() {
        // $('.box').slideDown();
        $('.box').css('height', 200);
    });
    // $('#slideToggle').on('click', function() {
        // $('.box').slideToggle();
    // });    
});