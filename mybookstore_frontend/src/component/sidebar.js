import React, {useState} from "react";
import "../css/layout.css"
import {Menu} from "antd";
import {redirect, useLocation, useNavigate} from "react-router-dom";
import '@ant-design/icons'
import {useEffect} from "react";
import {BookOutlined, MoneyCollectOutlined, ShoppingCartOutlined, UserOutlined} from "@ant-design/icons";

export default function Sidebar(){
    const location = useLocation()
    const navigate = useNavigate()
    const userRole = sessionStorage.getItem('userRole')
    if(location.pathname === '/'){
        console.log('redirecting!')
        redirect('/books')
    }
    return(
        <div className='sidebar'>
            <Menu onSelect={(obj) => {
                console.log(location.pathname)
            }}
                  selectedKeys={location.pathname}
            >
                <Menu.Item key="/books">
                    <span style={{ fontSize: '16px'}}>
                        <BookOutlined style={{marginRight:10}}/>
                        <a href="/books">Books</a>
                    </span>
                </Menu.Item>
                <Menu.Item key="/cart">
                    <span style={{ fontSize: '16px'}}>
                        <ShoppingCartOutlined style={{marginRight:10}} />
                        <a href="/cart">My Cart</a>
                    </span>
                </Menu.Item>
                <Menu.Item key="/orders">
                    <span style={{ fontSize: '16px'}}>
                        <MoneyCollectOutlined style={{marginRight:10}} />
                        <a href="/orders">My Orders</a>
                    </span>
                </Menu.Item>
                <Menu.Item key="/profile">
                    <span style={{ fontSize: '16px'}}>
                        <UserOutlined style={{marginRight:10}} />
                        <a href="/profile">My Profile</a>
                    </span>
                </Menu.Item>
                {
                    userRole != 'admin' &&
                    <Menu.Item key="/statistics">
                        <span style={{ fontSize: '16px'}}>
                            <UserOutlined style={{marginRight:10}} />
                            <a href="/statistics">Statistics</a>
                        </span>
                    </Menu.Item>
                }
                {
                    userRole === 'admin' &&
                    <Menu.Item key="/manageUser">
                        <span style={{ fontSize: '16px'}}>
                            <UserOutlined style={{marginRight:10}} />
                            <a href="/manageUser">Manage Users</a>
                        </span>
                    </Menu.Item>
                }
                {
                    userRole === 'admin' &&
                    <Menu.Item key="/manageBook">
                        <span style={{ fontSize: '16px'}}>
                            <UserOutlined style={{marginRight:10}} />
                            <a href="/manageBook">Manage Books</a>
                        </span>
                    </Menu.Item>
                }
                {
                    userRole === 'admin' &&
                    <Menu.Item key="/manageOrder">
                        <span style={{ fontSize: '16px'}}>
                            <UserOutlined style={{marginRight:10}} />
                            <a href="/manageOrder">Manage Orders</a>
                        </span>
                    </Menu.Item>
                }
                {
                    userRole === 'admin' &&
                    <Menu.Item key="/userRanking">
                        <span style={{ fontSize: '16px'}}>
                            <UserOutlined style={{marginRight:10}} />
                            <a href="/userRanking">Ranking</a>
                        </span>
                    </Menu.Item>
                }
            </Menu>
        </div>
    )
}