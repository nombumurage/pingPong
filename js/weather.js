// var apiKey = require('./../.env').apiKey;
//
// function Weather(){
// }
// Weather.prototype.getWeather = function(city) {
//   $.get('http://api.openweathermap.org/data/2.5/weather?q=' + city + '&appid=' + apiKey).then(function(response) {
//     $('.showWeather').text("The humidity in " + city + " is " + response.main.humidity + "%");
//   }).fail(function(error) {
//     $('.showWeather').text(error.responseJSON.message);
//   });
// }
//
// exports.weatherModule = Weather;
var apiKey = require('./../.env').apiKey;

Weather = function(){
}

Weather.prototype.getWeather = function(city, displayFunction) {
  $.get('http://api.openweathermap.org/data/2.5/weather?q=' + city + '&appid=' + apiKey).then(function(response) {
    displayFunction(city, response.main.humidity);
  }).fail(function(error) {
    $('.showWeather').text(error.responseJSON.message);
  });
}

exports.weatherModule = Weather;
