import React, {useState} from "react";
import "./Dictionary.css";
import axios from "axios";
import Results from "./Results";


export default function Dictionary() 
{
let [ keyWord, setKeyword] = useState("");
let [results, setResults] = useState(null);

function handleResponse(response) {
    console.log(response.data[0]);
    console.log(response.data[0].meanings[0].definitions[0].definition);
setResults(response.data[0]);

}

    function handleSubmit(event) {
      event.preventDefault();

      //documentation https://dictionaryapi.dev/
      let apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en/${keyWord}`;
      console.log(apiUrl);
      axios.get(apiUrl).then(handleResponse);
    }

    function handleKeywordChange(event) {
setKeyword(event.target.value);
    }

    return (
      <div className="Dictionary">
        <form onSubmit={handleSubmit}>
          <input type="search" onChange={handleKeywordChange} />
          <input type="submit" />
        </form>
        <Results results={results}/>
      </div>
    );
}