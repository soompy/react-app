import React, { Component } from 'react';

class TOC extends Component {
    // TOC에는 기본적으로 this.props.data라고 하는 값을 가지고 있다.    
    render() {
      var lists = [];
      var data = this.props.data;
      var i = 0;
      while(i < data.length){
        lists.push(<li key={data[i].id}><a href={"/content/"+data[i].id}>{data[i].title}</a></li>);      
        i = i + 1;
      }
      return (
        <nav>
          <ul>
            {lists}           
          </ul>
        </nav>
      );
    }
  }

  export default TOC;