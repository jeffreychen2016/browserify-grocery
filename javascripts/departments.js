const getDepartments = (whenDepartmentsLoad,runOnFailure) => {
  const departmentsXHR = new XMLHttpRequest();
  departmentsXHR.addEventListener('load',whenDepartmentsLoad);
  departmentsXHR.addEventListener('error',runOnFailure);
  departmentsXHR.open('GET','../db/departments.json');
  departmentsXHR.send();
};

module.exports = getDepartments;
