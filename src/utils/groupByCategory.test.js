const groupByCategory = require('./groupByCategory');

const product = [
  {category: "Sporting Goods", price: "$49.99", stocked: true, name: "Football"},
  {category: "Sporting Goods", price: "$9.99", stocked: true, name: "Baseball"},
  {category: "Sporting Goods", price: "$29.99", stocked: false, name: "Basketball"},
  {category: "Electronics", price: "$99.99", stocked: true, name: "iPod Touch"},
  {category: "Electronics", price: "$399.99", stocked: false, name: "iPhone 5"},
  {category: "Electronics", price: "$199.99", stocked: true, name: "Nexus 7"}
];

const result = {
  "Electronics": [
    ["iPod Touch", "$99.99", true], 
    ["iPhone 5", "$399.99", false], 
    ["Nexus 7", "$199.99", true]
  ], 
  "Sporting Goods": [
    ["Football", "$49.99", true], 
    ["Baseball", "$9.99", true], 
    ["Basketball", "$29.99", false]
  ]
};
describe('groupByCategory', () => {
  it('should group products by categories', () => {
    expect(groupByCategory(product)).toEqual(result);
  })
})