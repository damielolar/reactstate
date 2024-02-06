import React, { Component } from 'react';
import './App.css';
import Photo from './assets/Gighadid.jpg'

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      person: {
        fullName: 'Gigi Hadid',  
        bio: 'American model and television personality.In 2016, she was named International Model  of the Year by the British Fashion Council. Throughout her entire career, Hadid has made 45 appearances in international Vogue..',
        imgSrc: Photo,  
        profession: 'A runway model', 
      },
      shows: false,
      mountedTime: new Date(),
    };
  }

  toggleShow = () => {
    this.setState((prevState) => ({
      shows: !prevState.shows,  
    }));
  };

  // timed interval
  componentDidMount() {
    this.interval = setInterval(() => this.setState({}), 1000);
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  render() {
    const { fullName, bio, imgSrc, profession } = this.state.person;
    const { shows, mountedTime } = this.state;

    return (
      <div className="App">
        <button onClick={this.toggleShow}>Toggle Profile</button>

        {shows && (
          <div className='container'>
            <h2>{fullName}</h2>
            <p>{bio}</p>

            <p>{profession}</p>
            <img src={imgSrc} alt="Person" />
            <p>Time since mounted: {Math.round((new Date() - mountedTime) / 1000)} seconds</p>
          </div>
        )}
      </div>
    );
  }
}

export default App;
