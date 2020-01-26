$( document ).ready(function() {
    var searchTerm = "Denver";
    var queryURL = "https://api.openweathermap.org/data/2.5/forecast/daily?q=Denver,840&cnt=10";
    var queryURLtwo = "api.openweathermap.org/data/2.5/forecast?q=Denver,us"
    var apiKey = "f6df7e32fa8a0e7d8e049359ebaa2318";



    

    $.ajax({
        url: "https://api.openweathermap.org/data/2.5/forecast?q=Denver,us&appid=f6df7e32fa8a0e7d8e049359ebaa2318",
        method: "GET"
    }).then(function(response){
        console.log(response);
    });

    $.ajax({
        url:  "https://api.openweathermap.org/data/2.5/weather?q=Denver,us&units=imperial&appid=f6df7e32fa8a0e7d8e049359ebaa2318",
        method: "GET"
    }).then(function(response){
        console.log(response);
    });
    $.ajax({
        url:  "https:/api.openweathermap.org/data/2.5/uvi?lat=37.75&lon=-122.37&appid=f6df7e32fa8a0e7d8e049359ebaa2318",
        method: "GET"
    }).then(function(response){
        console.log(response);
    });
});