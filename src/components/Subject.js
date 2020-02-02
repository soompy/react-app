import React, { Component } from 'react';

class Subject extends Component {
    render() {
      console.log('Subject render');
      return (
        <header>
          <h1> <a href="/" onClick={function(e){
            e.preventDefault();
            // a를 click 했을 때 props로 전달된 onChangePage 이벤트를 호출한다.
            this.props.onChangePage();
          }.bind(this)}>{this.props.title}</a> </h1>
          {this.props.sub}
        </header>
      );
    }
  }

  export default Subject;