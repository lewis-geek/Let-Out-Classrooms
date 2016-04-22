/**
 * Created by Lewis on 16/4/21.
 */
/**
 * Created by Lewis on 16/4/21.
 */
/**
 * Created by Lewis on 16/4/19.
 */

$(document).ready(function () {
    /*
     animation
     */
    jQuery.validator.addMethod("isMobile", function(value, element) {
        var length = value.length;
        var mobile = /^(13[0-9]{9})|(18[0-9]{9})|(14[0-9]{9})|(17[0-9]{9})|(15[0-9]{9})$/;
        return this.optional(element) || (length == 11 && mobile.test(value));
    }, "请正确填写您的手机号码");

    $("#register-form").validate({
        rules : {
            phone : {
                required : true,
                minlength : 11,
                isMobile : true
            }
        },
        messages : {
            phone : {
                required : "请输入手机号",
                minlength : "确认手机不能小于11个字符",
                isMobile : "请正确填写您的手机号码"
            }
        }
    });
});
