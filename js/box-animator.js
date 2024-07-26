$(document).ready(function () {
    $(".box").css("position", " relative");
    $(".box").animate(
        {
            left: "500px",
            width: "300px",
            height: "300px",
        },
        2000,
        function () {
            $(this).css("background-color", "blue");
        }
    );
    $(".box").animate(
        {
            bottom: "-500px",
            width: "100px",
            height: "100px",
        },
        2000,
        function () {
            $(this).css("background-color", "yellow");
        }
    );
    $(".box").animate(
        {
            left: "0px",
            width: "300px",
            height: "300px",
        },
        2000,
        function () {
            $(this).css("background-color", "green");
        }
    );
    $(".box").animate(
        {
            bottom: "0px",
            width: "100px",
            height: "100px",
        },
        2000,
        function () {
            $(this).css("background-color", "red");
        }
    );
});
