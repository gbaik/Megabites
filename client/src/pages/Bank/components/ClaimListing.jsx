import React, { Component } from 'react';
import {Card, CardHeader, CardText} from 'material-ui/Card';
import { RaisedButton } from 'material-ui';
import FoodItem from './FoodItem.jsx';
import Done from 'material-ui/svg-icons/action/done';
import Cancel from 'material-ui/svg-icons/navigation/cancel';

export default class ClaimListing extends Component {
  constructor(props) {
    super(props);

    this.handleCancel = this.handleCancel.bind(this);
    this.handleComplete = this.handleComplete.bind(this);
  }

  handleCancel() {
    this.props.cancel(this.props.id);
  }

  handleComplete() {
    this.props.complete(this.props.id);
  }

  render() {
    var { name, email, phone, address, foodItems } = this.props;
    var { streetAddress, city, state, zip } = address;
    var addressString = streetAddress + ', ' + city + ', ' + state + ' ' + zip;
    return (
      <Card>
        <CardHeader
          title={name}
          subtitle={addressString}
          actAsExpander={true}
          showExpandableButton={true}
        />
        <CardText expandable={true}>
          { foodItems.map((foodItem) => <FoodItem { ...foodItem } key={foodItem.id} />)}
          <div className="claim-button-cluster">
            <RaisedButton icon={<Cancel />} onClick={this.handleCancel} />
            <RaisedButton icon={<Done />} onClick={this.handleComplete} />
          </div>
        </CardText>
      </Card>
    );
  }
}
