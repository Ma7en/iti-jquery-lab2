$(document).ready(function () {
    var myName = "AHMED";
    var attempts = 0;
    var correctLetters = "";

    $("#my-name").on("input", function () {
        var inputVal = $(this).val().toUpperCase();
        attempts++;
        $(".counter").text(attempts);

        correctLetters = "";
        for (var i = 0; i < inputVal.length; i++) {
            if (inputVal[i] === myName[i]) {
                correctLetters += inputVal[i];
            } else {
                correctLetters += "_";
            }
        }

        if (inputVal === myName) {
            $(".result").text(
                `Congratulations! You did it in (${attempts}) items.`
            );
            $("#my-name").prop("disabled", true);
        } else {
            $(".result").text("Correct so far: " + correctLetters);
        }
    });
});
