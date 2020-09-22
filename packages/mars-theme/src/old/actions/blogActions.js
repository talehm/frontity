import {
    ALL_BLOGS,
    SINGLE_ARTICLE,
} from './type'



export const getBlogs = (successCallback, errorCallback) => dispatch => {

    fetch('https://taleh.funnydef.com/wp-json/wp/v2/posts', {
        method: "GET",
        headers: {
            'Content-Type': 'application/json',
        },


    })
        .then(res => res.json())
        .then(data => dispatch({
            type: ALL_BLOGS,
            payload: data,
        }))
        .then(successCallback)
        .catch(err => errorCallback)
}

export const getSingleJoke = (post_name, successCallback, errorCallback) => dispatch => {

    fetch('http://127.0.0.1:8000/api/users/login', {
        method: "POST",
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            post_name,
        })

    })
        .then(res => res.json())
        .then(data => dispatch({
            type: SINGLE_ARTICLE,
            payload: data,
        }))
        .then(successCallback)
        .catch(errorCallback)
}