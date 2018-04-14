//Happy Sun with Sad Cloud
import React from 'react';
import ReactDOM from 'react-dom';

class Sun extends React.Component {
  constructor(props) {
    super(props);

  }

  componentDidMount() {
    //raindrops
    function getRandomInt(max) {
      return Math.floor(Math.random() * Math.floor(max));
    };

    function rain(drop, rate) {
      if (drop > 0) {
        setTimeout(function () {
          $('#drop_' + getRandomInt(250)).addClass('raining');
          drop--;
          rain(drop, rate);
        }, 300);
      }
    };

    function raindrop(number, area) {
      if (number > 0) {
        var drop = '<div className="drop rain" id="drop_' + number + '"></div>';

        $('.cloud').append(drop);
        $('#drop_' + number).css('left', area);
        number--;
        raindrop(number, getRandomInt(200));
      }
    };

    raindrop(50, getRandomInt(500));
    rain(100, 200);

  }

  render() {
    return (
      <div className="box">
        <div className="sun">
          <div className="face">
            <div className="pupil-left"></div>
            <div className="pupil-right"></div>
            <div className="smile"></div>
          </div>
          <div className="ray">
            <div className="beam r1"></div>
            <div className="beam r2"></div>
            <div className="beam r3"></div>
            <div className="beam r4"></div>
            <div className="beam r5"></div>
            <div className="beam r6"></div>
            <div className="beam r7"></div>
            <div className="beam r8"></div>
            <div className="beam r9"></div>
            <div className="beam r10"></div>
          </div>
        </div>
        <div className="cloud">
          <div className="cloud-left"></div>
          <div className="cloud-right"></div>
          <div className="cloud-bottom"></div>
          <div className="eye-left">
            <div className="pupil"></div>
          </div>
          <div className="eye-right">
            <div className="pupil"></div>
          </div>
          <div className="mouth"></div>
          <div className="tear-left"></div>
          <div className="tear-right"></div>
        </div>
      </div>
    );
  }
}

export default Sun;