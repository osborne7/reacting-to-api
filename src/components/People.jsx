import React, { Component } from 'react';

class People extends Component {
    constructor(props) {
        super(props);
        
        this.state = {

        };
    }
    render() {
        return (
            <div className="card film-card">
                <div className="card-body">
                    <h4 className="card-title">{this.props.name}</h4>
                    <p className="card-text">{this.props.age}</p>
                    <p className="card-text">{this.props.gender}</p>
                </div>
            </div>
        )
    }
}

export default People;