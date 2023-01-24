import logo from './VerbatimBanner.jpg';
import './App.css';

function App() {
  return (
    <div className="App">
      <title>Verbatim Studios</title>
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          It all starts here and now...
        </p>
        <a
          className="App-link"
          href="https://github.com/scottynate05"
          target="_blank"
          rel="noopener noreferrer"
        >
          Let's Chat
        </a>
        <a
          className="App-link"
          href="https://twitter.com/scottydontcode"
          target="_blank"
          rel="noopener noreferrer"
        >
          Expression
        </a>
      </header>
    </div>
  );
}

export default App;