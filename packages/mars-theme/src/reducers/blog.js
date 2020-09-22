import {
    GET_BLOGS,
    SINGLE_ARTICLE,
    BLOG_CATEGORIES,
    LOAD_BLOGS_PER_PAGE,
    SHOW_MESSAGE,
    GET_BLOG_TAGS,
    SET_ACTIVE_BLOG_CATEGORY
} from '../actions/type';
import merge from 'lodash/merge';
import { connect, styled, decode } from "frontity";

const initialState = {
    blogs: {},
    categories: [{ name: 'test' }, { name: 'test2' }],
    message: null,
    tags: [],
    active_category: { id: 0, index: 0 }
};

export default (state = initialState, action) => {
    switch (action.type) {
        case SET_ACTIVE_BLOG_CATEGORY:
            return {
                ...state,
                active_category: action.payload
            };
        case GET_BLOGS:
            return {
                ...state,
                blogs: action.payload
            };
        case LOAD_BLOGS_PER_PAGE:
            return {
                ...state,
                blogs: {
                    result: state.blogs.result.concat(action.payload.result),
                    page: action.payload.page,
                    posts_per_page: action.payload.posts_per_page
                }
            };
        case SHOW_MESSAGE:
            return {
                ...state,
                message: action.payload
            };
        case SINGLE_ARTICLE:
            return {
                ...state,
                article: action.payload
            };
        case BLOG_CATEGORIES:
            return {
                ...state,
                categories: action.payload
            };
        case GET_BLOG_TAGS:
            console.log(action.payload)
        /* return {
            ...state,
            tags: action.payload
        }; */
        default:
            return state
    }
}