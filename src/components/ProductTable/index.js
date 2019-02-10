import React, { Component } from 'react';
import ProductCategoryRow from '../ProductCategoryRow';
import ProductRow from '../ProductRow';
import PropTypes from 'prop-types';
const groupByCategory = require( '../../utils/groupByCategory');


class ProductTable extends Component {
  render() {
    const rows = [];
    const groupedByCategory = groupByCategory(this.props.products);
    Object.keys(groupedByCategory).forEach((keyCategory) => {
      rows.push(<ProductCategoryRow category={keyCategory}  key={keyCategory}/>);
      groupedByCategory[keyCategory].forEach((productElement) => {
        if(productElement[0].indexOf(this.props.filterText) === -1 ){
          return;
        }
        if(this.props.inStockOnly && !productElement[2]){
          return;
        }
        rows.push(<ProductRow products={
          {name: productElement[0], 
          stocked: productElement[2], 
          price: productElement[1]}
        } key = {productElement[0]}/>);
      });
    });
    return (
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Price</th>
          </tr>
        </thead>
        <tbody>
          {rows}
        </tbody>
      </table>
    );
}
}

ProductTable.propTypes = {
  products: PropTypes.array.isRequired,
  filterText: PropTypes.string,
  inStockOnly: PropTypes.bool,
};

ProductTable.defaultProps = {
  filterText: '',
  inStockOnly: false,
}

export default ProductTable;