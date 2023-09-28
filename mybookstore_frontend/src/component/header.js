import React from "react";
import "../css/layout.css"
import {Col, Row} from "antd";
import {userLogout} from "../service/LoginService";
import {useNavigate} from "react-router-dom";

export default function Header(){
    const navigate = useNavigate()
    const username = sessionStorage.getItem('user')
    const logout = async () => {
        let duration = await userLogout()
        if (duration == -1) {
            alert('请先登录')
        }else{
            alert('已登出！登录持续时间为' + duration + '毫秒')
            navigate('/login')
        }
    }
    return(
        <div className="header" >
            <Row style={{width:"100%"}}>
                <Col offset={1} span={3}>
                    <a className="logo" onClick={logout}>BOOKSTORE</a>
                </Col>
                <Col offset={15} span={3}>
                    {username !== 'null' && <span className="helloText">{'Hello, ' + username}</span>}
                </Col>
            </Row>
        </div>
    )
}