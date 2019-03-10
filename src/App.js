/*********************************************************************************
* WEB422 – Assignment 04
* I declare that this assignment is my own work in accordance with Seneca Academic Policy. No part of this
* assignment has been copied manually or electronically from any other source (including web sites) or
* distributed to other students.
*
* Name: Junya Sewai Student ID: 013019153 Date: 2019/03/08
*
********************************************************************************/

import React, { Component } from 'react';
import {  BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Overview from './components/Overview.jsx';
import Projects from './components/Projects.jsx';
import Teams from './components/Teams.jsx';
import Employees from './components/Employees.jsx';
import NotFound from './components/NotFound.jsx';

class App extends Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route exact path="/" render={() => <Overview title="Overview" />} />
          <Route exact path="/employees" render={() => <Employees title="Employees" />} />
          <Route exact path="/teams" render={() => <Teams title="Teams" />} />
          <Route exact path="/projects" render={() => <Projects title="Project" />} />
          <Route path="*" render={() => <NotFound title="404 Error Page Not Found" />} />
        </Switch>
      </Router>
    );
  }
}

export default App;
