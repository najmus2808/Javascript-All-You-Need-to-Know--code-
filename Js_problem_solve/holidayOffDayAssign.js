const personsInfo = [
  { id: 1, name: "Sakib", isReject: false, isApprove: false },
  { id: 2, name: "Rakib", isReject: false, isApprove: false },
  { id: 3, name: "Jahid", isReject: false, isApprove: false },
  { id: 4, name: "Bakul", isReject: false, isApprove: false },
  { id: 5, name: "Maruf", isReject: false, isApprove: false },
];

function upDate(text, array) {
  const myObj = {};
  let holiday = [];
  let offDay = [];

  {
    array.length > 0 &&
      array.forEach((element) => {
        if (text === "isHoliday") {
          holiday.push({ name: "Holiday", id: 5 });
        } else if (text === "isOffDay") {
          offDay.push({ name: "Off Day", id: 6 });
        } else if (text === "Both") {
          holiday.push({ name: "Holiday", id: 5 });
          offDay.push({ name: "Off Day", id: 6 });
        }
      });
  }

  myObj.holidayAssignDTOList = holiday;
  myObj.exceptionOffdayAssignDTOList = offDay;
  return myObj;
}

console.log("For isApprove => ", upDate("Both", personsInfo));
