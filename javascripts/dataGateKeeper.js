const getDepartments = require('./departments');
const getItems = require('./items');
const buildDomString = require('./DepartmentDom');
const data = require('./data');

const whenItemsLoad = function () {
  const itemsData = JSON.parse(this.responseText).items;
  data.setItems(itemsData);
};

const whenDepartmentsLoad = function () {
  const departments = JSON.parse(this.responseText).departments;
  data.setDepartments(departments);
  buildDomString(departments);
};

const runOnFailure = function () {
  console.error('XHR Fails');
};

const initializer = () => {
  getDepartments(whenDepartmentsLoad,runOnFailure);
  getItems(whenItemsLoad,runOnFailure);
};

module.exports = {
  initializer,
};
