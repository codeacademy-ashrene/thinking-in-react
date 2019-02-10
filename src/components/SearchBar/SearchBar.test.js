import React from 'react';
import SearchBar from '.';
import renderer from 'react-test-renderer';
import { shallow } from 'enzyme';
describe('SearchBar', () => {
  it('should render product table', () => {
    const tree = renderer.create(<SearchBar />).toJSON();
    expect(tree).toMatchSnapshot();
  });
  it('checks the value supplied to checkbox', () => {
    const wrapper = shallow(<SearchBar filterText='' inStockOnly/>);
    expect(wrapper.find('.checkBox').props().checked).toEqual(true)
  });
  it('checks the value supplied to searchbox', () => {
    const wrapper = shallow(<SearchBar filterText='Football' inStockOnly={false}/>);
    expect(wrapper.find('.search').props().value).toEqual('Football')
  })
});