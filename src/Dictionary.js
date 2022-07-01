import React, {useState} from "react";
import "./Dictionary.css";


export default function Dictionary() 
{
let [ keyWord, setKeyword] = useState("");

    function handleSubmit(event) {
        alert(`Searching for ${keyWord} definition`);
    }

    function handleKeywordChange(event) {
setKeyword(event.target.value);
    }

    return (
      <div className="Dictionary">
        <h1>Dictionary</h1>
        <form onSubmit={handleSubmit}>
          <input type="search" onChange={handleKeywordChange} />
          <input type="submit" />
        </form>
      </div>
    );
}