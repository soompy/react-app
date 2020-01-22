// import React from 'react';
import React, { Component } from 'react';
// import ReactDOM from 'react-dom';
// import './index.css';
// import App from './App';
import TOC from "./components/TOC";
import Content from "./components/Content";
import Subject from "./components/Subject";
// import * as serviceWorker from './serviceWorker';


// ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
// serviceWorker.unregister();

class App extends Component {
    render() {
      return (
        <div className="App">
          <Subject title="WEB" sub="world wide web!"></Subject>
          <Subject title="React" sub="For UI"></Subject>
          <TOC></TOC>
          <Content title="HTML" desc="HTML is HyperText Markup Language."></Content>
        </div>
      );
    }
  }
  
export default App;