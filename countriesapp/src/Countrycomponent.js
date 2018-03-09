import React, { Component } from 'react';

class Countrycomponent extends Component {
	constructor(props) {
    super(props);
    this.state = {countrystring: this.props.countrystring,countries:[]};
    
	}
	componentDidMount(){
		console.log("Enter");
				fetch("http://localhost:8080/?countrystring="+ this.state.countrystring,{
			method:'get',
			
		}).
		then(response=>response.json()).
		then(responseData=>{console.log(responseData)})
	console.log("Exit");

	}
  render() {
    return (
      <div className="">
		
		<p>hello</p>
		{this.state.countries.name}
      </div>
    );
  }
}

export default Countrycomponent;