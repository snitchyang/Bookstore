import axios from "axios";
import URL from "../constant/url";

export const getBookByID = async (id) => {
    const response = await axios.get(URL + '/book', {
        params: {
            bookId: id
        }
    })
    return response.data
}

