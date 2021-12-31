export function makePayload( array, profileData, values) {
    const { orgId, buId, workPlaceGroupId, userId } = profileData;
    const {
      holidayEffectiveDate,
      holidayGroup,
      exceptionEffectiveDate,
      exceptionOffDayGroup,
    } = values;
  
    const commmonObj = {
      accountId: orgId,
      businessUnitId: buId,
      workplaceGroupId: workPlaceGroupId,
      isActive: true,
      insertByUserId: userId,
      insertDateTime: todayDate(),
      updateByUserId: userId,
      updateDateTime: todayDate(),
    };
    const holiDayObj = {
      employeeHolidayAssignId: 0,
      employeeId: 0,
      holidayGroupId: holidayGroup?.value || 0,
      holidayGroupName: holidayGroup?.label || "",
      effectiveDate:holidayEffectiveDate || "",
      ...commmonObj,
    };
  
    const offDayObj = {
      employeeOffdayAssignId: 0,
      employeeId: 0,
      exceptionOffdayGroupId: exceptionOffDayGroup?.value || 0 ,
      exceptionOffdayGroupName: exceptionOffDayGroup?.label || "",
      effectiveDate:exceptionEffectiveDate || "",
      ...commmonObj,
    };
  
    const myObj = {};
    let holiday = [];
    let offDay = [];
  
    // eslint-disable-next-line no-lone-blocks
    {
      array?.length > 0 &&
        array?.forEach((item) => {
          if(!item?.HolidayGroupName && !item?.ExceptionOffdayGroupName){
            if (
              holidayEffectiveDate &&
              holidayGroup &&
              exceptionEffectiveDate &&
              exceptionOffDayGroup
            ) {
              holiday.push({ ...holiDayObj, employeeId: item?.EmployeeId });
              offDay.push({ ...offDayObj, employeeId: item?.EmployeeId });
            } else if (holidayEffectiveDate && holidayGroup) {
              holiday.push({ ...holiDayObj, employeeId: item?.EmployeeId });
            } else if (exceptionEffectiveDate && exceptionOffDayGroup) {
              offDay.push({ ...offDayObj, employeeId: item?.EmployeeId });
            }
          }
          else {
            if (
              holidayEffectiveDate &&
              holidayGroup &&
              exceptionEffectiveDate &&
              exceptionOffDayGroup
            ) {
              holiday.push({ ...holiDayObj, employeeId: item?.EmployeeId });
              offDay.push({ ...offDayObj, employeeId: item?.EmployeeId });
            } else if (holidayEffectiveDate && holidayGroup) {
              holiday.push({ ...holiDayObj, employeeId: item?.EmployeeId });
              offDay.push({ ...offDayObj, employeeId: item?.EmployeeId });
            } else if (exceptionEffectiveDate && exceptionOffDayGroup) {
              offDay.push({ ...offDayObj, employeeId: item?.EmployeeId });
              holiday.push({ ...holiDayObj, employeeId: item?.EmployeeId });
            }
          }
        });
    }
  
    myObj.holidayAssignDTOList = holiday;
    myObj.exceptionOffdayAssignDTOList = offDay;
    return myObj;
  }
  