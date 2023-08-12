// Write your solution in this file!
let employee ={
  name:"mohammed",
  streetAddress:"gamal"
}
function updateEmployeeWithKeyAndValue(employee, key, value){
  let opg={...employee};
  opg[key]=value;
  return opg;
}
console.log(updateEmployeeWithKeyAndValue(employee,"saddf","faisl"));
function destructivelyUpdateEmployeeWithKeyAndValue(employee, key, value){
  employee[key]=value;
  return employee;
}
console.log(destructivelyUpdateEmployeeWithKeyAndValue(employee, "nam", "value"));
console.log(employee)
function deleteFromEmployeeByKey(employee, key){
  let opg={...employee};
  delete opg[key];
  return opg;
}
function destructivelyDeleteFromEmployeeByKey(employee, key){
  delete employee[key];
  return employee;
}

