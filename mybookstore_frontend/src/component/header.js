import React from "react";
import "../css/layout.css"
import {Col, Row} from "antd";

export default function Header(){
    const username = sessionStorage.getItem('user')
    return(
        <div className="header" >
            <Row style={{width:"100%"}}>
                <Col offset={1} span={3}>
                    <a className="logo" href="login">BOOKSTORE</a>
                </Col>
                <Col offset={15} span={3}>
                    {username !== 'null' && <span className="helloText">{'Hello, ' + username}</span>}
                </Col>
            </Row>
        </div>
    )
}