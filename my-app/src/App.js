import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Todo from './components/Todo';

class App extends Component {

  setrand(){
    return Math.random();
  }
  componentWillReceiveProps(nextProps) {
    setTimeout(() => {
        switch(nextProps.ActionType){
            case "GET_TODO":
                var data = nextProps;
                if(nextProps.data){
                    this.setState({
                        todoData: data
                    });
                } else{
                    
                }
            break;
            default:
            break;
        }
    }, 0)
}

  render() {
    return (
      <div>
        <Todo rand={this.setrand}/>
      </div>
    );
  }
}

export default App;
