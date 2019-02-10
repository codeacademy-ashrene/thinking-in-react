const groupedObject = {};
const groupByCategory = (arrayOfProducts) => {arrayOfProducts.forEach(element => {
  groupedObject[element.category] = arrayOfProducts.reduce((acc, val) => {
    if(element.category === val.category){
      acc.push([val.name, val.price, val.stocked]);
    }
    return acc;
  }, []);
});
  return groupedObject;
};

module.exports = groupByCategory;