import React from 'react';

export default class Weather extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      weather: []
    }
    this.fetchWeather = this.fetchWeather.bind(this);
  }

  fetchWeather() {
    return $.ajax({
      url: "http://api.openweathermap.org/data/2.5/forecast?id=5391997&APPID=90854e05b4fb717679b8751d74a507c3"
    }).then(response => this.setState({ weather: JSON.stringify(response) }));
  }

  render() {
    return (
      <div>
        {this.state.weather.map(el => <h3>el.list.main.temp</h3>)}
        <button onClick={this.fetchWeather}>Weather</button>
        <h1>Loading weather...</h1>
      </div>
    )
  }
}