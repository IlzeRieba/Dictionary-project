import React, {useState} from "react";
import "./Dictionary.css";
import axios from "axios";
import Results from "./Results";
import Photos from "./Photos";


export default function Dictionary(props) 
{
let [ keyWord, setKeyword] = useState(props.defaultKeyword);
let [results, setResults] = useState(null);
let [loaded, setLoaded] = useState(false);
let [photos, setPhotos] = useState(null);

function handleResponse(response) {

setResults(response.data[0]);

}

function handlePexelsResponse(response) {
    console.log(response.data);
    setPhotos(response.data.photos);
}

function search() {
  //documentation https://dictionaryapi.dev/
  let apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en/${keyWord}`;
  axios.get(apiUrl).then(handleResponse);

  let pexelsApiKey = "563492ad6f91700001000001caf5510f27284d9eb47f370ff594ab93";
let pexelsApiUrl = `https://api.pexels.com/v1/search?query=${keyWord}&per_page=9`;
let headers = { Authorization : `Bearer ${pexelsApiKey}`};
axios.get(pexelsApiUrl, { headers: headers,}).then(handlePexelsResponse);

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
      <Photos photos={photos} />
    </div>
  );
} else {
    load();
    return "loading";
}
}