$(document).ready(function () {
    /*
     animation
     */
    (function () {
        $('#search input').focus(function () {
            $('#search').css('background-color', '#f9f9f9');
        });
        $('#search input').focusout(function () {
            $('#search').css('background-color', 'transparent');
        })
    })();

    /*
     轮播图
     */

    $('.slider-for').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        fade: true,
        asNavFor: '.slider-nav'
    });
    $('.slider-nav').slick({
        slidesToShow: 4,
        slidesToScroll: 1,
        asNavFor: '.slider-for',
        //dots: true,
        centerMode: true,
        focusOnSelect: true
    });

    /*
     多选菜单
     */

    $('.selectize').selectize({
        create: true,
        sortField: 'text'
    });

    /*
     日期时间选择
     */

    var bIsPopup = displayPopup();

    $("#dtBox").DateTimePicker(
        {
            isPopup: bIsPopup,
            language: 'zh-CN',
            addEventHandlers: function () {
                var dtPickerObj = this;

                $(window).resize(function () {
                    bIsPopup = displayPopup();
                    dtPickerObj.setIsPopup(bIsPopup);
                });
            }
        });

    function displayPopup() {
        if ($(document).width() >= 768)
            return false;
        else
            return true;
    }
});
