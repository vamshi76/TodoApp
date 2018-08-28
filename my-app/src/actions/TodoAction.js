import { ADD_TODO, REMOVE_TODO, GET_TODO }  from '../constants/TodoActionType';
import axios from 'axios';

export function addTodo(data){
    return dispatch => {
        axios.post('https://5b8341b15118040014cd6c64.mockapi.io/api/todo', data) 
        .then(response => {
            if (response.status >= 200 && response.status < 300) {
                console.log('Your Request is added successfully.');
                dispatch(returnAddTodo(response));
            }else {
                //console.log('Error');
            }
        })
        .catch(error => {
            //console.log('Error: ' + error);
            return error;
        });
    }
}

export function removeTodo(id){
    return dispatch => {
        axios.delete(`https://5b8341b15118040014cd6c64.mockapi.io/api/todo/${id}`) 
        .then(response => {
            if (response.status >= 200 && response.status < 300) {
                console.log('Your Request is processed successfully.');
                dispatch(returnRemoveTodo(response.data));
            }else {
                //console.log('Error');
            }
        })
        .catch(error => {
            //console.log('Error: ' + error);
            return error;
        });
    }
}

export function getTodo(){
    return dispatch => {
        axios.get('https://5b8341b15118040014cd6c64.mockapi.io/api/todo') 
        .then(response => {
            if (response.status >= 200 && response.status < 300) {
                console.log('Your Request is fetched successfully.');
                dispatch(returnGetTodo(response.data));
            }else {
                //console.log('Error');
            }
        })
        .catch(error => {
            //console.log('Error: ' + error);
            return error;
        });
    }
}

function returnAddTodo(response){
    return {
        type: ADD_TODO,
        payload: response
    }
}

function returnRemoveTodo(response){
    return {
        type: REMOVE_TODO,
        payload: response
    }
}

function returnGetTodo(response){
    return {
        type: GET_TODO,
        payload: response
    }
}
