import axios from "axios";

export const getUserIdByUsername = async (username) => {
    return await axios.get(URL + '/userID', {
        params: {
            username: username
        }
    })
}