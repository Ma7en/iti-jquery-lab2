$(document).ready(function () {
    $("#add").click(function () {
        var name = $("#name").val();
        var age = $("#age").val();

        if (name && age) {
            var row = `
                <tr>
                    <td>
                        ${name}
                    </td>
                    <td>
                        ${age}
                    </td>
                    <td>
                        <button class="delete">Delete</button>
                    </td>
                </tr>
            `;

            $("#persons-list tbody").append(row);
            $("#name").val("");
            $("#age").val("");
        } else {
            alert("Please enter both name and age.");
        }
    });

    $("body").on("click", ".delete", function () {
        $(this).closest("tr").remove();
    });

    $("#search").click(function () {
        var searchValue = $("#search-item").val().toLowerCase();
        $("#persons-list tbody tr").filter(function () {
            $(this).toggle(
                $(this).text().toLowerCase().indexOf(searchValue) > -1
            );
        });
    });

    $("#search-item").on("keyup", function () {
        var searchValue = $(this).val().toLowerCase();
        $("#persons-list tbody tr").filter(function () {
            $(this).toggle(
                $(this).text().toLowerCase().indexOf(searchValue) > -1
            );
        });
    });
});
