import React, { Component } from 'react';

class ProductRow extends Component {
  render(){
    let name;
    if(this.props.products.stocked){
      name = <span>{this.props.products.name}</span>
    }
    else{
      name = <span style={{color: 'red'}}>{this.props.products.name}</span>
    }
    return(
      <tr>
        <td >{name}</td>
        <td>{this.props.products.price}</td>
      </tr>
        
    );
  }
}

export default ProductRow;