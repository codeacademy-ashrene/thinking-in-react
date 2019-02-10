import React from 'react';
import ProductRow from '.';
import renderer from 'react-test-renderer';
import { shallow } from 'enzyme';

describe('ProductRow', () => {
  const unstockedProduct={
    category: 'Sporting Goods',
    name: 'Football',
    stocked: false,
    price: 3.99
  };

  it('should render the product row', () => {
    const tree = renderer.create(<ProductRow products={unstockedProduct}/>).toJSON();
    expect(tree).toMatchSnapshot();
  });
  it('should give font in red when unstocked', () => {
    const wrapper = shallow(<ProductRow products={unstockedProduct}/>);
    expect(wrapper.find('span').props().style.color).toEqual('red');
  });
});