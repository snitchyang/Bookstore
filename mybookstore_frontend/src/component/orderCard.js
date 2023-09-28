import React, {useEffect, useState} from "react";
import {Image, Table} from "antd";
import {getOrderItemsByOrderId} from "../service/OrderService";
import {getBookByID} from "../service/BookService";

export default function OrderCard({order}) {
    const [orderItems, setOrderItems] = useState([])
    const [bookOrders, setBookOrders] = useState([])
    const total_price = order.total_price
    const getOrderItems = async () => {
        const newOrderItems = await getOrderItemsByOrderId(order.id)
        setOrderItems(newOrderItems)
        console.log(order.id)
        console.log(newOrderItems)
    }
    const getBookOrders = async (orderItems) => {
        const bookPromises = orderItems.map(async (orderItem)=> {
            const book = await getBookByID(orderItem.bookID)
            return (
                {
                    book: book,
                    bookNumber: orderItem.bookNumber,
                    total_price: orderItem.total_price
                }
            )
        })
        const newBookOrders = await Promise.all(bookPromises)
        setBookOrders(newBookOrders)
        // console.log(order.id)
        // console.log(newBookOrders)
    }
    useEffect(() => {
        getOrderItems()
    }, [])
    useEffect(() => {
        getBookOrders(orderItems)
    }, [orderItems])
    const columns = [
        {
            title: 'Cover',
            dataIndex: 'booksWithCount',
            key: 'bookCover',
            render: (_, {book}) => <Image src={book.cover} height='30px'/>
        },
        {
            title: 'Title',
            dataIndex: 'books',
            key: 'bookTitle',
            render: (_, {book}) => <text>{book.title}</text>
        },
        {
            title: 'Amount',
            dataIndex: 'books',
            key: 'bookAmount',
            render: (_, {bookNumber}) => <text>{bookNumber}</text>
        },
        {
            title: 'Price',
            dataIndex: 'books',
            key: 'bookPrice',
            render: (_, orderItem) => <text>{'￥' + orderItem.total_price.toFixed(2)}</text>
        },
        {
            title: 'Date',
            dataIndex: 'books',
            key: 'orderDate',
            render: () => {
                return <text>{order.order_date}</text>
            },
            onCell: (_, index) => {
                let row_span = index === 0 ? orderItems.length : 0
                return {
                    rowSpan: row_span
                }
            }
        },
        {
            title: 'Total',
            dataIndex: 'books',
            key: 'totalPrice',
            render: () => <text>{'￥' + total_price.toFixed(2)}</text>,
            onCell: (_, index) => {
                let row_span = index === 0 ? orderItems.length : 0
                return {
                    rowSpan: row_span
                }
            }
        }
    ]
    const data = bookOrders
    return (
        <div>
            <h3>{'订单编号：' + order.id + ' 用户： ' + order.userID}</h3>
            <Table columns={columns} dataSource={data} pagination={false}/>
        </div>
    )
}