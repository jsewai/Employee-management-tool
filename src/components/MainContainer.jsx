import React, { Component } from 'react';

import NavBar from './NavBar.jsx';
import SideBar from './SideBar.jsx';

class MainContainer extends Component{
  render(){
    return(
      <div>
      <NavBar />
        <div className="container-fluid">
          <div className="row">
            {console.log("the title is " + this.props.sidebar)}
            <SideBar highlight={this.props.sidebar}/>
            <div className=" col-sm-9 col-sm-offset-3 col-md-10 col-md-offset-2 main">
              <h1 className="page-header">{this.props.sidebar}</h1>
              {this.props.children}
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default MainContainer
