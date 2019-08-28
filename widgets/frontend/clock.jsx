import React from 'react';

export default class Clock extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      time: new Date()
    };
    this.tick = this.tick.bind(this);
    
  }

  componentDidMount() {
    this.stopTick = setInterval(this.tick, 1000);
  }

  componentWillUnmount() {
    clearInterval(this.stopTick);
  }

  tick() {
    this.setState({ time: new Date() });
  };


  render() {
    return (
      <div id="clock">
        <h1>Clock</h1>
        <div id="stuff">
          <h2> <span>Time:</span>  <span>{this.state.time.getHours()}:{this.state.time.getMinutes()}:{this.state.time.getSeconds()}</span></h2>
          <h2><span>Date:</span> <span>{this.state.time.toDateString()}</span></h2>
        </div>
      </div>
    )
    
  }
}