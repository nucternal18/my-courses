import React, { Component } from 'react';
import { BrowserRouter, Route, NavLink, Switch, Redirect } from 'react-router-dom';
import NotFound from './containers/404Error/404Error';


import Courses from './containers/Courses/Courses';
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
            {/* <Route path="/course/:id" component={Course} /> */}
            <Route path="/users" component={Users} />
            <Redirect from="/" to="/courses"/>
            <Route component={NotFound}/>
          </Switch>
          <ol style={{ textAlign: 'left' }}>

            <li>Pass the course title to the "Course" page - pass it as a param or score bonus points by passing it as query params (you need to manually parse them though!)</li>
            <li>Add a 404 error page and render it for any unknown routes</li>
          </ol>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;