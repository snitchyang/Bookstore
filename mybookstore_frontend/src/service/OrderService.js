import axios from "axios";
import URL from "../constant/url";

export const getOrdersById = async (userId) => {
    const response = await axios.get(URL + '/orders', {
        params: {
            userId: userId
        }
    })
    return response.data
}

export const getOrderItemsByOrderId = async (orderId) => {
    const response = await axios.get(URL + '/orderItems', {
        params: {
            orderId: orderId
        }
    })
    return response.data
}

export const addOrder = async (userId, totalPrice, date) => {
    const order = {
        userID: userId,
        total_price: totalPrice,
        order_date: date,
        order_status: "paid"
    }
    const response = await axios.post(URL + '/addOrder', JSON.stringify(order), {
        headers: {
            'Content-Type': 'application/json'
        }
    })
    return response.data
}

export const addOrderItem = async (orderId, bookId, bookNumber, total_price) => {
    const orderItem = {
        orderID: orderId,
        bookID: bookId,
        bookNumber: bookNumber,
        total_price: total_price
    }
    console.log(orderItem)
    const response = await axios.post(URL + '/addOrderItem', JSON.stringify(orderItem), {
        headers: {
            'Content-Type': 'application/json'
        }
    })
    return response.data
}

export const placeOrder = () => {
    const new_order = JSON.parse(sessionStorage.getItem('cart'))
    const userID = sessionStorage.getItem('userID')
    console.log(new_order)
    let totalPrice = 0
    new_order.forEach(item => {
        totalPrice += item.book.price * item.count
    })
    const date = new Date()
    const order_date = date.getFullYear() + '-' + (date.getMonth() + 1) + '-' + date.getDate()
    addOrder(userID, totalPrice, order_date).then(
        response => {
            console.log(response)
            const orderId = response
            new_order.forEach(item => {
                addOrderItem(orderId, item.book.id, item.count, item.book.price * item.count).then(
                    response => {
                        console.log(response)
                    }
                )
            })
        })
    //clear cart
    sessionStorage.setItem('cart', JSON.stringify([]))
}