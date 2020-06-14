import React, { Component } from 'react';
import Films from './Films';
// import 'isomorphic-fetch';
// import 'es6-promise';

class RetrieveData extends Component {
    constructor(props) {
        super(props);

        this.state = {
            films: []
        };
    }

    componentDidMount() {
        fetch('https://ghibliapi.herokuapp.com/films')
        .then(res => res.json())
        .then(films => {
            this.setState({films});
        });
    }
    render() {
    return (
        <div className="container-fluid justify-content-center">
            <div className="row">
                {this.state.films.map((film, index) => {
                    return (
                        <div key={index} className="col-lg-4">
                            <Films title={film.title} description={film.description} id={film.id} />
                        </div>
                    )
                })}
            </div>

        </div>
        )
    }
}

export default RetrieveData;