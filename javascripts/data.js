let departments = [];
let items = [];
const cart = [];

const getDeaprtments = () => {
  return departments;
};

const setDepartments = (departmentsArray) => {
  departments = departmentsArray;
};

const getItems = () => {
  return items;
};

const setItems = (itemsArray) => {
  items = itemsArray;
};

const setCart = (itemId, numberToAdd) => {
  // map function will create a new array that holds the item IDs,
  // then check the itemId that selected against with the array created by map
  const itemPosition = items.map(function (item) {
    return item.id;
  }).indexOf(itemId);
  const newItem = items[itemPosition];
  newItem.purchaseNum = numberToAdd;
  cart.push(newItem);
};

const getItemsByDepartment = (departmentId) => {
  const selectedItems = [];
  items.forEach((item) => {
    if (item.departmentId === departmentId) {
      selectedItems.push(item);
    };
  });
  return selectedItems;
};

module.exports = {
  getDeaprtments,
  setDepartments,
  getItems,
  setItems,
  getItemsByDepartment,
  setCart,
};
