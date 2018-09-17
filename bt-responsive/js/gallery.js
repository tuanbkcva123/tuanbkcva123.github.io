$(function() {
    $hieuung = $('.content').isotope({
        itemSelector: '.main_image',
        layoutMode: 'masonry'
    });

    $hieuung.imagesLoaded().progress( function() {
        $hieuung.isotope('layout');
    });

    $('#first_btn').addClass('choose');

    $('.button a').click(function() {
        $('.button a').removeClass('choose');
        $(this).addClass('choose');
        buttonname = $(this).attr('href');
        //console.log(buttonname);
        $hieuung.isotope({filter:buttonname});
        return false;
    })

})