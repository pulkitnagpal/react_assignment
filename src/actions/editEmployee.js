const editEmployee = (employee)=>{
    return {
        type : "EDIT_EMPLOYEE",
        payload : employee
    }
}

export default editEmployee;