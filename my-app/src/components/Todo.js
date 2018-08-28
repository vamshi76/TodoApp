import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { addTodo, getTodo, removeTodo } from '../actions/TodoAction';

class Todo extends Component {
    constructor(){
        super();
        this.state = {
            newTodo: '',
            todoData: []
        }
        this.addTodo = this.addTodo.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }

    componentDidMount() {
        this.props.getTodo();
    }
    
   componentWillReceiveProps(nextProps) {
        if(this.props != nextProps){
            setTimeout(() => {
                switch(nextProps.ActionType){
                    case "GET_TODO":
                        var data = nextProps.data;
                        if(nextProps.data){
                            this.setState({
                                todoData: data
                            });
                        } else{
                            
                        }
                    break;
                    case "REMOVE_TODO":
                        var data = nextProps.data;
                        if(nextProps.data){
                            this.props.getTodo();
                        } else{
                            
                        }
                    break;
                    case "ADD_TODO":
                        var data = nextProps.data;
                        if(nextProps.data){
                            this.props.getTodo();
                        } else{
                            
                        }
                    break;
                    default:
                    break;
                }
            }, 0)
        }
    }

    addTodo() {
        var taskObj = {
            task: this.state.newTodo,
        };

        this.setState({
            newTodo: ''
        })

        this.props.addTodo(taskObj);
    }

    handleChange(e) {
        this.setState({
            newTodo: e.target.value
        })
    }

    removeTodo = (id) => (event) => {
        this.props.removeTodo(id);
    }

    render() {
        return (
            <div className='container'>
                <div>
                    <input type='text' placeholder='New' value={this.state.newTodo} onChange={this.handleChange} />
                    <button onClick={this.addTodo}>Add Todo</button>
                </div>
                <div>
                    <ul>
                    {
                        this.state.todoData.map(todo => {
                            return (
                                <li key={todo.id}>
                                    <div>
                                        <div className='task'>{todo.task}</div>
                                        <button onClick={this.removeTodo(todo.id)}>Delete Todo</button>
                                    </div>
                                    
                                </li>
                            )
                        })
                    }
                    </ul>
                </div>
            </div>
        )
    }
}

function mapStateToProps(state) {
    return {
        data: state.TodoReducer.responseData,
        ActionType: state.TodoReducer.ActionType
    }
}

function mapDispatchToProps(dispatch){
    return bindActionCreators({
        addTodo: addTodo,
        getTodo: getTodo,
        removeTodo: removeTodo
    }, dispatch);
}
export default connect(mapStateToProps, mapDispatchToProps, null, {pure: false})(Todo);