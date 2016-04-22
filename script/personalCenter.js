/**
 * Created by Lewis on 16/4/22.
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
});
