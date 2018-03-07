import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="">
	  <form>
	<p>Enter the country name or related search string</p>
	<input 	type="text"
	placeholder="Country name" />
<button className="">Submit</button>
<button className="">Reset</button>
</form>
      </div>
    );
  }
}

export default App;
