import React, { Component } from 'react';

export default class  extends Component {
  render() {
    var {handleGluttenCheckbox, handleRefrigeratedCheckbox, handleNutsCheckbox, handleDairyCheckbox, handleVegeterianCheckbox, gluttenState, refrigeratedState, nutsState, dairyState, vegeterianState} = this.props;    
    return (
      <div>
        Glutten: <input type="checkbox" checked={gluttenState} onChange={handleGluttenCheckbox}/> 
        Refrigerated: <input type="checkbox" checked={refrigeratedState} onChange={handleRefrigeratedCheckbox}/> 
        Nuts:<input type="checkbox" checked={nutsState} onChange={handleNutsCheckbox}/> 
        Dairy:<input type="checkbox" checked={dairyState} onChange={handleDairyCheckbox}/> 
        Vegeterian:<input type="checkbox" checked={vegeterianState} onChange={handleVegeterianCheckbox}/> 
      </div>
    )
  }
}