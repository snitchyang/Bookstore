import React, {useEffect, useState} from "react";
import {getOrdersById, getAllOrderItems} from "../service/OrderService";
import {getBookByID} from "../service/BookService";
import OrderPage from "../component/OrderPage";
import Search from "antd/es/input/Search";
import {Dropdown, Button, DatePicker} from "antd";

const {RangePicker} = DatePicker;
export default function OrderView() {
    const [orders, setOrders] = useState([])
    const [orderItems, setOrderItems] = useState([])
    const [orderIdToBookName, setOrderIdToBookName] = useState([])
    const [ordersToShow, setOrdersToShow] = useState([])
    const [startDate, setStartDate] = useState('')
    const [endDate, setEndDate] = useState('')
    const getOrders = async () => {
        const userID = sessionStorage.getItem('userId')
        console.log(userID)
        const orders = await getOrdersById(userID)
        const orderItems = await getAllOrderItems()
        let newOrderIdToBookName = []
        for(let i = 0; i < orderItems.length; i++){
            const bookId = orderItems[i].bookID;
            const book = await getBookByID(bookId)
            const bookName = book.title
            newOrderIdToBookName.push({orderId: orderItems[i].orderID, bookName: bookName})
        }
        setOrders(orders)
        setOrderItems(orderItems)
        setOrdersToShow(orders)
        setOrderIdToBookName(newOrderIdToBookName)
        console.log(orders)
    }
    const onDateFilterChange = (dates, dateStrings) => {
        if(dateStrings[0] === '' || dateStrings[1] === ''){
            setOrdersToShow(orders)
            return
        }
        const newStartDate = new Date(Date.parse(dateStrings[0]))
        const newEndDate = new Date(Date.parse(dateStrings[1]))
        setStartDate(newStartDate)
        setEndDate(newEndDate)
        const new_orders = orders.filter(order => {
            const orderDate = new Date(Date.parse(order.order_date))
            return orderDate >= newStartDate && orderDate <= newEndDate
        })
        setOrdersToShow(new_orders)
    }
    const onSearch = (value) => {
        if(value === ''){
            setOrdersToShow(orders)
            return
        }
        const new_orders = orders.filter(order => {
            for(let i = 0; i < orderIdToBookName.length; i++){
                if(orderIdToBookName[i].orderId == order.id && orderIdToBookName[i].bookName.includes(value)){
                    return true
                }
            }
            return false
        })
        console.log(new_orders)
        setOrdersToShow(new_orders)
    }
    useEffect(() => {
        getOrders()
    }, [])
    return(
        //a list of orders
        <div>
            <div style={{marginTop: '10px'}}>
                <Search placeholder="search an order" onSearch={onSearch} enterButton style={{width: '70%'}}/>
            </div>
            <div style={{marginTop:'10px'}}>
                <RangePicker onChange={onDateFilterChange}/>
            </div>
            <OrderPage ordersToShow={ordersToShow} />
        </div>
    )
}