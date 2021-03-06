import { useTranslation } from "react-i18next";
import logo from './logo.svg';
import './App.css';

function App() {
  const { t: __ } = useTranslation();

  return (
    <div className="App">
      <header className="App-header">
        <h2>{__('Welcome to React')}</h2>
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
