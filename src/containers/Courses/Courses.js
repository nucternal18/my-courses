import React, { Component } from 'react';
import { Route, NavLink } from 'react-router-dom';
import Course from '../Course/Course';// eslint-disable-next-line
import queryString from 'query-string';

import './Courses.css';

class Courses extends Component {
    state = {
        courses: [
            { id: 1, title: 'Angular - The Complete Guide' },
            { id: 2, title: 'Vue - The Complete Guide' },
            { id: 3, title: 'PWA - The Complete Guide' }
        ],
        loadCourse: null,

    }

    componentDidMount() {
        console.log(this.props)
        
    }

    selectedCourseHandler = (Id) => {
        this.props.history.push({pathname: this.props.match.url + '/courses/' + Id})
    }

    render() {
        let course = this.state.courses.map( course => {
            return (
                <NavLink to={
                    "/course/" + course.id
                } className="Course" key={course.id}>
                    {course.title}   
                </NavLink>
            )
        } )
        
        return (
            <div className="Content">
                <h1>Amazing Udemy Courses</h1>
                <section className="Courses">
                    {course}   
                </section>

                <hr />
            
                <Route path={this.props.match.url + "/:id"} component={Course} />
            </div>
        );
    }
}

export default Courses;