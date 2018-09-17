$(function() {
    $abc = $('.content').isotope({
        itemSelector: '.main_image',
        layoutMode: 'masonry'
    });

    $abc.imagesLoaded().progress( function() {
        $abc.isotope('layout');
    });
})