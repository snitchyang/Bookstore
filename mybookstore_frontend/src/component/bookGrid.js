import React from "react";
import {Col, Row} from "antd";
import "../assets/bookCovers"
import Book from "./book";


export default function BookGrid({page, bookData}){
    const getEightBooks = (start) => {
        return bookData.slice(start, start + 8)
    }

    return(
        <Row gutter={[25,10]}>
            {getEightBooks((page-1)*8).map((book)=>(
                <Col span={6}>
                    <Book book={book} />
                </Col>
            ))}
        </Row>
    )
}