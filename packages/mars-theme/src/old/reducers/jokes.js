import {
    ALL_JOKES,
    SINGLE_JOKE
} from '../actions/type';
import merge from 'lodash/merge';

const initialState = {
    all: ['test', 'test2'],
};


export default (state = initialState, action) => {
    switch (action.type) {
        case ALL_JOKES:
            return {
                ...state,
                all: action.payload
            };
        case SINGLE_JOKE:
            return {
                ...state,
                single: action.payload
            };
        default:
            return state
    }
}