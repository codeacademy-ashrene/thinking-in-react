import React, { Component } from 'react';
import PropTypes from 'prop-types';

class SearchBar extends Component{
  handleFilterTextChange = (e) => {
    this.props.onFilterTextChange(e.target.value);
  }
  handleInStockChange = (e) => {
    this.props.onInStockChange(e.target.checked)
  }
  render(){
    return (
      <form>
        <input type="text" className="search" placeholder="Search..." value={this.props.filterText} onChange={this.handleFilterTextChange}/>
        <input type="checkbox" className="checkBox" checked={this.props.inStockOnly} onChange={this.handleInStockChange}/>
        { ' '}
        Only show products in stock
      </form>
    );
  }
}

SearchBar.propTypes = {
  filterText: PropTypes.string,
  inStockOnly: PropTypes.bool,
};

SearchBar.defaultProps = {
  filterText: '',
  inStockOnly: false,
}
export default SearchBar;