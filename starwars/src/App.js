import React, { Component } from 'react';
import StarWars from './components/StarWars'
import Pagination from './components/Pagination';
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      starwarsChars: [],
      next: null,
      previous: null
    };
  }

  componentDidMount() {
    this.getCharacters('https://swapi.co/api/people/');
  }

  getCharacters = URL => {
    // feel free to research what this code is doing.
    // At a high level we are calling an API to fetch some starwars data from the open web.
    // We then take that data and resolve it our state.
    fetch(URL)
      .then(res => {
        return res.json();
      })
      .then(data => {
        console.log(data);
        this.setState({
          starwarsChars: data.results,
        next: data.next,
      previous: data.previous });
      })
      .catch(err => {
        throw new Error(err);
      });
  };

  nextPage = () => {
    if (this.state.next){
      this.getCharacters(this.state.next);
    }
    
  }

  prevPage = () => {
    if(this.state.previous) {
      this.getCharacters(this.state.previous);
    }
  }

  render() {
    const { starwarsChars } = this.state
    

    return (
      <div className="App">
        <h1 className="Header">React Wars</h1>
        <div className="card__container">
        <StarWars starwarsChars={starwarsChars}/>
        </div>
        <Pagination text="previous" prevPage={this.prevPage}/>
        <Pagination text="next" nextPage={this.nextPage}/>
      </div>
    );
  }
}

export default App;
