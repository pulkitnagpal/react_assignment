const editEmployeeConfirm = (refs, id)=>{
    return {
        type : "EDIT_EMPLOYEE_CONFIRM",
        payload : {
            refs: refs,
            id: id
        }
    }
}

export default editEmployeeConfirm;