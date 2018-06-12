var React = require('react');
var WeatherForm = require('WeatherForm');
var WeatherMessage = require('WeatherMessage');
var openWeather = require('openWeather');

var Weather = React.createClass({
  getInitialState: function() {
    return {
      location: 'Zurich',
      temp: 20
    }
  },
  handleSearch: function (location) {
    var that = this;

    openWeather.getTemp(location).then(function(temp) {
      that.setState({
        location: location,
        temp: temp
      });
    }, function (errorMessage) {
        alert(errorMessage);
    });
  
  },
  render: function () {
    var {temp, location} = this.state;
    return (
        <div>
          <h3>Weather Compoents</h3>
          <WeatherForm onSearch={this.handleSearch}/>
          <WeatherMessage temp={temp} location={location}/>
        </div>

    )
  }
});

module.exports = Weather;
