const activeEmployee = (state = [], action) => {
    switch (action.type) {
        case "EDIT_EMPLOYEE":
            return {
                id: action.payload.id,
                name: action.payload.name,
                age: action.payload.age
            }
        default:
            return state;
    }
}




export default activeEmployee;