import axios from 'axios';

const url = 'http://localhost:8080'

const sendLoginRequest = (username, password) => {
    let isSuccessful = false
    axios.get( url + '/login', {
            params: {
                username: username,
                password: password
            }
        }
    ).then(
        response => {
            console.log(response.data)
            isSuccessful = response.data === 'Login Success'
        }
    )
    return isSuccessful
}

export default sendLoginRequest