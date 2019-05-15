import React, { Component } from 'react';
import './Course.css';// eslint-disable-next-line
import queryString from 'query-string';


class Course extends Component {
    state = {
        title: '',
    }
    handleTitle() {        
            const query = new URLSearchParams(this.props.location.search)
            for (let param of query.entries()) {
                if (this.state.title !== param[1]) {
                    this.setState({ title: param[1] })
                }
            } 
    }
    
    componentDidMount() {
        console.log(this.props);
        this.handleTitle()
    }

    componentDidUpdate() {
        this.handleTitle()
    }
    
    render () {
        return (
            <div className="Course">
                <h1>{this.state.title}</h1>
                <p>You selected the Course with ID: {this.props.match.params.id}</p>
            </div>
        );
    }
}

export default Course;