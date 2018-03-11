import React, { Component } from 'react';
import './App.css';
import Countrycomponent from './Countrycomponent'

class App extends Component {
	constructor(props) {
    super(props);
    this.state = {countrydata: '',countrystring:'',showcomponent : false,errormessage:false,count:0 };
	this.handleChange = this.handleChange.bind(this);
	this.handleSubmit = this.handleSubmit.bind(this);
	this.handleReset = this.handleReset.bind(this);
	this.countIncrease=this.countIncrease.bind(this);
    
	}
	
	handleChange(event) {
		this.setState({countrydata: event.target.value},() => {
		(this.state.countrydata.length !==0) ? this.setState({errormessage:false}): null
	
		});
	 }
	 
	 notFound(message){
		if(message ==="Not Found"){
			return true;
		}
		else
			return false;
	}
	 
	handleSubmit(e){
	  e.preventDefault();
	  this.setState({countrystring:this.state.countrydata},()=>
	  this.handleErrorMessage());
	  
	}
  
	handleReset(e){
	   e.preventDefault();
	   this.setState({showcomponent:false,countrydata:'',errormessage:false});
	   
	}
  
	handleErrorMessage(){
	  
	  {(this.state.countrystring.length)?
	  this.setState({showcomponent:true,errormessage:false}):
	  this.setState({errormessage:true,showcomponent:false})}
	  
	}
	
	countIncrease(){
	  this.setState({count:this.state.count+1});
	}
  
	render() {
		return (
		<div className="">
		<p>Enter the country name or related search string</p>
		<p>{this.state.count}</p>
		{this.state.errormessage ? <p>The app does not accept empty string</p>: null}
		<form>
		<input 	type="text"
		placeholder="Country name" value = {this.state.countrydata} onChange = {this.handleChange} />
		<button className="" onClick = {this.handleSubmit}  >Submit</button>
		<button className="" onClick = {this.handleReset}>Reset</button>
		</form>
		{this.state.showcomponent ? <Countrycomponent countrystring = {this.state.countrystring} countIncrease={this.countIncrease} count = {this.state.count} />:null}
		</div>
    );
  }
}

export default App;
