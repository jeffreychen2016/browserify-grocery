const getDepartments = require('./departments');
const buildDomString = require('./doms');

const runOnSuccess = function () {
  const departments = JSON.parse(this.responseText).departments;
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
