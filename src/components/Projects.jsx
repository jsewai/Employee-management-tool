import React, { Component } from 'react';

import moment from 'moment';

import MainContainer from './MainContainer.jsx';

class Projects extends Component{
  constructor(){
    super();
    this.state = {
      projects: []
    }
  }

  componentDidMount(){
    fetch("https://shrouded-everglades-65036.herokuapp.com/projects")
    .then(res => res.json())
    .then(data => {
        this.setState({
          projects : data
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
             <th>Description</th>
             <th>Start Date</th>
             <th>End Date</th>
           </tr>
         </thead>
         <tbody>
           {this.state.projects.map((project, index) => {
             return (
               <tr key={index}>
                 <td>{project.ProjectName}</td>
                 <td>{project.ProjectDescription}</td>
                 <td>{moment(project.ProjectStartDate).utc().format('LL')}</td>
                 <td>{(project.ProjectEndDate == null ? 'n/a' : moment(project.ProjectEndDate).utc().format('LL'))}</td>
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

export default Projects
