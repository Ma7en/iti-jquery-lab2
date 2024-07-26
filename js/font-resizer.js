$(document).ready(function () {
    $("#increase").click(function () {
        $(".content").animate({}, 500, function () {
            if (parseInt($(this).css("font-size")) < 50) {
                $(this).css(
                    "font-size",
                    parseInt($(this).css("font-size")) + 5 + "px"
                );
                $(".error").text("");
            } else {
                $(".error").text("you have");
            }
        });
    });
    $("#decrease").click(function () {
        $(".content").animate({}, 500, function () {
            if (parseInt($(this).css("font-size")) > 10) {
                $(this).css(
                    "font-size",
                    parseInt($(this).css("font-size")) - 5 + "px"
                );
                $(".error").text("");
            } else {
                $(".error").toggle().text("you have");
            }
        });
    });
});