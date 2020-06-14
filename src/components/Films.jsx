import React, { Component } from 'react';

class Films extends Component {
    constructor(props) {
        super(props);
        
        this.state = {

        };
    }
    render() {
        return (
            <div className="card film-card">
                <div className="card-body">
                    <h4 className="card-title">{this.props.title}</h4>
                    <p className="card-text">{this.props.description}</p>
                </div>
            </div>
        )
    }
}

export default Films;