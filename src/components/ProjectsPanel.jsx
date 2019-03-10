import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import moment from 'moment';

class ProjectsPanel extends Component{
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

    <div className="panel panel-default">
      <div className="panel-heading">
        <h3 className="panel-title">{this.props.title}</h3>
      </div>
      <div className="panel-body">
          <div className="table-responsive overview-table">
            <table className="table table-striped table-bordered">
              <tbody>
              {this.state.projects.map((project, index) =>{
                return(
                  <tr key={index}>
                    <td>{project.ProjectName}</td>
                    <td>Active {moment().diff(moment(project.ProjectStartDate),'days')} days</td>
                  </tr>
                )
              })}

              </tbody>
            </table>
          </div>
        </div>
        <Link to="/projects" className="btn btn-primary form-control">View All Projects Data</Link>
      </div>
    );
  }
}

export default ProjectsPanel
