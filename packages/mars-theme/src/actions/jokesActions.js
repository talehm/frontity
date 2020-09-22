import {
    ALL_JOKES,
    SINGLE_JOKE,
} from './type'



export const getJokes = (username, successCallback, errorCallback) => dispatch => {
    console.log(username);

    fetch('/api/users/login', {
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
    fetch('/api/users/login', {
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