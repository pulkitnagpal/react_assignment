import uuid from 'uuid';
const employeeList = (state = [{id:123, name:"Pulkit", age:22}], action) => {
    switch (action.type) {
        case "ADD_EMPLOYEE":
            return [
                ...state,
                {
                    id: uuid.v4(),
                    name: action.payload.name.value,
                    age: action.payload.age.value
                }
            ]
        case "EDIT_EMPLOYEE_CONFIRM":
            var previousState = [...state];
            var changeObj= previousState.filter((employee)=>employee.id===action.payload.id)
            var indexChange= previousState.indexOf(changeObj[0]);
            previousState[indexChange]= {id: action.payload.id,
                name:  action.payload.refs.name.value,
                age:  action.payload.refs.age.value}
            var newState= previousState;
            return newState
        default:
            return [...state]
    }
}




export default employeeList;