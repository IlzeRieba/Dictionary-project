import React, {useState} from "react";
import "./Dictionary.css";
import axios from "axios";
import Results from "./Results";


export default function Dictionary(props) 
{
let [ keyWord, setKeyword] = useState(props.defaultKeyword);
let [results, setResults] = useState(null);
let [loaded, setLoaded] = useState(false);

function handleResponse(response) {

setResults(response.data[0]);

}

function search() {
  //documentation https://dictionaryapi.dev/
  let apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en/${keyWord}`;
  axios.get(apiUrl).then(handleResponse);
}

    function handleSubmit(event) {
      event.preventDefault();
search();
      
    }

    function handleKeywordChange(event) {
setKeyword(event.target.value);
    }
    
    function load() {
        setLoaded(true);
        search();
    }

if (loaded) {
  return (
    <div className="Dictionary">
      <section>
          <h3>
           What word do you want to look up?
          </h3>
        <form onSubmit={handleSubmit}>
          <input type="search" onChange={handleKeywordChange} defaultValue={props.defaultKeyword} />
        </form>
        <div className="hint">
          Suggested words: flower, love, ocean, sunshine...
        </div>
      </section>

      <Results results={results} />
    </div>
  );
} else {
    load();
    return "loading";
}
}