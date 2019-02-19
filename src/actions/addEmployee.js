const addEmployee = (refs)=>{
    return {
        type : "ADD_EMPLOYEE",
        payload : refs
    }
}

export default addEmployee;