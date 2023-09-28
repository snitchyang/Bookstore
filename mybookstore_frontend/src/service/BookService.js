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

export const checkBookInventory = async (book_id, number) => {

    const response = await axios.get(URL + '/inventory', {
        params: {
            bookId: book_id
        }
    })
    console.log(response.data)
    return response.data >= number
}

export const getAllBooks = async () => {
    const response = await axios.get(URL + '/books')
    return response.data
}

export const editBook = async (bookId, title, author, price, inventory) => {
    const response = await axios.get(URL + '/editBook', {
        params: {
            bookId: bookId,
            title: title,
            author: author,
            price: price,
            inventory: inventory
        }
    })
    return response.data
}

export const changeBookCover = async (bookId, cover) => {
    const response = await axios.get(URL + '/changeBookCover', {
        params: {
            bookId: bookId,
            cover: cover
        }
    })
    return response.data
}

export const addBook = async (title, author, price, inventory, cover) => {
    const response = await axios.get(URL + '/addBook', {
        params: {
            title: title,
            author: author,
            price: price,
            inventory: inventory,
            cover: cover
        }
    })
    return response.data
}

export const deleteBook = async (bookId) => {
    const response = await axios.get(URL + '/deleteBook', {
        params: {
            bookId: bookId
        }
    })
    return response.data
}