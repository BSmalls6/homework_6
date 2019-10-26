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
        var latitude = JSON.stringify(response.coord.lat);
        var longitude = JSON.stringify(response.coord.lon);
        
        // var UV = uvresult.value;
        
        // call the uv api, get the results 
        Uvquery = "http://api.openweathermap.org/data/2.5/uvi?appid=" + apiKey + "&lat=" + latitude + "&lon=" + longitude + "";
        $.ajax({
            url: Uvquery,
            method: "GET"
        }).then(function (uvresult) {
            
        
        
            var uvNum = JSON.stringify(uvresult.value)
            var uvp = $("<p>").text("UV: " + uvNum);
            uvp.attr("id", "uvValue");
            console.log(uvNum);
            // // need to add CSS classes to style.css
            // // Appending the paragraph and image tag to the Div
            $(".result").append(uvp);
        });



        // query url to find the uv, which lives in it's own api call

        



  
    });


});