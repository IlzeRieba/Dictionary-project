import React, {useState} from "react";
import "./Dictionary.css";
import axios from "axios";


export default function Dictionary() 
{
let [ keyWord, setKeyword] = useState("");

function handleResponse(response) {
    console.log(response.data[0]);
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
      </div>
    );
}