import React from "react";
import {Image, Space} from "antd";
import {useNavigate} from "react-router-dom";

const Book = ({book}) => {
    const navigate = useNavigate()
    return(
        <div className='book' onClick={()=>navigate(book.title, {state:book})}>
            <Image src={book.cover} />
            <div className='bookName'>{book.title}</div>
            <div className='bookPrice'>{'￥' + book.price}</div>
        </div>
    )
}

export default Book