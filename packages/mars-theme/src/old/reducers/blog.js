import {
    ALL_BLOGS,
    SINGLE_ARTICLE
} from '../actions/type';
import merge from 'lodash/merge';

const initialState = {
    blogs: [],
};

export default (state = initialState, action) => {
    switch (action.type) {
        case ALL_BLOGS:
            return {
                ...state,
                blogs: action.payload
            };
        case SINGLE_ARTICLE:
            return {
                ...state,
                article: action.payload
            };
        default:
            return state
    }
}