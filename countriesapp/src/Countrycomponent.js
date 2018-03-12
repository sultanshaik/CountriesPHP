import React, { Component } from 'react';

class Countrycomponent extends Component {
	
	constructor(props) {
    super(props);
    this.state = {countries:[],regions:[],subregions:[],regionsObject:{},subregionsObject:{},isLoading:true};
	this.regionsObject=this.state.regionsObject;
    
	}
	
	filter(countries){
		return	countries;
	}
	
	filterRegions(countries){
		return countries.map(x=>x.region);
	}
	
	filterSubregions(countries){
		return countries.map(x=>x.subregion);
	}
	
	setisLoading(){
		this.setState({isLoading:false});
	}
	
	
	regionsAndSubregionsCount(regions,subregions){
		
		regions.map(region=>{
			this.state.regionsObject[region]=0;
	
		}
		);
		regions.map(region=>this.state.regionsObject[region]=this.state.regionsObject[region]+1);
		
		subregions.map(subregion=>{
			this.state.subregionsObject[subregion]=0;
		}
		);
		subregions.map(subregion=>this.state.subregionsObject[subregion]=this.state.subregionsObject[subregion]+1);
	
	}
	
	fetchCountries(country){
		fetch("http://localhost:8080/?countrystring="+ country,{
		method:'get',	
		}).
		then(response=>response.json()).
		then(countries=>{
			this.setState({countries:this.filter(countries)},
			()=>this.setState({regions:this.filterRegions(this.state.countries),subregions:this.filterSubregions(this.state.countries)},()=>
				{
				this.regionsAndSubregionsCount(this.state.regions,this.state.subregions);//Sets regions and subregions count
				this.countIncrease();
				}
			)
			);
		});
	}
	componentDidMount(){
		
		this.fetchCountries(this.props.countrystring);
	}

	componentWillReceiveProps(nextProps){

		if(nextProps.countrystring!==this.props.countrystring){
			this.fetchCountries(nextProps.countrystring);
		}
	}
		
	countIncrease(){
		this.props.countIncrease();
	}
	displayNumberOfCountries(){
		return <div><p>Total number of countries:{this.state.countries.length}</p></div>
	}
	
	displayRegionsandSubregions(){
		return(
		<div>
		<p>Regions with their occurences</p>
		<ul>
		{
			Object.keys(this.state.regionsObject).map(x=>{
			return (<li>{x}::{this.state.regionsObject[x]}</li>)
			}
			)
		}
		</ul>
		<p>Subregions with their occurences</p>
		<ul>
		{
			Object.keys(this.state.subregionsObject).map(x=>{
			return (<li>{x}::{this.state.subregionsObject[x]}</li>)
			}
			)
		}
		</ul>
		</div>
		)		
	}

  render() {
	  
    return (
	
      <div className="">
	  <table>
	  <thead>
	  <tr>
					<td>Name</td>
					<td>AlphaCode2</td>
					<td>AlphaCode3</td>
					<td>Region</td>
					<td>Subregion</td>
					<td>Population Count</td>
					<td>Languages</td>
					<td>Flag</td>
	  </tr>
	  </thead>
		<tbody>
		{this.state.countries.map((x,i)=>{
			return(
				<tr key={i}>
					<td>{x.name}</td>
					<td>{x.alpha2Code}</td>
					<td>{x.alpha3Code}</td>
					<td>{x.region}</td>
					<td>{x.subregion}</td>
					<td>{x.population}</td>
					<td><ul>
					{x.languages.map((language,i)=>{
					return (
					<li key={i}>{language.name}</li>
					)
					})}
					</ul>
					</td>
					<td><img className="flagImage" src = {x.flag}/></td>
				</tr>
				)
			}
		)
		}
		</tbody>
	   </table>
	   {this.displayNumberOfCountries()}
	   {Object.keys(this.state.regionsObject).length !== 0? this.displayRegionsandSubregions():null}

      </div>
    );
  }
}

export default Countrycomponent;