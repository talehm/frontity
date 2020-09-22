import {
    ALL_JOKES,
    SINGLE_JOKE,
} from './type'



export const getJokes = (username, successCallback, errorCallback) => dispatch => {
    console.log(username);

    fetch('http://127.0.0.1:8000/api/users/login', {
        method: "POST",
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            username: username,
        })

    })
        .then(res => res.json())
        .then(data => dispatch({
            type: ALL_JOKES,
            payload: ['test3', 'test4'],
        }))
        .then(successCallback)
        .catch(err => console.log(err)/* errorCallback */)
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
            type: SINGLE_JOKE,
            payload: data,
        }))
        .then(successCallback)
        .catch(errorCallback)
}