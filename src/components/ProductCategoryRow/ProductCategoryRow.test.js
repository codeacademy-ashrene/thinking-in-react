import React from 'react';
import ProductCategoryRow from '.';
import renderer from 'react-test-renderer';

describe('ProductCategoryRow', () => {
  it('should render the category of products', () => {
    const tree = renderer.create(<ProductCategoryRow category={"Sporting Goods"}/>).toJSON();
    expect(tree).toMatchSnapshot();
  });
});