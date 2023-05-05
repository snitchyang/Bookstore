import React, {useEffect, useState} from "react";
import {Input, Button, Space, Pagination} from "antd";
import '../css/bookview.css'
import BookCarousel from "../component/carousel";
import BookGrid from "../component/bookGrid";
import books from '../constant/books'
import axios from "axios";

// This is the main view of the bookstore
export default function BookView(){
    const {Search} = Input
    const [page, setPage] = useState(1)
    const [allBooks, setAllBooks] = useState([])
    const [bookData, setBookData] = useState([])
    const onSearch = (value) => {
        setBookData(allBooks.filter(item => item.title.includes(value)))
    }
    useEffect(() => {
        axios.get('http://localhost:8080/books', ).then(
            response => {
                setAllBooks(response.data)
                setBookData(response.data)
            }
        )
    }, [])
    return (
        <div style={{width:'100%', height:'100%'}}>
            <Space direction='vertical' style={{width:'100%', height:'100%'}} size='large'>
                <div className='inputBox'>
                    <Search enterButton={true} onSearch={onSearch}/>
                </div>
                <div className='carousel'>
                    <BookCarousel />
                </div>
                <div className='bookGrid'>
                    <BookGrid page={page} bookData={bookData}/>
                </div>
                <div className='pagination'>
                    <Pagination current={page} onChange={(page)=>setPage(page)} pageSize={8} total={bookData.length}/>
                </div>
            </Space>
        </div>
    )
}