/**
 * Created by Lewis on 16/4/20.
 */
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


    (function () {
        var one = document.querySelector('#one'),
            two = document.querySelector('#two'),
            three = document.querySelector('#three'),
            four = document.querySelector('#four'),
            five = document.querySelector('#five');

        one.onmouseover = function () {
            this.className = "heart-hover";
            two.className = "heart-off";
            three.className = "heart-off";
            four.className = "heart-off";
            five.className = "heart-off";
        };

        two.onmouseover = function () {
            this.className = "heart-hover";
            one.className = "heart-on";
            three.className = "heart-off";
            four.className = "heart-off";
            five.className = "heart-off";
        };

        three.onmouseover = function () {
            this.className = "heart-hover";
            one.className = "heart-on";
            two.className = "heart-on";
            four.className = "heart-off";
            five.className = "heart-off";
        };

        four.onmouseover = function () {
            this.className = "heart-hover";
            one.className = "heart-on";
            two.className = "heart-on";
            three.className = "heart-on";
            five.className = "heart-off";
        };

        five.onmouseover = function () {
            this.className = "heart-hover";
            one.className = "heart-on";
            two.className = "heart-on";
            three.className = "heart-on";
            four.className = "heart-on";
        };
    })();

    $('.calendar').fullCalendar({
        header: {
            left: 'prev,next today',
            center: 'title',
            right: 'month,basicWeek,basicDay'
        },
        defaultDate: '2016-01-12',
        editable: true,
        eventLimit: true, // allow "more" link when too many events
        events: [
            {
                title: 'All Day Event',
                start: '2016-01-01'
            },
            {
                title: 'Long Event',
                start: '2016-01-07',
                end: '2016-01-10'
            },
            {
                id: 999,
                title: 'Repeating Event',
                start: '2016-01-09T16:00:00'
            },
            {
                id: 999,
                title: 'Repeating Event',
                start: '2016-01-16T16:00:00'
            },
            {
                title: 'Conference',
                start: '2016-01-11',
                end: '2016-01-13'
            },
            {
                title: 'Meeting',
                start: '2016-01-12T10:30:00',
                end: '2016-01-12T12:30:00'
            },
            {
                title: 'Lunch',
                start: '2016-01-12T12:00:00'
            },
            {
                title: 'Meeting',
                start: '2016-01-12T14:30:00'
            },
            {
                title: 'Happy Hour',
                start: '2016-01-12T17:30:00'
            },
            {
                title: 'Dinner',
                start: '2016-01-12T20:00:00'
            },
            {
                title: 'Birthday Party',
                start: '2016-01-13T07:00:00'
            },
            {
                title: 'Click for Google',
                url: 'http://google.com/',
                start: '2016-01-28'
            }
        ]
    });

});
