$(window).on('load', function () {
    let i = 0;
    // About skill //
    $('.SkillName button:nth-child(1)').on('click', function () {
        $('.SkillName button:nth-child(1)').css('backgroundColor','gray');
        $('.SkillName button:nth-child(2)').css('backgroundColor','');
        $('.SkillName button:nth-child(3)').css('backgroundColor','');
        $('.SkillName2 button:nth-child(1)').css('backgroundColor','');
        $('.SkillName2 button:nth-child(2)').css('backgroundColor','');
        $('.SkillName2 button:nth-child(3)').css('backgroundColor','');
        $('.SkillName3 button:nth-child(1)').css('backgroundColor','');
        const stop = setInterval(() => {
            if (i < 96) {
                $('.Skilldrow article').css('background', `conic-gradient(#212121 0% ${i}%, gray ${i}% 100%)`);
                $('.Skilldrow article').html(`${i}%`)
                i++;
            } else {
                clearInterval(stop);
                i = 0;
            }
        }, 7);
    })
    $('.SkillName button:nth-child(2)').on('click', function () {
        $('.SkillName button:nth-child(1)').css('backgroundColor','');
        $('.SkillName button:nth-child(2)').css('backgroundColor','gray');
        $('.SkillName button:nth-child(3)').css('backgroundColor','');
        $('.SkillName2 button:nth-child(1)').css('backgroundColor','');
        $('.SkillName2 button:nth-child(2)').css('backgroundColor','');
        $('.SkillName2 button:nth-child(3)').css('backgroundColor','');
        $('.SkillName3 button:nth-child(1)').css('backgroundColor','');
        const stop = setInterval(() => {
            if (i < 93) {
                $('.Skilldrow article').css('background', `conic-gradient(#212121 0% ${i}%, gray ${i}% 100%)`);
                $('.Skilldrow article').html(`${i}%`)
                i++;
            } else {
                clearInterval(stop);
                i = 0;
            }
        }, 7);
    })
    $('.SkillName button:nth-child(3)').on('click', function () {
        $('.SkillName button:nth-child(1)').css('backgroundColor','');
        $('.SkillName button:nth-child(2)').css('backgroundColor','');
        $('.SkillName button:nth-child(3)').css('backgroundColor','gray');
        $('.SkillName2 button:nth-child(1)').css('backgroundColor','');
        $('.SkillName2 button:nth-child(2)').css('backgroundColor','');
        $('.SkillName2 button:nth-child(3)').css('backgroundColor','');
        $('.SkillName3 button:nth-child(1)').css('backgroundColor','');
        const stop = setInterval(() => {
            if (i < 94) {
                $('.Skilldrow article').css('background', `conic-gradient(#212121 0% ${i}%, gray ${i}% 100%)`);
                $('.Skilldrow article').html(`${i}%`)
                i++;
            } else {
                clearInterval(stop);
                i = 0;
            }
        }, 7);
    })
    $('.SkillName2 button:nth-child(1)').on('click', function () {
        $('.SkillName button:nth-child(1)').css('backgroundColor','');
        $('.SkillName button:nth-child(2)').css('backgroundColor','');
        $('.SkillName button:nth-child(3)').css('backgroundColor','');
        $('.SkillName2 button:nth-child(1)').css('backgroundColor','gray');
        $('.SkillName2 button:nth-child(2)').css('backgroundColor','');
        $('.SkillName2 button:nth-child(3)').css('backgroundColor','');
        $('.SkillName3 button:nth-child(1)').css('backgroundColor','');
        const stop = setInterval(() => {
            if (i < 51) {
                $('.Skilldrow article').css('background', `conic-gradient(#212121 0% ${i}%, gray ${i}% 100%)`);
                $('.Skilldrow article').html(`${i}%`)
                i++;
            } else {
                clearInterval(stop);
                i = 0;
            }
        }, 7);
    })
    $('.SkillName2 button:nth-child(2)').on('click', function () {
        $('.SkillName button:nth-child(1)').css('backgroundColor','');
        $('.SkillName button:nth-child(2)').css('backgroundColor','');
        $('.SkillName button:nth-child(3)').css('backgroundColor','');
        $('.SkillName2 button:nth-child(1)').css('backgroundColor','');
        $('.SkillName2 button:nth-child(2)').css('backgroundColor','gray');
        $('.SkillName2 button:nth-child(3)').css('backgroundColor','');
        $('.SkillName3 button:nth-child(1)').css('backgroundColor','');
        const stop = setInterval(() => {
            if (i < 63) {
                $('.Skilldrow article').css('background', `conic-gradient(#212121 0% ${i}%, gray ${i}% 100%)`);
                $('.Skilldrow article').html(`${i}%`)
                i++;
            } else {
                clearInterval(stop);
                i = 0;
            }
        }, 7);
    })
    $('.SkillName2 button:nth-child(3)').on('click', function () {
        $('.SkillName button:nth-child(1)').css('backgroundColor','');
        $('.SkillName button:nth-child(2)').css('backgroundColor','');
        $('.SkillName button:nth-child(3)').css('backgroundColor','');
        $('.SkillName2 button:nth-child(1)').css('backgroundColor','');
        $('.SkillName2 button:nth-child(2)').css('backgroundColor','');
        $('.SkillName2 button:nth-child(3)').css('backgroundColor','gray');
        $('.SkillName3 button:nth-child(1)').css('backgroundColor','');
        const stop = setInterval(() => {
            if (i < 52) {
                $('.Skilldrow article').css('background', `conic-gradient(#212121 0% ${i}%, gray ${i}% 100%)`);
                $('.Skilldrow article').html(`${i}%`)
                i++;
            } else {
                clearInterval(stop);
                i = 0;
            }
        }, 7);
    })
    $('.SkillName3 button:nth-child(1)').on('click', function () {
        $('.SkillName button:nth-child(1)').css('backgroundColor','');
        $('.SkillName button:nth-child(2)').css('backgroundColor','');
        $('.SkillName button:nth-child(3)').css('backgroundColor','');
        $('.SkillName2 button:nth-child(1)').css('backgroundColor','');
        $('.SkillName2 button:nth-child(2)').css('backgroundColor','');
        $('.SkillName2 button:nth-child(3)').css('backgroundColor','');
        $('.SkillName3 button:nth-child(1)').css('backgroundColor','gray');
        const stop = setInterval(() => {
            if (i < 35) {
                $('.Skilldrow article').css('background', `conic-gradient(#212121 0% ${i}%, gray ${i}% 100%)`);
                $('.Skilldrow article').html(`${i}%`)
                i++;
            } else {
                clearInterval(stop);
                i = 0;
            }
        }, 7);
    })
})