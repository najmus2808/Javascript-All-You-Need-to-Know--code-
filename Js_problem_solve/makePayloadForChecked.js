const empId = [
  { id: 1, check: true },
  { id: 2, check: false },
  { id: 3, check: false },
  { id: 4, check: true },
  { id: 5, check: true },
  { id: 6, check: false },
  { id: 7, check: true },
  { id: 8, check: true },
];

const payload = {
  partId: 4,
  insertUserId: "bulbul@gmail.com",
  employeeCode: "5245",
  employeeName: "Sakib",
  reason: "Reason",
  separationTypeName: "Type",
  jsonApprovalList: [],
};

let myArray = [];
empId.forEach((item) => {
  if (item.check) {
    myArray.push({ separationId: item.id });
  }
});

payload.jsonApprovalList = myArray;

console.log(payload);
