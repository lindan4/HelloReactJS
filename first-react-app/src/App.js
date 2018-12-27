import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person.js';

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>Hi. I am some react app.</h1>
        <p>I don't know why though.</p>
        <Person name="Jack" age="28">My hobby: Racing</Person>
        <Person name="Manke" age="22">My hobby: Cycling</Person>
        <Person name="Saad" age="20">My hobby: Running</Person>
      </div>

    );
    //return React.createElement('div', null, React.createElement('h1', {className: 'App'}, 'Hello. I am a basic React app.'));
  }
}

export default App;
