import React, { Component } from 'react';// eslint-disable-next-line 
import { BrowserRouter, Route, NavLink, Switch, Redirect } from 'react-router-dom';


import Courses from './containers/Courses/Courses';
import Course from './containers/Course/Course';
import Users from './containers/Users/Users';

class App extends Component {
  render () {
    return (
      <BrowserRouter>
        <div className="App">
        <header>
                    <nav>
                        <ul>
                            <li><NavLink to="/users/" exact>Users</NavLink></li>
                            <li><NavLink to={{
                                pathname: '/courses'
                            }}>Courses</NavLink></li>
                        </ul>
                    </nav>
          </header>
          <Switch>
            <Route path="/courses" component={Courses} />
            <Route path="/course/:id" exact component={Course} />
            <Route path="/users" component={Users} />
          </Switch>
          <ol style={{ textAlign: 'left' }}>

            <li>Pass the course title to the "Course" page - pass it as a param or score bonus points by passing it as query params (you need to manually parse them though!)</li>
            <li>Load the "Course" component as a nested component of "Courses"</li>
            <li>Add a 404 error page and render it for any unknown routes</li>
            <li>Redirect requests to /all-courses to /courses (=> Your "Courses" page)</li>
          </ol>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;