import React, { Component } from 'react';
import './App.css';
import Countrycomponent from './Countrycomponent'

class App extends Component {
	constructor(props) {
    super(props);
    this.state = {countrydata: {},showcomponent : false,errormessage:false };
	this.handleChange = this.handleChange.bind(this);
	this.handleSubmit = this.handleSubmit.bind(this);
    
	}
	 handleChange(event) {
    this.setState({countrydata: event.target.value},() => {
		(this.state.countrydata.length != 0) ? this.setState({errormessage:false}): null
	
	 });
	 }
  handleSubmit(e){
	  e.preventDefault();
	  
	  {(this.state.countrydata.length == 0)? this.setState({showcomponent:true}):this.setState({errormessage:true})}
	  
	  
  }
  
  render() {
    return (
      <div className="">
	  <p>Enter the country name or related search string</p>
	  {this.state.errormessage ? <p>The app does not accept empty string</p>: null}
	  <form>
	<input 	type="text"
	placeholder="Country name" countrydata = {this.state.countrydata} onChange = {this.handleChange} />
	<button className="" onClick = {this.handleSubmit}  >Submit</button>
	<button className="">Reset</button>
	</form>
	{this.state.showcomponent ? <Countrycomponent data = {this.state.countrydata} />:null}
      </div>
    );
  }
}

export default App;
