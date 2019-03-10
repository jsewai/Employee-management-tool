import React, { Component } from 'react';

import MainContainer from './MainContainer.jsx';


class Teams extends Component{
  constructor(){
    super();
    this.state = {
      teams: []
    }
  }

  componentDidMount(){
    fetch("https://shrouded-everglades-65036.herokuapp.com/teams")
    .then(res => res.json())
    .then(data => {
        this.setState({
          teams : data
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
             <th>Name</th>
             <th>Projects</th>
             <th>Employees</th>
             <th>Team Lead</th>
           </tr>
         </thead>
         <tbody>
         {this.state.teams.map((team, ind) => {
          return (
            <tr key={ind}>
              <td>{team.TeamName}</td>
              <td>
              <ul>
                {team.Projects.map((name, index) => {
                  return (<li key={index}>{name.ProjectName}</li>);
                })}
                </ul>
              </td>
              <td>{team.Employees.length}</td>
              <td>{team.TeamLead.FirstName + " " + team.TeamLead.LastName}</td>
            </tr>
          )
         })}
         </tbody>
       </table>
       </div>
      </ MainContainer>
    );
  }
}

export default Teams
