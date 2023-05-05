import React, {useEffect, useState} from "react";
import {getOrdersById} from "../service/OrderService";
import OrderCard from "../component/orderCard";

export default function OrderView() {
    const [orders, setOrders] = useState([])
    const getOrders = async () => {
        const userID = sessionStorage.getItem('userID')
        console.log(userID)
        const orders = await getOrdersById(userID)
        setOrders(orders)
        console.log(orders)
    }
    useEffect(() => {
        getOrders()
    }, [])
    return(
        //a list of orders
        <div>
            {orders.map(order => {
                return(
                    <OrderCard order={order}/>
                )
            })}
        </div>
    )
}