import './zalupa.css';
import React from 'react';
import Index from './main.js';
import Music from './music.js';

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {isMusic: false};

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.setState(prevState => ({
      isMusic: !prevState.isMusic
    }));
  }

  render() {
    return(
      <div className='App'>
        <button onClick={this.handleClick}>Переключить страницу (Главная/Музыка)</button>
        {this.state.isMusic ? <Music/> : <Index/>}
      </div>
    );
  }
}

export default App;