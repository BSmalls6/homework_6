var city = $("#cityInput").val();

$(document).ready(function () {
    var pastButtons = localStorage.getItem('history');
$(".searchBox").append(pastButtons)
});

$("#go").on("click", function (event) {

    var city = $("#cityInput").val();
    var historyBox = $("<div></div>");
    historyBox.attr("class" , "reSearch")
    var searchHistory = $("<button>").text(city);
    historyBox.attr("class", "list-group");
    historyBox.append(searchHistory);
    $(".searchBox").append(historyBox);

    localStorage.setItem("history" , searchHistory )

    var pastButtons = localStorage.getItem('history');


});
$(".reSearch").on("click", function (event) {

});