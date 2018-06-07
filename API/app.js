

function loadDate() {
    var currentDate = new Date();
    var dateString = currentDate.toString()
                        .split(" ")
                        .splice(0,4)
                        .join("");
                        
    $("#date").text(dateString);
}   

function loadWeather(){
    var weather = $("#weather");
    var ur1 = "https://api.forecast.io/forecast/";
    var apiKey = "5530eb992f16ca7992b0c543782107e5";
    
function success(position) {
        var latitude = position.coords.latitude;
        var longitude = position.coords.longitude;
        
 $.getJSON(url + apiKey + "/" + latitude + "," + longitude + "?units=si&callback=?", function(data) {
         weather.text("Based on your apparent location, it is " + data.currently.temperature + "° C right now");
        });
      }
      
function error() {
         alert("Unable to retrieve your location for weather");
      }
      
      
      navigator.geolocation.getCurrentPosition(success, error);
      
      
      weather.text("fetching weather... (need permission for location)");
}

function loadNews(){
    var news = $("#news");
    var url = "https://newsapi.org/v1/articles?source=google-news&sortBy=top&apiKey=";
    var apiKey = "526f6f173ab84a02b92f7c2db191744d";
    
    $.getJSON(url + apiKey, function(data) {
        
        var titles = data.articles.map(function(articles) {
            return "<a href='" + articles.url + "'>" + articles.titles + "</a>";
        });
        news.html(titles.join("<br><br>"));
    });
    
    news.text("fetching news...");
}

loadDate();
loadWeather();
loadNews();


    
