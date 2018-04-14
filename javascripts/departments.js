const getDepartments = (runOnSuccess,runOnFailure) => {
  const departmentsXHR = new XMLHttpRequest();
  departmentsXHR.addEventListener('load',runOnSuccess);
  departmentsXHR.addEventListener('error',runOnFailure);
  departmentsXHR.open('GET','../db/departments.json');
  departmentsXHR.send();
};

module.exports = getDepartments;
