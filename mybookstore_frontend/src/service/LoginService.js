import axios from 'axios';

const url = 'http://localhost:8080'

export const userLogin = async (username, password) => {
    let response = await fetch(url + '/login' + '?username=' + username + '&password=' + password, {
        credentials: 'include',
    })
    let code = await response.json()
    return code
}

export const userLogout = async () => {
    let response = await fetch(url + '/login/logout', {
        credentials: 'include'
    })
    let duration = await response.json()
    return duration
}

