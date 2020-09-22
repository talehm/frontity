import {
    GET_BLOGS,
    SINGLE_ARTICLE,
    BLOG_CATEGORIES,
    LOAD_BLOGS_PER_PAGE,
    SHOW_MESSAGE,
    GET_BLOG_TAGS,
    SET_ACTIVE_BLOG_CATEGORY
} from './type'
import { connect, styled, decode } from "frontity";


export const handleBlogCategory = (id, index, tagSlug) => dispatch => {
    console.log(id, index, tagSlug)
    const data = { id: id, index: index }
    dispatch({
        type: SET_ACTIVE_BLOG_CATEGORY,
        payload: data,
    })
    //browserHistory.push('/registrationStep2')
    dispatch(getBlogs(id, 1, tagSlug))
}

export const getBlogCategories = () => dispatch => {
    fetch('/index.php/wp-json/wp/v2/categories', {
        method: "GET",
        headers: {
            'Content-Type': 'application/json',
        },
    })
        .then(res => res.json())
        .then(data => dispatch({
            type: BLOG_CATEGORIES,
            payload: data,
        }))
    /* .then(successCallback)
    .catch(err => errorCallback) */
}
export const getBlogs = (id, page, tag = '') => dispatch => {
    fetch('/index.php/wp-json/short/post?category=' + id + '&page=' + page + '&tag=' + tag, {
        method: "GET",
        headers: {
            'Content-Type': 'application/json',
        },
    })
        .then(res => res.json())
        .then(data => {
            if (page > 1 && data.result.length > 0) {
                dispatch({
                    type: LOAD_BLOGS_PER_PAGE,
                    payload: data,
                })
            }
            else if (page > 1 && data.result.length === 0) {
                dispatch({
                    type: SHOW_MESSAGE,
                    payload: "Up to date",
                })
                setTimeout(() => {
                    dispatch({
                        type: SHOW_MESSAGE,
                        payload: null,
                    })
                }, 3000);
            }
            else {
                console.log(data)
                dispatch({
                    type: GET_BLOGS,
                    payload: data,
                })
            }
        })
    /*  .then(successCallback)
     .catch(err => errorCallback) */
}

// Get All Tags
const getTags = ({ state }) => {
    console.log(state)
    /* fetch('/index.php/wp-json/tags/post/', {
        method: "GET",
        headers: {
            'Content-Type': 'application/json',
        }
    })
        .then(res => res.json())
        .then(data => state.theme.tags = data) */
}
export const fetchTags = connect(getTags)
// Get Tags by Post
export const getTagsByPost = (id) => dispatch => {
    fetch('/index.php/wp-json/tags/post/' + id, {
        method: "GET",
        headers: {
            'Content-Type': 'application/json',
        }
    })
        .then(res => res.json())
        .then(data => dispatch({
            type: GET_BLOG_TAGS,
            payload: data,
        }))
}

/* export const getPostsbyTag = id => dispatch => {
    console.log(id)
    fetch('/index.php/wp-json/tags/post/' + id, {
        method: "GET",
        headers: {
            'Content-Type': 'application/json',
        }
    })
        .then(res => res.json())
        .then(data => dispatch({
            type: LOAD_BLOGS_BY_TAG,
            payload: data,
        }))
} */