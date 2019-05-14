import React, { Component } from 'react';
import { Route, Link } from 'react-router-dom';
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

    selectedCourseHandler = (id) => {
        this.props.history.push({pathname: this.props.match.url + '/courses/' + id})
    }

    render() {
        let course = this.state.courses.map( course => {
            return (
                <Link 
                    className="Course" 
                    key={course.id}
                    to={{
                    
                       pathname: this.props.match.url + "/course/" + course.id,
                       search: '?tittle=' + course.title

                    }}
                >
                    {course.title}   
                </Link>
            )
        } )
        
        return (
            <div className="Content">
                <h1>Amazing Udemy Courses</h1>
                <section className="Courses">
                    {course}   
                </section>

                <hr />
            
                <Route path={this.props.match.url + "/course/:id"} component={Course} />
            </div>
        );
    }
}

export default Courses;