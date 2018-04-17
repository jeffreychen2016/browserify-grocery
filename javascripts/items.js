const getItems = (whenItemsLoad,runOnFailure) => {
  const departmentsXHR = new XMLHttpRequest();
  departmentsXHR.addEventListener('load',whenItemsLoad);
  departmentsXHR.addEventListener('error',runOnFailure);
  departmentsXHR.open('GET','../db/items.json');
  departmentsXHR.send();
};

module.exports = getItems;
