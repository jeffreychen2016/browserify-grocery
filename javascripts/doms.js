const printToDom = (strang,domID) => {
  document.getElementById(domID).innerHTML = strang;
};

const builDomString = (departmentArray) => {
  let strang = '';
  strang += `<div class='row text-center'>`;
  departmentArray.forEach((deparment) => {
    strang +=   `<div class='col-md-3 department'>`;
    strang +=    `<h3 class='hide'>${deparment.name}</h3>`;
    strang +=    `<img src="${deparment.img}" class='department-img'>`;
    strang +=   `</div>`;
  });
  strang += `<div>`;
  printToDom(strang,'departments');
};

module.exports = builDomString;
