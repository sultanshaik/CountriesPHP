import React, { Component } from 'react';
import './App.css';
import Countrycomponent from './Countrycomponent.js'

class App extends Component {
	constructor(props) {
    super(props);
    this.state = {countrydata: '',countrystring:'',showcomponent : false,errormessage:false,count:0,noCountryFound:false,regions:{}};
	this.handleChange = this.handleChange.bind(this);
	this.handleSubmit = this.handleSubmit.bind(this);
	this.handleReset = this.handleReset.bind(this);
	this.countIncrease=this.countIncrease.bind(this);
	this.notFound=this.notFound.bind(this);
	this.checkifCountryExistsandDisplay=this.checkifCountryExistsandDisplay.bind(this);
    
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
  
	checkifCountryExistsandDisplay(){
			fetch("http://localhost:8080/?countrystring="+ this.state.countrystring,{
			method:'get'	
		}).
		then(response=>response.json()).
		then(response=>{
				
			if(this.notFound(response[0])){
			this.setState({noCountryFound:true,showcomponent:false});
			return;
			}
			 
			this.setState({errormessage:false,showcomponent:true,noCountryFound:false})
			 
		}
		).catch(function(error) {
			
			})
		
	}
	
	handleErrorMessage(){
		
	  {(this.state.countrystring.length)?
	  this.checkifCountryExistsandDisplay():
	  this.setState({errormessage:true,showcomponent:false})}
	  
	}
	
	countIncrease(){
	  this.setState({count:this.state.count+1});
	}
  
	render() {
		
		
		return (
		<div className="">
		<p className="">Enter the country name or related search string</p>
		{this.state.errormessage ? <p className="errorMessage">The app does not accept empty string</p>: null}
		{this.state.noCountryFound ? <p className="errorMessage">No Country Found</p>:null}
		<form>
		<input 	type="text"
		placeholder="Country name" value = {this.state.countrydata} onChange = {this.handleChange} />
		<button className="" onClick = {this.handleSubmit}  >Submit</button>
		<button className="" onClick = {this.handleReset}>Reset</button>
		</form>
		{this.state.showcomponent ? <Countrycomponent countrystring = {this.state.countrystring} checkifCountryExistsandDisplay={this.checkifCountryExistsandDisplay} countIncrease={this.countIncrease} regionsCount={this.regionsCount}  count = {this.state.count} />:null}
		<hr/>
		<p>Total number of queries:{this.state.count}</p>
		
		</div>
    );
  }
}

export default App;
