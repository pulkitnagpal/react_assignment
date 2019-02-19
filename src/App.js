import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import editEmployeeConfirm from './actions/editEmployeeConfirm';
import addEmployee from './actions/addEmployee';
import editEmployee from './actions/editEmployee';

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Route exact path="/" component={Main}/>
          <Route path = "/Edit" component={Edit}/>
        </div>
      </Router>
    )
  }
}

function mapStateToProps(state){
  return {
    employeeList: state.employeeList,
    activeEmployee: state.activeEmployee
  };
};

class Main extends Component {

  render() {
    return (
      <div className="container">
        <h2>Employee Management</h2>
        <br />
        <form>
          <div className="form-group row">
            <label htmlFor="name" className="col-sm-2 col-form-label">Employee Name</label>
            <div className="col-sm-10">
              <input type="text" className="form-control" ref="name" />
            </div>
          </div>
          <div className="form-group row">
            <label htmlFor="age" className="col-sm-2 col-form-label">Age</label>
            <div className="col-sm-10">
              <input type="text" className="form-control" ref="age" />
            </div>
          </div>
          <input type="button" className="btn btn-primary" value="Submit" onClick={()=>this.props.addEmployee(this.refs)}></input>
        </form>
        <br/>
        <TableEmployees employees={this.props.employeeList}></TableEmployees>
      </div>
    );
  }
}
Main = connect(mapStateToProps, (dispatch)=>{
  return bindActionCreators({addEmployee:addEmployee}, dispatch)
})(Main);




class TableEmployees extends Component {
  render() {
    const employeeList = this.props.employees.map((employee) => {
      return (
        <ListOfEmployees key={employee.id} employee={employee}></ListOfEmployees>
      )
    })
    if (this.props.employees.length > 0) {
      return (
        <table className="table table-bordered">
          <thead>
            <tr>
              <th>Name</th>
              <th>Age</th>
              <th>Actions</th>
            </tr>
          </thead>
          {employeeList}
        </table>
      )
    }
    else {
      return (
        <div></div>
      )
    }

  }
}

class ListOfEmployees extends Component {
  render() {
    return (
      <tbody>
        <tr>
          <td>{this.props.employee.name}</td>
          <td>{this.props.employee.age}</td>
          <td><Link to ="/Edit" onClick= {()=>this.props.editEmployee(this.props.employee)}>Edit</Link></td>
        </tr>

      </tbody>
    )
  }
};
ListOfEmployees = connect(mapStateToProps, (dispatch)=>{
  return bindActionCreators({editEmployee:editEmployee}, dispatch);
})(ListOfEmployees);

class Edit extends Component{
  render(){
    return(
      <div className = "container">
        <h2>Edit and submit</h2>
        <br />
        <form>
          <div className="form-group row">
            <label htmlFor="name" className="col-sm-2 col-form-label">new Employee Name</label>
            <div className="col-sm-10">
              <input type="text" className="form-control" ref="name" defaultValue={this.props.activeEmployee.name}/>
            </div>
          </div>
          <div className="form-group row">
            <label htmlFor="age" className="col-sm-2 col-form-label">new Age</label>
            <div className="col-sm-10">
              <input type="text" className="form-control" ref="age" defaultValue= {this.props.activeEmployee.age}/>
            </div>
          </div>
          <Link to="/" onClick={()=>this.props.editEmployeeConfirm(this.refs, this.props.activeEmployee.id)}><input type="button" value="Confirm" className="btn btn-primary"></input></Link>
        </form>
      </div>
    )
  }
}
Edit = connect(mapStateToProps, (dispatch)=>{
  return bindActionCreators({editEmployeeConfirm:editEmployeeConfirm}, dispatch);
})(Edit);

export default App;
