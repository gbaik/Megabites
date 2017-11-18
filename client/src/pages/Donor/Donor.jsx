import React, { Component } from 'react';
import InputForm from './InputForm.jsx';

export default class Donor extends Component {
  constructor(props) {
    super(props);

    this.state = {
      formNumber: 1,
      food: '',
      servingSize:'',
      finalInput: {},
      id: null,
      Glutten: false,
      Refrigerated: false,
      Nuts: false,
      Dairy: false,
      Vegeterian: false
    }

    this.handleMoreFormInput = this.handleMoreFormInput.bind(this);
    this.addMoreFields = this.addMoreFields.bind(this);
    this.handleFoodInput = this.handleFoodInput.bind(this);
    this.handleServingSizeInput = this.handleServingSizeInput.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);

    this.handleGluttenCheckbox = this.handleGluttenCheckbox.bind(this);
    this.handleRefrigeratedCheckbox = this.handleRefrigeratedCheckbox.bind(this);
    this.handleNutsCheckbox = this.handleNutsCheckbox.bind(this);
    this.handleDairyCheckbox = this.handleDairyCheckbox.bind(this);
    this.handleVegeterianCheckbox = this.handleVegeterianCheckbox.bind(this);  
  }

  handleMoreFormInput(id) {
    var finalInput = this.state.finalInput;
    var outputArr = [this.state.food, this.state.servingSize];
    finalInput[id] = outputArr;
    this.setState({
      finalInput: finalInput
    })
  }

  addMoreFields() {
    this.setState({
      formNumber: this.state.formNumber+=1
    });
  }

  handleFoodInput(el, id) {
    this.setState({
      servingSize: el
    })

    this.handleMoreFormInput(id.toString())
  }

  handleServingSizeInput(el, id) {
    this.setState({
      food: el
    });

    this.handleMoreFormInput(id.toString())
  }

  handleGluttenCheckbox() {
    this.setState ({
      Glutten: !this.state.Glutten
    })
  }

  handleRefrigeratedCheckbox() {
    this.setState ({
      Refrigerated: !this.state.Refrigerated
    })
  }

  handleNutsCheckbox() {
    this.setState ({
      Nuts: !this.state.Nuts
    })
  }

  handleDairyCheckbox() {
    this.setState ({
      Dairy: !this.state.Dairy
    })
  }

  handleVegeterianCheckbox() {
    this.setState ({
      Vegeterian: !this.state.Vegeterian
    })
  }

  handleSubmit() {
    console.log(this.state.finalInput);
    // return axios.post(`/claims/complete`, {userId: this.state.user.id, claimId})
    // .then(() => {
    //   this.fetchClaims();
    // });
  }


  render() {
    var form = [];
    for (var i = 0; i < this.state.formNumber; i++) {
      form.push(<InputForm 
          handleFoodInput={this.handleFoodInput} 
          handleServingSizeInput={this.handleServingSizeInput} 
          handleGluttenCheckbox={this.handleGluttenCheckbox} 
          handleRefrigeratedCheckbox={this.handleRefrigeratedCheckbox} 
          handleNutsCheckbox={this.handleNutsCheckbox}
          handleDairyCheckbox={this.handleDairyCheckbox}
          handleVegeterianCheckbox={this.handleVegeterianCheckbox}  
          gluttenState={this.state.Glutten} refrigeratedState={this.state.Refrigerated} 
          nutsState={this.state.Nuts} dairyState={this.state.Dairy} 
          vegeterianState={this.state.Vegeterian} 
          id={i}
          key={i}
        />)
    }
    return (
      <div>
        <h1>Donor</h1>
          {form}
          <button onClick={this.addMoreFields}>+</button>
          <input type="submit" onClick={this.handleSubmit} />
      </div>
    )
  }
}