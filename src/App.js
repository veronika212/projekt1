import React, { Component } from 'react';
import Slider from 'react-slick';
import './App.css';

import Footer from './components/common/Footer/Footer';

class App extends Component {
  state = {
    currentSlide: 0,
  };

  componentDidMount() {
    console.log(this.slider, 'slider');
  }

  render() {
    const settings = {
      dots: false,
      infinite: false,
      swipe: false,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
    };
    return (
      <div className="App">
        <button
          onClick={() => {
            this.mainSlider.slickGoTo(3);
          }}
        >
          next
        </button>
        <h2>Title</h2>
        <Slider {...settings} ref={slider => (this.mainSlider = slider)}>
          <div>
            <p>Slide 1</p>
          </div>

          <div>
            <p>Slide 2</p>
          </div>

          <div>
            <p>Slide 3</p>
          </div>

          <div>
            <p>Slide 4</p>
          </div>

          <div>
            <p>Slide 5</p>
          </div>

          <div>
            <p>Slide 6</p>
          </div>
        </Slider>
        <Footer />
      </div>
    );
  }
}

export default App;
