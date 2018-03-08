import React, { Component } from 'react';

class Countrycomponent extends Component {
	constructor(props) {
    super(props);
    this.state = {countrystring: this.props.countrystring};
    
	}
  render() {
    return (
      <div className="">
		<p>{this.state.countrystring}</p>
      </div>
    );
  }
}

export default Countrycomponent;