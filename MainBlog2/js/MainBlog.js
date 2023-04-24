$(window).on('load', function () {
    // 포토폴리오 넘어가기 버튼 //
    $('.AnsanButton').on('click', function () {
        let scrollTop = $('html, body').scrollTop();
        $('.SubBox1').css('top', scrollTop);
        $('.SubBox1').css('width', '3800px');
        $('.SubBox1').css('backgroundColor', 'black');
        $('html, body').css('overflow', 'hidden');
        $('html, body').animate({
            scrollLeft: 3550
        }, 6000, function () {
            document.location.href = '../portfolio_homePage/Mainpage.html'
        });
    });
    $('.MatrixButton').on('click', function () {
        let scrollTop = $('html, body').scrollTop();
        $('.SubBox1').css('top', scrollTop);
        $('.SubBox1').css('width', '3800px');
        $('.SubBox1').css('backgroundColor', 'black');
        $('html, body').css('overflow', 'hidden');
        $('html, body').animate({
            scrollLeft: 3550
        }, 6000, function () {
            document.location.href = '../Matrix/MatrixCalculator.html'
        });
    });
    $('.ChangeC_Button').on('click', function () {
        let scrollTop = $('html, body').scrollTop();
        $('.SubBox1').css('top', scrollTop);
        $('.SubBox1').css('width', '3800px');
        $('.SubBox1').css('backgroundColor', 'black');
        $('html, body').css('overflow', 'hidden');
        $('html, body').animate({
            scrollLeft: 3550
        }, 6000, function () {
            document.location.href = '../Changecalculator/Change.html'
        });
    });
    $('.ChangeD_Button').on('click', function () {
        let scrollTop = $('html, body').scrollTop();
        $('.SubBox1').css('top', scrollTop);
        $('.SubBox1').css('width', '3800px');
        $('.SubBox1').css('backgroundColor', 'black');
        $('html, body').css('overflow', 'hidden');
        $('html, body').animate({
            scrollLeft: 3550
        }, 6000, function () {
            document.location.href = '../Hair/Hair.html'
        });
    });
    $('.ChangeE_Button').on('click', function () {
        let scrollTop = $('html, body').scrollTop();
        $('.SubBox1').css('top', scrollTop);
        $('.SubBox1').css('width', '3800px');
        $('.SubBox1').css('backgroundColor', 'black');
        $('html, body').css('overflow', 'hidden');
        $('html, body').animate({
            scrollLeft: 3550
        }, 6000, function () {
            document.location.href = '../character/character.html'
        });
    });
    // scroll event //
    $(window).scroll(function () {
        if ($(window).scrollTop() > 10) {
            $('.iframehead').css('height', '103px');
        } else {
            $('.iframehead').css('height', '133px');
        }
    })

    // scroll event //
    /*let $html = $("html");
    let page = 1;
    $html.animate({
        scrollTop: 0
    }, 10);
    $(window).on("wheel", function (e) {
        console.log(page);
        if ($html.is(":animated")) return;
        if (page == 2) {
            $('.MainBox div:nth-child(1)').css('width', '1100px');
        } else if (page == 3) {
            $('.MainBox div:nth-child(2)').css('width', '1100px');
        } else if (page == 4) {
            $('.MainBox div:nth-child(3)').css('width', '1100px');
        } else if (page == 5) {
            $('.MainBox div:nth-child(4)').css('width', '1100px');
        } else if (page == 6) {
            $('.MainBox div:nth-child(5)').css('width', '1100px');
        }
        if (e.originalEvent.deltaY > 0) {
            if (page == 8) return;
            page++;
        } else if (e.originalEvent.deltaY < 0) {
            if (page == 1) return;
            page--;
        }
        let posTop = (page - 1) * $(window).height();
        $html.animate({
            scrollTop: posTop
        }, 500);
    });*/

    // scroll event //
    $(window).scroll(function () {
        let scrollTop = $('html, body').scrollTop();
        let slideImage1 = $('.MainBox div:nth-child(1)').offset().top;
        let slideImage2 = $('.MainBox div:nth-child(2)').offset().top;
        let slideImage3 = $('.MainBox div:nth-child(3)').offset().top;
        let slideImage4 = $('.MainBox div:nth-child(4)').offset().top;
        let slideImage5 = $('.MainBox div:nth-child(5)').offset().top;
        let slideImage6 = $('.MainBox div:nth-child(6)').offset().top;

        if (scrollTop >= slideImage1 - 500 && scrollTop <= slideImage1 + 500) {
            $('.MainBox div:nth-child(1)').css('width', '1100px');
        } else if (scrollTop >= slideImage2 - 500 && scrollTop <= slideImage2 + 500) {
            $('.MainBox div:nth-child(2)').css('width', '1100px');
        } else if (scrollTop >= slideImage3 - 500 && scrollTop <= slideImage3 + 500) {
            $('.MainBox div:nth-child(3)').css('width', '1100px');
        } else if (scrollTop >= slideImage4 - 500 && scrollTop <= slideImage4 + 500) {
            $('.MainBox div:nth-child(4)').css('width', '1100px');
        } else if (scrollTop >= slideImage5 - 500 && scrollTop <= slideImage5 + 500) {
            $('.MainBox div:nth-child(5)').css('width', '1100px');
        } else if (scrollTop >= slideImage6 - 500 && scrollTop <= slideImage6 + 500) {
            $('.MainBox div:nth-child(6)').css('width', '1100px');
        } else {
            $('.MainBox div:nth-child(1)').css('width', '0px');
            $('.MainBox div:nth-child(2').css('width', '0px');
            $('.MainBox div:nth-child(3)').css('width', '0px');
            $('.MainBox div:nth-child(4)').css('width', '0px');
            $('.MainBox div:nth-child(5)').css('width', '0px');
            $('.MainBox div:nth-child(6)').css('width', '0px');
        }
    })
    // Start, continue button //
    $('.Startbutton').on('click', function () {
        let slideImage1 = $('.AboutBox').offset().top;
        $('html, body').animate({
            scrollTop: slideImage1
        }, 500)
        page = 2;
    })
    $('.Continue_button').on('click', function () {
        let figureImage1 = $('.figure_1').offset().top;
        $('.MainBox div:nth-child(1)').css('width', '1100px');
        $('html, body').animate({
            scrollTop: figureImage1
        }, 500)
        page = 3;
    })
    $('.Continue_button1').on('click', function () {
        let figureImage2 = $('.figure_2').offset().top;
        $('.MainBox div:nth-child(2)').css('width', '1100px');
        $('html, body').animate({
            scrollTop: figureImage2
        }, 500)
        page = 4;
    })
    $('.Continue_button2').on('click', function () {
        let figureImage3 = $('.figure_3').offset().top;
        $('.MainBox div:nth-child(3)').css('width', '1100px');
        $('html, body').animate({
            scrollTop: figureImage3
        }, 500)
        page = 5;
    })
    $('.Continue_button3').on('click', function () {
        let figureImage4 = $('.figure_4').offset().top;
        $('.MainBox div:nth-child(4)').css('width', '1100px');
        $('html, body').animate({
            scrollTop: figureImage4
        }, 500)
        page = 6;
    })
    $('.Continue_button4').on('click', function () {
        let figureImage5 = $('.figure_5').offset().top;
        $('.MainBox div:nth-child(5)').css('width', '1100px');
        $('html, body').animate({
            scrollTop: figureImage5
        }, 500)
        page = 7;
    })
    $('.Continue_button5').on('click', function () {
        let figureImage6 = $('.figure_6').offset().top;
        $('html, body').animate({
            scrollTop: figureImage6
        }, 500)
        page = 8;
    })
    $('.Continue_button6').on('click', function () {
        let figureImage6 = $('.Bravo').offset().top;
        $('html, body').animate({
            scrollTop: figureImage6
        }, 500)
        page = 8;
    })
    // 메인로고 클릭이벤트 //
    $('.Mainlogo').on('click', function () {
        $(location).attr('href', 'MainBlog.html');
    });
    let True = true;
    // 서브 메뉴바 클릭이벤트 //
    $('.xi-bar').on('click', function () {
        if (True == true) {
            $('.Menubar').css('width', '100%');
            $('.xi-bars').css('transform', 'rotate(90deg)');
            $('.MainBox div').css('zIndex', '0');
            $('.MainBox img').css('zIndex', '0');
            True = false;
        } else {
            $('.Menubar').css('width', '0px');
            $('.xi-bars').css('transform', 'rotate(0deg)');
            $('.MainBox div').css('zIndex', '100');
            $('.MainBox img').css('zIndex', '100');
            True = true;
        }
    })

    // 상단메뉴 클릭 이벤트 //
    $('.iframehead img').on('click', function () {
        $('html,body').animate({
            scrollTop: 0,
        }, 500)
    })
    $('.iframehead div:nth-child(2)').on('click', function () {
        $('html, body').animate({
            scrollTop: 1025
        }, 500)
        page = 2;
    })
    $('.iframehead div:nth-child(3)').on('click', function () {
        $('.MainBox div:nth-child(1)').css('width', '1100px');
        $('html, body').animate({
            scrollTop: 2050
        }, 500)
        page = 3;
    })
    $('.iframehead div:nth-child(4)').on('click', function () {
        $('html, body').animate({
            scrollTop: 9050
        }, 500)
        page = 8;
    })

    // My lefe 클릭 이벤트 //
    let true1 = true;
    $('.Bravo').on('click', function () {
        if (true1 == true) {
            $('.Lifeline1').animate({
                opacity: '1'
            }, 1000);
            $('.Bravo').animate({
                top: "900"
            }, 1000)
            $('.BravoText').animate({
                height: "450px",
                opacity: "1"
            }, 1000)
            $('.BravoAge').animate({
                opacity: "1"
            }, 1000)
            true1 = false;
        } else {
            $('.Lifeline1').animate({
                opacity: '0.2'
            }, 1000);
            $('.Bravo').animate({
                top: "300"
            }, 1000)
            $('.BravoText').animate({
                height: "0px",
                opacity: "0"
            }, 1000)
            $('.BravoAge').animate({
                opacity: "0"
            }, 1000)
            true1 = true;
        }
    })
    let true2 = true;
    $('.Mylife').on('click', function () {
        if (true2 == true) {
            $('.Lifeline2').animate({
                opacity: '1'
            }, 1000);
            $('.Mylife').animate({
                top: "900"
            }, 1000)
            $('.MylifeText').animate({
                height: "450px",
                opacity: "1"
            }, 1000)
            $('.MylifeAge').animate({
                opacity: "1"
            }, 1000)
            true2 = false;
        } else {
            $('.Lifeline2').animate({
                opacity: '0.2'
            }, 1000);
            $('.Mylife').animate({
                top: "550"
            }, 1000)
            $('.MylifeText').animate({
                height: "0px",
                opacity: "0"
            }, 1000)
            $('.MylifeAge').animate({
                opacity: "0"
            }, 1000)
            true2 = true;
        }
    })
    let true3 = true;
    $('.MylifeK').on('click', function () {
        if (true3 == true) {
            $('.Lifeline3').animate({
                opacity: '1'
            }, 1000);
            $('.MylifeK').animate({
                top: "900"
            }, 1000)
            $('.MylifeKText').animate({
                height: "450px",
                opacity: "1"
            }, 1000)
            $('.MylifeKAge').animate({
                opacity: "1"
            }, 1000)
            true3 = false;
        } else {
            $('.Lifeline3').animate({
                opacity: '0.2'
            }, 1000);
            $('.MylifeK').animate({
                top: "800"
            }, 1000)
            $('.MylifeKText').animate({
                height: "0px",
                opacity: "0"
            }, 1000)
            $('.MylifeKAge').animate({
                opacity: "0"
            }, 1000)
            true3 = true;
        }
    })
});
