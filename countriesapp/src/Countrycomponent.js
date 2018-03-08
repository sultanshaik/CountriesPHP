import React, { Component } from 'react';

class Countrycomponent extends Component {
	constructor(props) {
    super(props);
    this.state = {countrystring: this.props.countrydata};
    
	}
  render() {
    return (
      <div className="">
		<p>Hwllo</p>
      </div>
    );
  }
}

export default Countrycomponent;