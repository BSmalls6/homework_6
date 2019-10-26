$("#go").on("click", function (event) {
    event.preventDefault();
    // get todays date

    // Here we grab the text from the input box
    var city = $("#cityInput").val();
    // The ApI key
    var apiKey = "166a433c57516f51dfab1f7edaed8413";


    // Here we construct our URL
    var WeatherqueryURL = "https://api.openweathermap.org/data/2.5/weather?q=" + city + "&appid=" + apiKey;
    var Uvquery;
// Ajax call for current weather
    $.ajax({
        url: WeatherqueryURL,
        method: "GET"
    }).then(function (response) {
        var temp = Math.floor(JSON.stringify((response.main.temp) - 273.15) * 9 / 5 + 32);
        var humidity = JSON.stringify(response.main.humidity);
        var windSpeed = JSON.stringify(response.wind.speed);
        var latitude = JSON.stringify(response.coord.lat);
        var longitude = JSON.stringify(response.coord.lon);
        var weatherIcon = (response.weather[0].icon)
        
        var today = new Date();
        var todate = (today.getMonth() + 1) + '/' + today.getDate(); +'/' + today.getFullYear();
        // console.log(response);
    //    create div for weather numbers to fit in
        var weatherNums = $("<div></div>");
        // // Creating a paragraph tag with the result item's rating
        var datep = $("<h2>").text("Date: " + todate);
        var wIcon = $("<img>").attr('src' , "http://openweathermap.org/img/wn/"+weatherIcon+"@2x.png")
        var tempp = $("<p>").text("Temp: " + temp +"f");
        var hump = $("<p>").text("Humidity: " + humidity+'%');
        var windp = $("<p>").text("Wind Speed: " + windSpeed+' '+'mph');
        
        // // need to add CSS classes to style.css
        weatherNums.attr("class", "weatherText");
        // // Appending the paragraph and image tag to the Div
        weatherNums.append(datep, wIcon , tempp, hump, windp);
        $(".result").html(weatherNums);
    });
});