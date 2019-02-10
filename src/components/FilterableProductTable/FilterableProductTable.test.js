import React from 'react';
import renderer from 'react-test-renderer';
import { mount } from 'enzyme';
import FilterableProductTable from '.';

describe('FilterableProductTable', () => {
  const productArray = [
    {category: "Sporting Goods", price: "$49.99", stocked: true, name: "Football"},
    {category: "Sporting Goods", price: "$9.99", stocked: true, name: "Baseball"},
    {category: "Sporting Goods", price: "$29.99", stocked: false, name: "Basketball"},
    {category: "Electronics", price: "$99.99", stocked: true, name: "iPod Touch"},
    {category: "Electronics", price: "$399.99", stocked: false, name: "iPhone 5"},
    {category: "Electronics", price: "$199.99", stocked: true, name: "Nexus 7"}
  ];
  it('renders without crashing for stocked and unstocked products and no filter text', () => {
    const filterableProductTable = renderer.create(<FilterableProductTable products={productArray} />).toJSON();
    expect(filterableProductTable).toMatchSnapshot();
  });
  it('should change state when value is passed to checkbox', () => {
    const wrapper = mount(<FilterableProductTable products={productArray} />);
    expect(wrapper.instance().state.inStockOnly).toEqual(false);
    wrapper.find('.checkBox').simulate('change', {target: {checked: true}});
    expect(wrapper.instance().state.inStockOnly).toEqual(true);
  });
  it('should change state when value is passed to search box', () => {
    const wrapper = mount(<FilterableProductTable products={productArray} />);
    expect(wrapper.instance().state.filterText).toEqual('');
    wrapper.find('.search').simulate('change', {target: {value: 'Football'}});
    expect(wrapper.instance().state.filterText).toEqual('Football');
  })
});
