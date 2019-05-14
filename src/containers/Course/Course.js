import React, { Component } from 'react';
import './Course.css';
import queryString from 'query-string';

class Course extends Component {
    state = {
        courseTitle: '',
    }
    locationSearch = () => {
        const myQuery = new URLSearchParams(this.props.location.search);// eslint-disable-next-line 
        const values = queryString.parse(this.props.location.search)
        console.log(myQuery);
        
    };

    componentDidMount() {
        console.log(this.props.location.search);
        
    }
    
    render () {
        return (
            <div className="Course">
                <h1>{this.props.match.params.title}</h1>
                <p>You selected the Course with ID: {this.props.match.params.id}</p>
            </div>
        );
    }
}

export default Course;