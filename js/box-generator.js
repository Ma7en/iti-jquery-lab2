$(document).ready(function () {
    function createNewDiv(colorClass) {
        return $("<div></div>").addClass(colorClass);
    }

    function getNextColorClass(currentClass) {
        switch (currentClass) {
            case "red":
                return "blue";
            case "blue":
                return "orange";
            case "orange":
                return "green";
            case "green":
                return "red";
        }
    }

    $("body").on("mouseenter", "div", function () {
        // console.log("0->", $(this).attr("class"));
        var currentClass = $(this).attr("class").split(" ")[0];
        var nextColorClass = getNextColorClass(currentClass);
        $(this).addClass(nextColorClass);
    });

    $("body").on("mouseleave", "div", function () {
        var currentClass = $(this).attr("class").split(" ")[0];
        $(this).attr("class", currentClass);
    });

    $("body").on("click", "div", function () {
        if (!$(this).data("clicked")) {
            var currentClass = $(this).attr("class").split(" ")[0];
            var nextColorClass = getNextColorClass(currentClass);
            var newDiv = createNewDiv(nextColorClass);
            $(this).after(newDiv);
            $(this).data("clicked", true);
        }
    });
});
