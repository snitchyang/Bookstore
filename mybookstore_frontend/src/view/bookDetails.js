import React from "react";
import "../css/bookDetails.css"
import {useLocation, useParams} from "react-router-dom";
import {Button, Descriptions, Image} from "antd";
import axios from "axios";
import qs from "qs";


export default function BookDetails(){
    const location = useLocation();
    const book = location.state
    const description = "aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa"
    const addToCart = () => {
        let cart = JSON.parse(sessionStorage.getItem('cart'))
        if(cart === null){
            cart = []
        }else if(cart.find(item => item.book.title === book.title)){
            console.log('find')
            cart = cart.map(item => {
                if(item.book.title === book.title){
                    item.count += 1
                }
                return item
            })
            sessionStorage.setItem('cart', JSON.stringify(cart))
            alert('成功加入购物车!')
            return
        }
        cart.push({book:book, count:1})
        sessionStorage.setItem('cart', JSON.stringify(cart))
        alert('成功加入购物车!')
    }
    const purchase = () => {
        axios.put('http://localhost:8080/purchase', qs.stringify({
            bookTitle:book.title,
            bookNumber:1
        })).then(
            response => {
                console.log('purchased' + response.data)
            }
        )
    }
    return(
        <div className="bookDetails">
            <h2 style={{margin:20}}>{book.title}</h2>
            <div className="bookInfo">
                <div className='image' style={{float:'left', height:250}}>
                    <Image src={book.cover} height="250px"/>
                </div>
                <div className='descriptions' style={{float:'left', width:500, height:300}}>
                    <Descriptions bordered={true} size='big'>
                        <Descriptions.Item label='title' span={3}>{book.title}</Descriptions.Item>
                        <Descriptions.Item label='price' span={3}>{'￥'+book.price}</Descriptions.Item>
                        <Descriptions.Item label='author' span={3}>The author</Descriptions.Item>
                        <Descriptions.Item label='status' span={3}>有货</Descriptions.Item>
                    </Descriptions>
                </div>
                <div className='descriptions-detail' style={{float:'left', width:800, marginLeft:30}}>
                    <Descriptions bordered>
                        <Descriptions.Item label='Introduction' span={3}>{description}</Descriptions.Item>
                    </Descriptions>
                </div>
                <div className={"button-groups"} style={{width:1000,marginLeft:'25%', marginTop:'7%', float:'left'}}>
                    <Button size={"large"} onClick={addToCart}>
                        加入购物车
                    </Button>
                </div>
            </div>
        </div>
    )
}