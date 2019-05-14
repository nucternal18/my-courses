import React, { Component } from 'react';
import './Course.css';
import queryString from 'query-string';

class Course extends Component {
    state = {
        title: '',
        loadTitle: false
    }

    const values = () => { queryString.parse(this.props.location.search)
    if (!this.state.loadTitle) {
        this.setState({ title: values.title})
    }
    }
    
    componentDidMount() {
        console.log(this.props);
        const values = queryString.parse(this.props.location.search)
        //const myQuery = new URLSearchParams(this.props.location.search);
        console.log(values);
        this.setState({ title: values.title})        
    }
    
    render () {
        return (
            <div className="Course">
                <h1>{this.props.title}</h1>
                <p>You selected the Course with ID: {this.props.match.params.id}</p>
            </div>
        );
    }
}

export default Course;