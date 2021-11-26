const personsInfo = [
  { id: 1, name: "Sakib", isReject: false, isApprove: false },
  { id: 2, name: "Rakib", isReject: false, isApprove: false },
  { id: 3, name: "Jahid", isReject: false, isApprove: false },
  { id: 4, name: "Bakul", isReject: false, isApprove: false },
  { id: 5, name: "Maruf", isReject: false, isApprove: false },
];

function upDate(text, array) {
  const newArray = [];

  {
    array.length > 0 &&
      array.forEach((element) => {
        if (text === "isReject") {
          element[text] = true;
          newArray.push(element);
        }
        if (text === "isApprove") {
          element[text] = true;
          newArray.push(element);
        }
      });
  }

  return newArray;
}

console.log("For isApprove => ", upDate("isApprove", personsInfo));
// console.log("For isReject => ",upDate("isReject", personsInfo));

//============
/***  In this funtion two funtion calls not work  at a time because 
newArray is refarence type thats why newArray holds previous value.
 if you call this funtion for both isReject and isApprove at a time 
 then isReject and isApprove both are true because newArray is Refarence type 
 it hold all result of first funtion call.**/
