
export const login = (username, password, successCallback, errorCallback) => dispatch => {
    fetch('http://127.0.0.1:8000/api/users/login', {
        method: "POST",
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            username: username,
            password: password
        })

    })
        .then(res => res.json())
        .then(successCallback)
        .catch(errorCallback)
}

export const createAccount = (username, password, ) => dispatch => {
    fetch('http://127.0.0.1:8000/api/users/', {
        method: "POST",
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            username: username,
            password: password
        })

    })
        .then(res => res.json())
        .then(data => {
            localStorage.setItem('token', data.token);
            localStorage.setItem('userType', data.type);
        }
        )

}

export const loadCurrentUser = (successCallback, errorCallback) => dispatch => {
    fetch('http://127.0.0.1:8000/api/users/me', {
        headers: {
            'Authorization': ' Bearer ' + localStorage.getItem('token')
        }
    })
        .then(successCallback).catch(errorCallback)
}

export const updateSwicthes = (successCallback, errorCallback) => dispatch => {
    fetch('http://127.0.0.1:8000/api/switches/update', {
        headers: {
            'Authorization': ' Bearer ' + localStorage.getItem('token')
        }
    }).then(res => res.json())
        .then(successCallback)
}

export const getStatus = (ap, successCallback) => dispatch => {
    if (typeof ap === "undefined") {
        ap = ''
    }

    fetch('http://127.0.0.1:8000/api/switches/get_status', {
        method: "POST",
        headers: {
            'Content-Type': 'application/json',
            'Authorization': ' Bearer ' + localStorage.getItem('token')
        },
        body: JSON.stringify({
            ap: ap
        })
    })
        .then(res => res.json())
        .then(successCallback)
}