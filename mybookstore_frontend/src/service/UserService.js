import axios from "axios";
import URL from "../constant/url";

export const getUserIdByUsername = async (username) => {
    return await axios.get(URL + '/userID', {
        params: {
            username: username
        }
    })
}

export const getAllUsers = async () => {
    const response = await axios.get(URL + '/allUsers')
    return response.data
}

export const banUser = async (userId) => {
    const response = await axios.get(URL + '/banUser', {
        params: {
            userid: userId
        }
    })
    return response.data
}

export const unbanUser = async (userId) => {
    const response = await axios.get(URL + '/unbanUser', {
        params: {
            userid: userId
        }
    })
    return response.data
}