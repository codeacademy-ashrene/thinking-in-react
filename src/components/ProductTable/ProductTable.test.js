import React from 'react';
import ProductTable from '.';
import renderer from 'react-test-renderer';

describe('ProductTable', () => {
  const stockedProduct=[{
    category: 'Sporting Goods',
    name: 'Football',
    stocked: false,
    price: 3.99
  }];
  it('should render product table', () => {
    const tree = renderer.create(<ProductTable products={stockedProduct}/>).toJSON();
    expect(tree).toMatchSnapshot();
  });
})