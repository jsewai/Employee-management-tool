import React, { Component } from 'react';

import moment from 'moment';

import MainContainer from './MainContainer.jsx';

class Employees extends Component{
  constructor(){
    super();
    this.state = {
      employees: []
    }
  }

  componentDidMount(){
    fetch("https://shrouded-everglades-65036.herokuapp.com/employees")
    .then(res => res.json())
    .then(data => {
        this.setState({
          employees : data
        });
    }).catch(err => {
      console.log(err);
    });
  }

  render(){
    return(

      <MainContainer sidebar={this.props.title}>

       <div className="table-responsive">
       <table className="table table-striped table-bordered">
         <thead>
           <tr>
             <th>Name & Position</th>
             <th>Address</th>
             <th>Phone Num</th>
             <th>Hire Date</th>
             <th>Salary Bonus</th>
           </tr>
         </thead>
         <tbody>
           {this.state.employees.map((employee, index) => {
             return (
               <tr key={index}>
                 <td>{employee.FirstName + " " + employee.LastName + " - " + employee.Position.PositionName}</td>
                 <td>{employee.AddressStreet + "," + employee.AddressState + "," + employee.AddressCity + "," + employee.AddressZip}</td>
                 <td>{employee.PhoneNum}</td>
                 <td>{moment(employee.HireDate).utc().format('LL')}</td>
                 <td>{employee.SalaryBonus}</td>
               </tr>
             );
           })}
         </tbody>
       </table>
       </div>
      </ MainContainer>
    );
  }
}

export default Employees
