import './zalupa.css';
import React from 'react';
import Index from './main.js';
import Music from './music.js';

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      isMusic: false,
    };

    this.musicOff = this.musicOff.bind(this);
    this.musicOn = this.musicOn.bind(this);
  }

  active = {
    backgroundColor: '#8fcb9b',
    color: '#12130f'
  }

  noActive = {
    backgroundColor: '#333',
    color: '#f2f2f2'
  }

  musicOn() {
    this.setState(prevState => ({
      isMusic: true
    }));
  }

  musicOff() {
    this.setState(prevState => ({
      isMusic: false
    }));
  }

  render() {
    return(
      <div className='App'>
        <div class="topnav">
            <button onClick={this.musicOff} style={this.state.isMusic ? this.noActive : this.active}>Главная</button>
            <button onClick={this.musicOn} style={this.state.isMusic ? this.active : this.noActive}>Музыка</button>
            <a href="https://github.com/creepy0964">GitHub</a>
            <a href="https://yyyyyyy.info/">Пожертвовать</a>
        </div>        
        {this.state.isMusic ? <Music/> : <Index/>}
      </div>
    );
  }
}

export default App;