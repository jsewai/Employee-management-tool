import React, { Component } from 'react';

import MainContainer from './MainContainer.jsx';
import ProjectsPanel from './ProjectsPanel.jsx';
import TeamsPanel from './TeamsPanel.jsx';
import EmployeesPanel from './EmployeesPanel.jsx';

class Overview extends Component{
  render(){
    return(
      <MainContainer sidebar={this.props.title}>
        <div className="row">
          <div className="col-md-4">
          <ProjectsPanel title="Project"/>
          </div>
          <div className="col-md-4">
            <TeamsPanel title="Teams"/>
          </div>
          <div className="col-md-4">
            <EmployeesPanel title="Employees"/>
          </div>
        </div>
      </MainContainer>
    )
  }
}

export default Overview
