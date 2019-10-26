var city = $("#cityInput").val();

$(document).ready(function () {
    var pastButtons = localStorage.getItem('history');
$(".searchBox").append(pastButtons)
});

$("#go").on("click", function (event) {

    var city = $("#cityInput").val();
    var historyBox = $("<div></div>");
    var searchHistory = $("<button>").text(city);
    searchHistory.attr("id" , "go")

    historyBox.attr("class", "list-group");
    historyBox.append(searchHistory[0].outerHTML);
    $(".searchBox").append(historyBox);

    localStorage.setItem("history" , searchHistory[0].outerHTML)
    console.log(searchHistory[0].outerHTML);
});
