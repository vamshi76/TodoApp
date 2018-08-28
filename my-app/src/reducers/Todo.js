import {
    ADD_TODO,
    REMOVE_TODO,
    GET_TODO
} from '../constants/TodoActionType';

const TodoReducer = (state = { responseData: [] }, action) => {
    switch(action.type){
        case ADD_TODO:
            state = {
                ...state,
                responseData: action.payload,
                ActionType: action.type
            }
        break;
        case REMOVE_TODO:
            state = {
                ...state,
                responseData: action.payload,
                ActionType: action.type
            }
            break;
        case GET_TODO:
            state = {
                ...state,
                responseData: action.payload,
                ActionType: action.type
            }
            break;
        default: break;
    }
    return state;
}

export default TodoReducer;