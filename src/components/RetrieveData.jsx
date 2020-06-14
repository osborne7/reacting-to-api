import React, { Component } from 'react';
import Films from './Films';
import People from './People';


// import 'isomorphic-fetch';
// import 'es6-promise';

class RetrieveData extends Component {
    constructor(props) {
        super(props);

        this.state = {
            films: [],
            people: [],
            filmsLoaded: false,
            peopleLoaded: false
        };
    }

    componentDidMount() {
        fetch('https://ghibliapi.herokuapp.com/films')
        .then(res => res.json())
        .then(films => {
            this.setState({films});
        });
        fetch('https://ghibliapi.herokuapp.com/people')
        .then(res => res.json())
        .then(people => {
            this.setState({people});
        });
    }

    filmsLoaded() {
        this.setState({ filmsLoaded: true });
    }

    peopleLoaded() {
        this.setState({ peopleLoaded: true });
    }

    showFilms() {
        return (
        <main>
        <img className="mx-auto d-block" src="https://ghibliapi.herokuapp.com/images/logo.svg" alt="studio ghibli logo"/>
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
    </main>
        )
    }

    showPeople() {
        return (
            <main>
            <img className="mx-auto d-block" src="https://ghibliapi.herokuapp.com/images/logo.svg" alt="studio ghibli logo"/>
            <div className="container-fluid justify-content-center">
            <div className="row">
                {this.state.people.map((person, index) => {
                    return (
                        <div key={index} className="col-lg-4">
                            <People name={person.name} age={person.age} gender={person.gender} />
                        </div>
                    )
                })}
            </div>
        </div>
        </main>
            )
    }

    initialView() {
        return (
            <div>
                <img className="mx-auto d-block" src="https://ghibliapi.herokuapp.com/images/logo.svg" alt="studio ghibli logo"/>
                <button className="btn btn-block btn-lg btn-outline-primary" onClick={() => this.filmsLoaded()}>Show Films</button>
                <br/>
                <button className="btn btn-block btn-lg btn-outline-primary" onClick={() => this.peopleLoaded()}>Show People</button>
            </div>
        )
    }

    render() {
        if (this.state.filmsLoaded) {
            return (
            <div>{this.showFilms()}</div>
            )
        } else if (this.state.peopleLoaded) {
            return (
            <div>{this.showPeople()}</div>
            )
        } else {
            return (
            <div>{this.initialView()}</div>
            )
        }
    }
}

export default RetrieveData;