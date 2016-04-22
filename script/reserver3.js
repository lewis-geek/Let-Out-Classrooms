/**
 * Created by Lewis on 16/4/22.
 */
/**
 * Created by Lewis on 16/4/19.
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

});
