import React, {useState} from "react";
import Search from "antd/es/input/Search";
import '../css/cartview.css'
import books from '../constant/books'
import {Button, Image, InputNumber, Table} from "antd";
import {placeOrder} from "../service/OrderService";
import {checkBookInventory} from "../service/BookService";

export default function CartView(){
    const originData= JSON.parse(sessionStorage.getItem('cart'))
    console.log(originData)
    const changeBookNumber = async (book, number) => {
        const isEnough = await checkBookInventory(book.id, number)
        console.log(isEnough)
        if(isEnough) {
            setCount(book.title, number)
        }else{
            alert('Not enough books!')
            setCount(book.title, 0)
            //refresh the page
            window.location.reload()
        }
    }
    const columns = [
        {
            title: 'Cover',
            key:'cover',
            dataIndex: 'book',
            render : (_, {book}) => <Image src={book.cover} height='50px'/>
        },
        {
            title: 'Title',
            key: 'title',
            dataIndex: 'book',
            render:(_, {book}) => <text>{book.title}</text>
        },
        {
            title: 'Amount',
            key: 'amount',
            dataIndex: 'amount',
            render:(_, order_entry) => <InputNumber defaultValue={order_entry.count} min={1} onChange={(value) => changeBookNumber(order_entry.book, value)}/>
        },
        {
            title: 'Price',
            key: 'price',
            dataIndex: 'book',
            render:(_, {book}) => <text>{'￥'+book.price}</text>
        },
        {
            title: 'Action',
            key:'action',
            dataIndex: 'book',
            render:(_, {book}) => <a onClick={() => {
                deleteRow(book.title)
            }}>Delete</a>
        }
    ]

    const [dataSource, setDataSource] = useState(originData)
    const [data, setData] = useState(dataSource)
    const onSearch = (value) => {
        setData(dataSource.filter(item => item.book.name.includes(value)))
    }
    const setCount = (bookName, count) => {
        const newData = dataSource.map(item => {
            if(item.book.title == bookName){
                item.count = count
            }
            return item
        })
        setDataSource(newData)
        setData(newData)
        let cart = JSON.parse(sessionStorage.getItem('cart'))
        cart = cart.map(item => {
            if(item.book.title == bookName){
                item.count = count
            }
            return item
        })
        sessionStorage.setItem('cart', JSON.stringify(cart))
    }
    const deleteRow = (bookName) => {
        console.log(bookName)
        const newData = dataSource.filter(item => item.book.title != bookName)
        setDataSource(newData)
        setData(newData)
        let cart = JSON.parse(sessionStorage.getItem('cart'))
        cart = cart.filter(item => item.book.title != bookName)
        sessionStorage.setItem('cart', JSON.stringify(cart))
    }
    return (
        <div>
            <h2 style={{marginLeft: 30}}>My Shopping Cart</h2>
            <div className='inputBox' style={{marginLeft: 20, marginRight:20}}>
                <Search onSearch={onSearch} enterButton/>
            </div>
            <div className='cartTable'>
                <Table dataSource={data} columns={columns}/>
            </div>
            <Button style={{left:'50%', backgroundColor: 'red', color: 'white'}} onClick={placeOrder}>一键下单</Button>
        </div>
    )
}