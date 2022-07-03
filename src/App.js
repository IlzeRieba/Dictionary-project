import './App.css';
import Dictionary from './Dictionary';

function App() {
  return (
    <div className="container">
      <div className="App">
        <header className="App-header"></header>
      </div>
      <main>
        <h1>Dictionary</h1>
        <Dictionary defaultKeyword="sunshine" />
      </main>
      <footer>
        Coded by Ilze Rieba, open-sourced on{" "}
        <a
          href="https://github.com/IlzeRieba/Dictionary-project"
          target="_blank"
          rel="noreferrer"
        >
          Github{" "}
        </a>{" "}
        and hosted on{" "}
        <a
          href="https://frabjous-blancmange-32a015.netlify.app/"
          target="_blank"
          rel="noreferrer"
        >
          Netlify
        </a>
      </footer>
    </div>
  );
}

export default App;
