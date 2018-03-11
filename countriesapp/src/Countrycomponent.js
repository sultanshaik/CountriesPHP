import React, { Component } from 'react';
import './Countrycomponent.css';

class Countrycomponent extends Component {
	constructor(props) {
    super(props);
    this.state = {countries:[]};
    
	}
	filter(countries){
		return	countries;
	}
	componentDidMount(){
				fetch("http://localhost:8080/?countrystring="+ this.props.countrystring,{
			method:'get',	
		}).
		then(response=>response.json()).
		then(countries=>{
			this.setState({countries:this.filter(countries)});
			this.countIncrease();
		})

	}
	
	countIncrease(){
		this.props.countIncrease();
	}

	componentWillReceiveProps(nextProps){
		if(nextProps.countrystring!==this.props.countrystring){
				fetch("http://localhost:8080/?countrystring="+ nextProps.countrystring,{
			method:'get',	
		}).
		then(response=>response.json()).
		then(countries=>{
			this.setState({countries:this.filter(countries) });
			this.countIncrease();
		})
		}
	}
	
  render() {
    return (
      <div className="">
		
		{this.state.countries.map(x=>{
			return(
				<div>
					{x.name},{x.alpha2Code}
					<img className="Flageimage" src = {x.flag}/>
				</div>
				)
			}
		)
		}
      </div>
    );
  }
}

export default Countrycomponent;