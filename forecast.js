$(document).ready(function () {
    $("#one").hide();
    $("#two").hide();
    $("#three").hide();
    $("#four").hide();
    $("#five").hide();

});
var today = moment().format('YYYY MM DD');

var tomorrow = new Date();
tomorrow.setDate(tomorrow.getDate() + 1);

var day2 = new Date();
tomorrow.setDate(tomorrow.getDate() + 2);

var day3 = new Date();
tomorrow.setDate(tomorrow.getDate() + 3);

var day4 = new Date();
tomorrow.setDate(tomorrow.getDate() + 4);

var day5 = new Date();
tomorrow.setDate(tomorrow.getDate() + 5);
// var day2 = moment().add(2, 'days');
// var day3 = moment().add(3, 'days');
// var day4 = moment().add(4, 'days');
// var day5 = moment().add(5, 'days');
//
//  console.log(today);
// console.log(tomorrow);
// console.log(day2);
// console.log(day3);
// console.log(day4);
// console.log(day5);





$("#go").on("click", function (event) {
    event.preventDefault();
    $("#one").show();
    $("#two").show();
    $("#three").show();
    $("#four").show();
    $("#five").show();


    var city = $("#cityInput").val();
    var apiKey = "166a433c57516f51dfab1f7edaed8413";

    var forecastQueryURL = "https://api.openweathermap.org/data/2.5/forecast/daily?q=" + city + "&cnt=5" + "&appid=" + apiKey;

    $.ajax({
        url: forecastQueryURL,
        method: "GET"
    }).then(function (forecast) {
        console.log(forecast);
        var tomoTemp = Math.floor(JSON.stringify((forecast.list[0].temp.day) - 273.15) * 9 / 5 + 32);
        var day2Temp = Math.floor(JSON.stringify((forecast.list[1].temp.day) - 273.15) * 9 / 5 + 32);
        var day3Temp = Math.floor(JSON.stringify((forecast.list[2].temp.day) - 273.15) * 9 / 5 + 32);
        var day4Temp = Math.floor(JSON.stringify((forecast.list[3].temp.day) - 273.15) * 9 / 5 + 32);
        var day5Temp = Math.floor(JSON.stringify((forecast.list[4].temp.day) - 273.15) * 9 / 5 + 32);

        var tomoHumi = JSON.stringify((forecast.list[0].humidity));
        var day2Humi = JSON.stringify((forecast.list[1].humidity));
        var day3Humi = JSON.stringify((forecast.list[2].humidity));
        var day4Humi = JSON.stringify((forecast.list[3].humidity));
        var day5Humi = JSON.stringify((forecast.list[4].humidity));

        var tomoicon = forecast.list[0].weather[0].icon;
        var day2icon = forecast.list[1].weather[0].icon;
        var day3icon = forecast.list[2].weather[0].icon;
        var day4icon = forecast.list[3].weather[0].icon;
        var day5icon = forecast.list[4].weather[0].icon;

        $("#one").append("Date:" + " " + tomorrow);
        $("#two").append("Date:" + " " + day2);
        $("#three").append("Date:" + " " + day3);
        $("#four").append("Date:" + " " + day4);
        $("#five").append("Date:" + " " + day5);

        var tomoimg = $("<img>").attr('src', "http://openweathermap.org/img/wn/" + tomoicon + "@2x.png")
        var day2img = $("<img>").attr('src', "http://openweathermap.org/img/wn/" + day2icon + "@2x.png")
        var day3img = $("<img>").attr('src', "http://openweathermap.org/img/wn/" + day3icon + "@2x.png")
        var day4img = $("<img>").attr('src', "http://openweathermap.org/img/wn/" + day4icon + "@2x.png")
        var day5img = $("<img>").attr('src', "http://openweathermap.org/img/wn/" + day5icon + "@2x.png")


        
        $("#one").append(tomoimg);
        $("#one").append("<br>");

        $("#two").append(day2img);
        $("#two").append("<br>");

        $("#three").append(day3img);
        $("#three").append("<br>");

        $("#four").append(day4img);
        $("#four").append("<br>");

        $("#five").append(day5img);
        $("#five").append("<br>");



        $("#one").append('Temp:' + ' ' + tomoTemp + "f");
        $("#one").append("<br>");

        $("#two").append('Temp:' + ' ' + day2Temp + "f");
        $("#two").append("<br>");

        $("#three").append('Temp:' + ' ' + day3Temp + "f");
        $("#three").append("<br>");

        $("#four").append('Temp:' + ' ' + day4Temp + "f");
        $("#four").append("<br>");

        $("#five").append('Temp:' + ' ' + day5Temp + "f");
        $("#five").append("<br>");


        $("#one").append('Humidity:' + ' ' + tomoHumi);
        $("#two").append('Humidity:' + ' ' + day2Humi);
        $("#three").append('Humidity:' + ' ' + day3Humi);
        $("#four").append('Humidity:' + ' ' + day4Humi);
        $("#five").append('Humidity:' + ' ' + day5Humi);

    });

});