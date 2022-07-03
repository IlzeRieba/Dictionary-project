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
        <Dictionary defaultKeyword="sunshine"/>
      </main>
      <footer>Coded by Ilze Rieba</footer>
    </div>
  );
}

export default App;
