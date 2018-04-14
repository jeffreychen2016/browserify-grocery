const events = require('./events');

const printDepartmentToDom = (strang,domID) => {
  document.getElementById(domID).innerHTML = strang;
  events.addDepartmentEvents();
};

const builDomString = (departmentArray) => {
  let strang = '';
  strang += `<div class='row text-center'>`;
  departmentArray.forEach((department) => {
    strang +=   `<div class='col-md-3 department'>`;
    strang +=    `<h3 class='hide department-title'  data-department-id='${department.id}'>${department.name}</h3>`;
    strang +=    `<img src="${department.img}" class='department-img'>`;
    strang +=   `</div>`;
  });
  strang += `<div>`;
  printDepartmentToDom(strang,'departments');
};

module.exports = builDomString;
