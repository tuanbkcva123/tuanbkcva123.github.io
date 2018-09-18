$(function() {
    //nut filter breakfast

    $hieuung = $('.main_breakfast_content').isotope({
        itemSelector: '.conten_iso',
        layoutMode: 'fitRows'
    });

    $('.button a').click(function() {
        $('.button a').removeClass('choose');
        $(this).addClass('choose');
        buttonname = $(this).attr('href');
        //console.log(buttonname);
        $hieuung.isotope({filter:'.'+buttonname});
        return false;
    })

    // nut filter lunch

    $hieuung1 = $('.main_breakfast_content').isotope({
        itemSelector: '.conten_iso',
        layoutMode: 'fitRows'
    });

    $('.lunch_button a').click(function() {
        $('.lunch_button a').removeClass('choose');
        $(this).addClass('choose');
        buttonname1 = $(this).attr('href');
        //console.log(buttonname);
        $hieuung.isotope({filter:buttonname1});
        return false;
    })

    //nut filter dinner

    $hieuung12 = $('.main_breakfast_content').isotope({
        itemSelector: '.conten_iso',
        layoutMode: 'fitRows'
    });

    $('.dinner_button a').click(function() {
        $('.dinner_button a').removeClass('choose');
        $(this).addClass('choose');
        buttonname12 = $(this).attr('href');
        //console.log(buttonname);
        $hieuung.isotope({filter:buttonname12});
        return false;
    })
}) 