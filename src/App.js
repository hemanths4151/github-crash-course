import logo from "./logo.svg";
import "./App.css";
import Home from "./components/Home";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <section>
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
        </section>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Home />
        </a>
      </header>
    </div>
  );
}

export default App;
