// import React from 'react';
// import logo from './logo.svg';
import React, { Component } from 'react';
import './App.css';


/*
class Subject extends Component { // subject라는 컴포넌트를 만들겠다.
  render() { // render라는 함수가 반드시 필요하다.
    return ( // **하나의 최상위 태그만 사용해야 한다.
      <header>
        <h1>WEB</h1>
        world wide web!
      </header>
    );
  }
}
*/

class TOC extends Component {
  render() {
    return (
      <nav>
        <ul>
          <li><a href="1.html">HTML</a></li>
          <li><a href="2.css">CSS</a></li>
          <li><a href="3.js">JS</a></li>
        </ul>
      </nav>
    );
  }
}

/*
class Content extends Component{
  render(){
    return(
      <article>
            <h2>HTML</h2>
            HTML is HyperText Markup Language.
        </article>  
    );
  }
}
*/

class Subject extends Component {
  render() {
    return (
      <header>
        <h1>{this.props.title}</h1>
        {this.props.sub}
      </header>
    );
  }
}



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



/*
function App() {
  return (
    <div className="App">
      <header className="App-header">
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
*/

export default App;
