const getDepartments = require('./departments');
const buildDomString = require('./DepartmentDom');
const data = require('./data');

const runOnSuccess = function () {
  const departments = JSON.parse(this.responseText).departments;
  data.setDepartments(departments);
  buildDomString(departments);
};

const runOnFailure = function () {
  console.error('XHR Fails');
};

const initializer = () => {
  getDepartments(runOnSuccess,runOnFailure);
};

module.exports = {
  initializer,
};
