import React from "react";
import "./App.css";
import Synonyms from "./Synonyms";

export default function Meaning(props) {
  console.log(props.meaning);
    return (
      <div className="Meaning">
        <h3>{props.meaning.partOfSpeech}</h3>
        <strong>Definitions:</strong>
        {props.meaning.definitions.map(function (definition, index) {
          return (
            <div key={index}>
              <p>
                {definition.definition}
                <br />
                <em> {definition.example} </em>
                <Synonyms synonyms={definition.synonyms} />
              </p>
            </div>
          );
        })}
      </div>
    );
}