$("#go").on("click", function (event) {


    event.preventDefault();

    // Here we grab the text from the input box
    var city = $("#cityInput").val();
    // The API key
    var apiKey = "166a433c57516f51dfab1f7edaed8413";


    // Here we construct our URL
    var WeatherqueryURL = "https://api.openweathermap.org/data/2.5/weather?q=" + city + "&appid=" + apiKey;

    var Uvquery;

    $.ajax({
        url: WeatherqueryURL,
        method: "GET"
    }).then(function (response) {
        $(".result").text(JSON.stringify(response))
    //    getting all of the values from the response that we need
        var temp = Math.floor(((response.main.temp) - 273.15) * 9 / 5 + 32);
        var humidity = response.main.humidity;
        var windSpeed = response.wind.speed;
        var latitude = response.coord.lat;
        var longitude = response.coord.lon;
        
        // query url to find the uv, which lives in it's own api call
        var Uvquery ="http://api.openweathermap.org/data/2.5/uvi?appid="+apiKey+"&lat="+latitude+"&lon="+longitude+"";



        $.ajax({
            url: Uvquery,
            method: "GET"
        }).then(function (uvresult) {
            $("").text(JSON.stringify(uvresult))



        console.log(response);
        var weatherNums = $("<div>");

        // Creating a paragraph tag with the result item's rating
        var tempP = $("<p>").text("Temp: " + temp);
        var humP = $("<p>").text("Humidity: " + humidity);
        var windP = $("<p>").text("Wind Speed: " + windSpeed);
        var uvP = $("<p>").text("UV: " + UV);
        uvP.attr("id", "uvValue");

    
        // need to add CSS classes to style.css
        weatherNums.attr("class", "weatherText");
    
        // Appending the paragraph and image tag to the Div
        weatherNums.append(tempP , humP , windP , uvP);
    
        // Prependng the weatherNums to the HTML page in the "results" div
        $(".results").prepend(weatherNums);
    
    
    });
});