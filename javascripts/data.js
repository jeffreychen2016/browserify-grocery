const getDepartments = require('./departments');

const runOnSuccess = function () {
  const departments = JSON.parse(this.responseText).departments;
  console.log(departments);
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
