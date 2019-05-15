import React, { Component } from 'react';// eslint-disable-next-line 
import { BrowserRouter, Route, NavLink, Switch, Redirect } from 'react-router-dom';
import NotFound from './containers/404Error/404Error';
import './App.css'


import Courses from './containers/Courses/Courses';
import Users from './containers/Users/Users';

class App extends Component {
  render () {
    return (
      <BrowserRouter>
        <div >
        <header>
                    <nav>
                        <ul>
                            <li><NavLink to="/users/" exact className="text">Users</NavLink></li>
                            <li><NavLink to={{
                                pathname: '/courses'
                        }}
                        className="text"
                        >Courses</NavLink></li>
                        </ul>
                    </nav>
          </header>
          <Switch>
            <Route path="/courses" component={Courses} />
            {/* <Route path="/course/:id" component={Course} /> */}
            <Route path="/users" component={Users} />
            <Route render={() => <NotFound />} />
            {/* <Redirect from="/" to="/courses"/> */}
          </Switch>
          <ol style={{ textAlign: 'left' }}>

            
          </ol>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;