$(function() {

    $hieuung = $('.main_breakfast_content').isotope({
        itemSelector: '.conten_iso',
        layoutMode: 'fitRows'
    });
    
    $hieuung1 = $('.main_lunch_content').isotope({
        itemSelector: '.lunch_conten_iso',
        layoutMode: 'fitRows'
    });
    
    $hieuung12 = $('.main_dinner_content').isotope({
        itemSelector: '.dinner_conten_iso',
        layoutMode: 'fitRows'
    });
    
    //nut filter breakfast

    $('.button a').click(function() {
        $('.button a').removeClass('choose');
        $(this).addClass('choose');
        buttonname = $(this).attr('href');
        //console.log(buttonname);
        $hieuung.isotope({filter:'.'+buttonname});
        return false;
    })

    // nut filter lunch

    $('.lunch_button a').click(function() {
        $('.lunch_button a').removeClass('choose');
        $(this).addClass('choose');
        buttonname_lunch = $(this).attr('href');
        //console.log(buttonname_lunch);
        $hieuung1.isotope({filter:buttonname_lunch});
        return false;
    })

    //nut filter dinner

    $('.dinner_button a').click(function() {
        $('.dinner_button a').removeClass('choose');
        $(this).addClass('choose');
        buttonname12 = $(this).attr('href');
        //console.log(buttonname);
        $hieuung12.isotope({filter:buttonname12});
        return false;
    })
}) 