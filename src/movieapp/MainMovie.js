import React, { useState } from 'react';
import Search from './Search';
import Results from './Results';
import axios from 'axios';
import '../styles/MovieApp.css';
function MainMovie() {
    const [state, setState] = useState({
        s: "",
        results: [],
        selected: {}
    })
    const apiUrl = "http://www.omdbapi.com/?i=tt3896198&apikey=901daf37";
    const search = (e) => {
        if (e.key === "Enter") {
          axios(apiUrl + "&s=" + state.s).then(({ data }) => {
            let results = data.Search;
            setState(prevState => {
              return { ...prevState, results: results }
            })
          });
        }
    }
    const handleInput = (e) => {
        let s = e.target.value;

        setState(prevState => {
            return {...prevState, s: s}
        })
    }
    return (
        <div className="MainApp">
            <header>
                <h1>Movie App </h1>
            </header>
            <Search handleInput={handleInput} search={search}/>
            <Results results={state.results} />
        </div>
    )
}
export default MainMovie;