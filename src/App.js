import React, { Component } from 'react';
import TOC from "./components/TOC";
import Content from "./components/Content";
import Subject from "./components/Subject";
import './App.css';

// state와 props 이해하기
class App extends Component {
  // render보다 먼저 실행되면서 그 컴포넌트를 초기화 시켜주고 싶은 코드는 constructor함수 안에다가 코드를 작성한다.
  constructor(props){
    super(props);
    this.state = {
      subject:{title: 'WEB', sub:'World Wide WEB!'},
      contents:[
        {id: 1, title:'HTML', desc:'HTML is for information'},
        {id: 2, title:'CSS', desc:'CSS is for design'},
        {id: 3, title:'Javascript', desc:'Javascript is for interactive'}
      ]
    }
  }
  render(){
    return(
      <div className="App">
        <Subject 
          title={this.state.subject.title} 
          sub={this.state.subject.sub}>            
          </Subject>
          <TOC data={this.state.contents}></TOC>
          <Content title="HTML" desc="HTML is HyperText Markup Language."></Content>
      </div>
    );
  }
}

// 상위 컴포넌트(App)의 State값을 하위 컴포넌트에 props값으로 전달했다.

export default App;
