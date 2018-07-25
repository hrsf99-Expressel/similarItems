import React, { Component } from 'react';
import axios from 'axios';
// import './App.css';
import Items from './Items.jsx';
import App from '../App.jsx';



export default class Sim extends Component {  
  constructor(props, context) {
    super(props, context)
    this.state = {
      lowLimit: 0,
      highLimit: 5
    } 
    this.handleClick = this.handleClick.bind(this);
  }
  

  componentWillMount () {
    this.handleClick();
  }

  handleClick() {
    const newlowLimit = this.state.lowLimit + 5;
    const newhighLimit = this.state.highLimit + 5;
    this.setState({ lowLimit: newlowLimit });
    this.setState({ highLimit: newhighLimit });
  }

  render() {
    let product = this.props.newItems.map ( (elem, index) => {
      if ( this.state.lowLimit < index <= this.state.highLimit ) {
        return <Items key={index} items={elem} />;
      }
    });
      return (
      <div className="images-view">
        <p  onClick={this.handleClick}>
            {product}   
        </p>
      </div>
    ) 
  }
}



// before last element add a var items = this.props.itemList>map and
// assign {the var name} just before last div element.