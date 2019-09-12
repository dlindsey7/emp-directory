import React from 'react';
import logo from './logo.svg';
import './App.css';
//import {ReactComponent} from "*.svg";
//import Employee from './Employee';
import Directory from './Directory';

const App: React.FC = () => {
  return (
    <div className="App">
      <Directory name={'zone'}/>
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
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

/*class App extends React.Component<Employee> {
  render() {
    return(
      <div>
        <h2>
          {this.props.firstName}
        </h2>

      </div>
    );
  }
}*/

export default App;
