import React, { Component } from 'react';

class TOC extends Component {
    // TOC에는 기본적으로 this.props.data라고 하는 값을 가지고 있다.    
    render() {
      console.log('Toc render');
      var lists = [];
      var data = this.props.data;
      var i = 0;
      while(i < data.length){
        lists.push(
          <li key={data[i].id}>
            <a 
              href={"/content/"+data[i].id}
              data-id = {data[i].id}
              
              /*
                // 속성을 이용한 방식
                onClick={function(e){
                  e.preventDefault();
                  this.props.onChangePage(e.target.dataset.id);
                }.bind(this)}
              */

              onClick={function(id, e){                
                e.preventDefault();
                this.props.onChangePage(id);
              }.bind(this, data[i].id)}
            >{data[i].title}</a>
          </li>);      
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