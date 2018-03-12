import React, { Component } from 'react';
import styles from './Countrycomponent.css';

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

  render() {
	  
    return (
	
      <div className="">
	  <table>
	  <thead></thead>
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
					<td><ol>
					{x.languages.map(language=>{
					return (
					<li>{language.name}</li>
					)
					})}
					</ol>
					</td>
					<td><img className="flagImage" src = {x.flag}/></td>
				</tr>
				)
			}
		)
		}
		</tbody>
	   </table>
      </div>
    );
  }
}

export default Countrycomponent;