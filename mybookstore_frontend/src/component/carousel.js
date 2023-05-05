import React from "react";
import {Carousel} from "antd";
import {Image} from "antd";
import {book1, book2, book3, book4} from "../assets";

const carouselList = [book1, book2, book3, book4]



export default function BookCarousel(){
    function createBooks(){
        let result = [];
        carouselList.forEach((item)=>{
            result.push(
                <div style={{width:"100%", height:"100%"}}>
                    <Image src={item} width='100%'/>
                </div>
            )
            console.log(item)
        })
        return result
    }
    return(
        <Carousel autoplay>
            {createBooks()}
        </Carousel>
    )
}