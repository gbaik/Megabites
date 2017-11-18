import React, { Component } from 'react';
import {Card, CardHeader, CardText} from 'material-ui/Card';
import DietaryRestrictionList from './DietaryRestrictionList.jsx'

export default class InputForm extends Component {
  render() {
    
    var {handleFoodInput, handleServingSizeInput, id, handleGluttenCheckbox, handleRefrigeratedCheckbox, handleNutsCheckbox, handleDairyCheckbox, handleVegeterianCheckbox, gluttenState, refrigeratedState, nutsState, dairyState, vegeterianState} = this.props;
    return (
      <div>
          <input type="text" placeholder="Food" onChange={(el) => handleFoodInput(el.target.value, id)} /> 
          <input type="text" placeholder="Serving Size" onChange={(el) => handleServingSizeInput(el.target.value, id)} /> 
          <Card>
            <CardHeader
              title='Dietary Restriction'
              subtitle='Please check off any dietary restrictrions'
              actAsExpander={true}
              showExpandableButton={true}
            />
            <CardText expandable={true}>
            <DietaryRestrictionList 
              handleGluttenCheckbox={handleGluttenCheckbox} 
              handleRefrigeratedCheckbox={handleRefrigeratedCheckbox} 
              handleNutsCheckbox={handleNutsCheckbox} 
              handleDairyCheckbox={handleDairyCheckbox} 
              handleVegeterianCheckbox={handleVegeterianCheckbox} 
              gluttenState={gluttenState} refrigeratedState={refrigeratedState} 
              nutsState={nutsState} dairyState={dairyState} 
              vegeterianState={vegeterianState}
            />
            </CardText>
          </Card>
      </div>
    )
  }
}