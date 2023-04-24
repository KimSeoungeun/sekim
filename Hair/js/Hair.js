$(window).on('load', function () {
    // scroll event //
    let $html = $("html");
    let page = 1;
    $html.animate({
        scrollLeft: 0
    }, 10);
    $(window).on("wheel", function (e) {

        if ($html.is(":animated")) return;
        if (page == 3) {
            $('.PerText1 p:nth-child(1)').css('marginTop', '-1520px');
            $('.PerText1 p:nth-child(2)').css('marginTop', '-1210px');
            $('.PerText1 p:nth-child(3)').css('marginTop', '-910px');
            $('.PerText1 p:nth-child(4)').css('marginTop', '-610px');
            $('.PerText1 p:nth-child(5)').css('marginTop', '-310px');
            $('.PerText1 p:nth-child(6)').css('marginTop', '0px');

            $('.PerText2 p:nth-child(1)').css('marginTop', '-2120px');
            $('.PerText2 p:nth-child(2)').css('marginTop', '-1820px');
            $('.PerText2 p:nth-child(3)').css('marginTop', '-1520px');
            $('.PerText2 p:nth-child(4)').css('marginTop', '-1210px');
            $('.PerText2 p:nth-child(5)').css('marginTop', '-910px');
            $('.PerText2 p:nth-child(6)').css('marginTop', '-610px');
            $('.PerText2 p:nth-child(7)').css('marginTop', '-310px');
            $('.PerText2 p:nth-child(8)').css('marginTop', '0px');

            $('.PerText3 p:nth-child(1)').css('marginTop', '-310px');
            $('.PerText3 p:nth-child(2)').css('marginTop', '0px');

            $('.PerText5 p:nth-child(1)').css('marginTop', '-610px');
            $('.PerText5 p:nth-child(2)').css('marginTop', '-310px');
            $('.PerText5 p:nth-child(3)').css('marginTop', '0px');

            $('.PerText6 p:nth-child(1)').css('marginTop', '-2320px');
            $('.PerText6 p:nth-child(2)').css('marginTop', '-2120px');
            $('.PerText6 p:nth-child(3)').css('marginTop', '-1820px');
            $('.PerText6 p:nth-child(4)').css('marginTop', '-1520px');
            $('.PerText6 p:nth-child(5)').css('marginTop', '-1210px');
            $('.PerText6 p:nth-child(6)').css('marginTop', '-910px');
            $('.PerText6 p:nth-child(7)').css('marginTop', '-610px');
            $('.PerText6 p:nth-child(8)').css('marginTop', '-310px');
            $('.PerText6 p:nth-child(9)').css('marginTop', '0px');

            $('.PerText7 p:nth-child(1)').css('marginTop', '-310px');
            $('.PerText7 p:nth-child(2)').css('marginTop', '0px');
        }
        if (e.originalEvent.deltaY > 0) {
            if (page == 8) return;
            page++;
        } else if (e.originalEvent.deltaY < 0) {
            if (page == 1) return;
            page--;
        }
        let posLeft = (page - 1) * $(window).width();
        $html.animate({
            scrollLeft: posLeft
        }, 500);
    });
    // ul click 페이지 이동 //
    $(window).scroll(function () {
        let html = $('html, body').scrollLeft();
        let offset1 = $('#s1').offset().left;
        let offset2 = $('#s2').offset().left;
        let offset3 = $('#s3').offset().left;
        let offset4 = $('#s4').offset().left;
        let offset5 = $('#s5').offset().left;
        let offset6 = $('#s6').offset().left;
        let offset7 = $('#s7').offset().left;
        if (html == offset1) {
            $('.slideUl li:nth-child(1)').css('color', '#EB8242');
            $('.Fixedlongline').css('width', '0vw');
        } else {
            $('.slideUl li:nth-child(1)').css('color', 'black');
        }
        if (html == offset2) {
            $('.slideUl li:nth-child(2)').css('color', '#EB8242');
            $('.Fixedlongline').css('width', '2vw');
        } else {
            $('.slideUl li:nth-child(2)').css('color', 'black');
        }
        if (html == offset3) {
            $('.slideUl li:nth-child(3)').css('color', '#EB8242');
        } else {
            $('.slideUl li:nth-child(3)').css('color', 'black');
        }
        if (html == offset4) {
            $('.slideUl li:nth-child(4)').css('color', '#EB8242');
            $('.PerText1 p:nth-child(1)').css('marginTop', '-1520px');
            $('.PerText1 p:nth-child(2)').css('marginTop', '-1210px');
            $('.PerText1 p:nth-child(3)').css('marginTop', '-910px');
            $('.PerText1 p:nth-child(4)').css('marginTop', '-610px');
            $('.PerText1 p:nth-child(5)').css('marginTop', '-310px');
            $('.PerText1 p:nth-child(6)').css('marginTop', '0px');

            $('.PerText2 p:nth-child(1)').css('marginTop', '-2120px');
            $('.PerText2 p:nth-child(2)').css('marginTop', '-1820px');
            $('.PerText2 p:nth-child(3)').css('marginTop', '-1520px');
            $('.PerText2 p:nth-child(4)').css('marginTop', '-1210px');
            $('.PerText2 p:nth-child(5)').css('marginTop', '-910px');
            $('.PerText2 p:nth-child(6)').css('marginTop', '-610px');
            $('.PerText2 p:nth-child(7)').css('marginTop', '-310px');
            $('.PerText2 p:nth-child(8)').css('marginTop', '0px');

            $('.PerText3 p:nth-child(1)').css('marginTop', '-310px');
            $('.PerText3 p:nth-child(2)').css('marginTop', '0px');

            $('.PerText5 p:nth-child(1)').css('marginTop', '-610px');
            $('.PerText5 p:nth-child(2)').css('marginTop', '-310px');
            $('.PerText5 p:nth-child(3)').css('marginTop', '0px');

            $('.PerText6 p:nth-child(1)').css('marginTop', '-2320px');
            $('.PerText6 p:nth-child(2)').css('marginTop', '-2120px');
            $('.PerText6 p:nth-child(3)').css('marginTop', '-1820px');
            $('.PerText6 p:nth-child(4)').css('marginTop', '-1520px');
            $('.PerText6 p:nth-child(5)').css('marginTop', '-1210px');
            $('.PerText6 p:nth-child(6)').css('marginTop', '-910px');
            $('.PerText6 p:nth-child(7)').css('marginTop', '-610px');
            $('.PerText6 p:nth-child(8)').css('marginTop', '-310px');
            $('.PerText6 p:nth-child(9)').css('marginTop', '0px');

            $('.PerText7 p:nth-child(1)').css('marginTop', '-310px');
            $('.PerText7 p:nth-child(2)').css('marginTop', '0px');
        } else {
            $('.slideUl li:nth-child(4)').css('color', 'black');
            $('.PerText1 p:nth-child(1)').css('marginTop', '0px');
            $('.PerText1 p:nth-child(2)').css('marginTop', '0px');
            $('.PerText1 p:nth-child(3)').css('marginTop', '0px');
            $('.PerText1 p:nth-child(4)').css('marginTop', '0px');
            $('.PerText1 p:nth-child(5)').css('marginTop', '0px');
            $('.PerText1 p:nth-child(6)').css('marginTop', '0px');

            $('.PerText2 p:nth-child(1)').css('marginTop', '0px');
            $('.PerText2 p:nth-child(2)').css('marginTop', '0px');
            $('.PerText2 p:nth-child(3)').css('marginTop', '0px');
            $('.PerText2 p:nth-child(4)').css('marginTop', '0px');
            $('.PerText2 p:nth-child(5)').css('marginTop', '0px');
            $('.PerText2 p:nth-child(6)').css('marginTop', '0px');
            $('.PerText2 p:nth-child(7)').css('marginTop', '0px');
            $('.PerText2 p:nth-child(8)').css('marginTop', '0px');

            $('.PerText3 p:nth-child(1)').css('marginTop', '0px');
            $('.PerText3 p:nth-child(2)').css('marginTop', '0px');

            $('.PerText5 p:nth-child(1)').css('marginTop', '0px');
            $('.PerText5 p:nth-child(2)').css('marginTop', '0px');
            $('.PerText5 p:nth-child(3)').css('marginTop', '0px');

            $('.PerText6 p:nth-child(1)').css('marginTop', '0px');
            $('.PerText6 p:nth-child(2)').css('marginTop', '0px');
            $('.PerText6 p:nth-child(3)').css('marginTop', '0px');
            $('.PerText6 p:nth-child(4)').css('marginTop', '0px');
            $('.PerText6 p:nth-child(5)').css('marginTop', '0px');
            $('.PerText6 p:nth-child(6)').css('marginTop', '0px');
            $('.PerText6 p:nth-child(7)').css('marginTop', '0px');
            $('.PerText6 p:nth-child(8)').css('marginTop', '0px');
            $('.PerText6 p:nth-child(9)').css('marginTop', '0px');

            $('.PerText7 p:nth-child(1)').css('marginTop', '0px');
            $('.PerText7 p:nth-child(2)').css('marginTop', '0px');
        }
        if (html == offset5) {
            $('.slideUl li:nth-child(5)').css('color', '#EB8242');
        } else {
            $('.slideUl li:nth-child(5)').css('color', 'black');
        }
        if (html == offset6) {
            $('.slideUl li:nth-child(6)').css('color', '#EB8242');
        } else {
            $('.slideUl li:nth-child(6)').css('color', 'black');
        }
        if (html == offset7) {
            $('.slideUl li:nth-child(7)').css('color', '#EB8242');
        } else {
            $('.slideUl li:nth-child(7)').css('color', 'black');
        }

    })
    // mainLogo click event //
    let true1 = true;
    $('.leftFixed section:nth-child(1)').on('click', function () {
        page = 1;
        $('html, body').animate({
            scrollLeft: 0
        }, 500)
    })
    // Submenu click event //
    $('.xi-bars').on('click', function () {
        if (true1 == true) {
            $('.FixedMenu').css('width', '20vw');
            $('.FixedMenu').css('transform', 'rotate(-25deg)');
            $('.FixedMenu').css('marginLeft', '6vw');
            $('.FixedMenu').css('marginTop', '4vh');
            true1 = false;
        } else {
            $('.FixedMenu').css('width', '0%');
            $('.FixedMenu').css('transform', 'rotate(0deg)');
            $('.FixedMenu').css('marginLeft', '0vw');
            $('.FixedMenu').css('marginTop', '0vh');
            true1 = true;
        }
    })
    $('.FixedMenu article:nth-child(3)').on('click', function () {
        $(location).attr('href', 'Hair.html');
    })
    $('.FixedMenu article:nth-child(4)').on('click', function () {
        $('.PopupPage1').css('width', '100vw');
        $('.FixedMenu').css('width', '0%');
        $('.FixedMenu').css('transform', 'rotate(0deg)');
    })
    $('.FixedMenu article:nth-child(5)').on('click', function () {
        $('.PopupPage2').css('width', '100vw');
        $('.FixedMenu').css('width', '0%');
        $('.FixedMenu').css('transform', 'rotate(0deg)');
    })
    $('.x_button').on('click', function () {
        $('.PopupPage1').css('width', '0%');
    })
    $('.x_button2').on('click', function () {
        $('.PopupPage2').css('width', '0%');
    })

    // page 이동 button//
    $('.slideUl li:nth-child(1)').on('click', function () {
        let offset1 = $('#s1').offset().left;
        $('html, body').animate({
            scrollLeft: offset1
        }, 500, 'linear')
        $('.slideUl li:nth-child(1)').css('color', '#EB8242');
        $('.slideUl li:nth-child(2)').css('color', 'black');
        $('.slideUl li:nth-child(3)').css('color', 'black');
        $('.slideUl li:nth-child(4)').css('color', 'black');
        $('.slideUl li:nth-child(5)').css('color', 'black');
        $('.slideUl li:nth-child(6)').css('color', 'black');
        $('.slideUl li:nth-child(7)').css('color', 'black');
        page = 1;
    })
    $('.slideUl li:nth-child(2)').on('click', function () {
        let offset2 = $('#s2').offset().left;
        $('html, body').animate({
            scrollLeft: offset2
        }, 500, 'linear')
        $('.slideUl li:nth-child(1)').css('color', 'black');
        $('.slideUl li:nth-child(2)').css('color', '#EB8242');
        $('.slideUl li:nth-child(3)').css('color', 'black');
        $('.slideUl li:nth-child(4)').css('color', 'black');
        $('.slideUl li:nth-child(5)').css('color', 'black');
        $('.slideUl li:nth-child(6)').css('color', 'black');
        $('.slideUl li:nth-child(7)').css('color', 'black');
        page = 2;
    })
    $('.slideUl li:nth-child(3)').on('click', function () {
        let offset3 = $('#s3').offset().left;
        $('html, body').animate({
            scrollLeft: offset3
        }, 500)
        $('.slideUl li:nth-child(1)').css('color', 'black');
        $('.slideUl li:nth-child(2)').css('color', 'black');
        $('.slideUl li:nth-child(3)').css('color', '#EB8242');
        $('.slideUl li:nth-child(4)').css('color', 'black');
        $('.slideUl li:nth-child(5)').css('color', 'black');
        $('.slideUl li:nth-child(6)').css('color', 'black');
        $('.slideUl li:nth-child(7)').css('color', 'black');
        page = 3;
    })
    $('.slideUl li:nth-child(4)').on('click', function () {
        let offset4 = $('#s4').offset().left;
        $('html, body').animate({
            scrollLeft: offset4
        }, 500, 'linear')
        $('.slideUl li:nth-child(1)').css('color', 'black');
        $('.slideUl li:nth-child(2)').css('color', 'black');
        $('.slideUl li:nth-child(3)').css('color', 'black');
        $('.slideUl li:nth-child(4)').css('color', '#EB8242');
        $('.slideUl li:nth-child(5)').css('color', 'black');
        $('.slideUl li:nth-child(6)').css('color', 'black');
        $('.slideUl li:nth-child(7)').css('color', 'black');
        page = 4;
    })
    $('.slideUl li:nth-child(5)').on('click', function () {
        let offset5 = $('#s5').offset().left;
        $('html, body').animate({
            scrollLeft: offset5
        }, 500, 'linear')
        $('.slideUl li:nth-child(1)').css('color', 'black');
        $('.slideUl li:nth-child(2)').css('color', 'black');
        $('.slideUl li:nth-child(3)').css('color', 'black');
        $('.slideUl li:nth-child(4)').css('color', 'black');
        $('.slideUl li:nth-child(5)').css('color', '#EB8242');
        $('.slideUl li:nth-child(6)').css('color', 'black');
        $('.slideUl li:nth-child(7)').css('color', 'black');
        page = 5;
    })
    $('.slideUl li:nth-child(6)').on('click', function () {
        let offset6 = $('#s6').offset().left;
        $('html, body').animate({
            scrollLeft: offset6
        }, 500, 'linear')
        $('.slideUl li:nth-child(1)').css('color', 'black');
        $('.slideUl li:nth-child(2)').css('color', 'black');
        $('.slideUl li:nth-child(3)').css('color', 'black');
        $('.slideUl li:nth-child(4)').css('color', 'black');
        $('.slideUl li:nth-child(5)').css('color', 'black');
        $('.slideUl li:nth-child(6)').css('color', '#EB8242');
        $('.slideUl li:nth-child(7)').css('color', 'black');
        page = 6;
    })
    $('.slideUl li:nth-child(7)').on('click', function () {
        let offset7 = $('#s7').offset().left;
        $('html, body').animate({
            scrollLeft: offset7
        }, 500, 'linear')
        $('.slideUl li:nth-child(1)').css('color', 'black');
        $('.slideUl li:nth-child(2)').css('color', 'black');
        $('.slideUl li:nth-child(3)').css('color', 'black');
        $('.slideUl li:nth-child(4)').css('color', 'black');
        $('.slideUl li:nth-child(5)').css('color', 'black');
        $('.slideUl li:nth-child(6)').css('color', 'black');
        $('.slideUl li:nth-child(7)').css('color', '#EB8242');
        page = 7;
    })
})