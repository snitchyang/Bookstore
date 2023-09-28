import React from "react";
import {getAllUsers, banUser, unbanUser} from "../service/UserService";
import {useEffect, useState} from "react";
import URL from "../constant/url"
import {Table} from "antd";

export default function ManageUser() {
    const [userList, setUserList] = useState([])
    const getUsers = async () => {
        const users = await getAllUsers()
        setUserList(users)
        console.log(users)
    }
    const BanUser = async (userId) => {
        const response = await banUser(userId)
        getUsers()
    }
    const unBanUser = async (userId) => {
        const response = await unbanUser(userId)
        getUsers()
    }
    useEffect(() => {
        getUsers()
    }, [])
    
    const columns = [
        {
            title: 'User ID',
            dataIndex: 'id',
            key: 'id',
            render: (_, user) => <text>{user.id}</text>
        },
        {
            title: 'Username',
            dataIndex: 'username',
            key: 'username',
            render: (_, user) => <text>{user.username}</text>
        },
        {
            title: 'Status',
            dataIndex: 'status',
            key: 'status',
            render: (_, user) => <text>{user.status}</text>
        },
        {
            title: 'Action',
            dataIndex: 'action',
            key: 'action',
            render: (_, user) => <a onClick={
                () => {
                    if (user.status === 'OK') {
                        BanUser(user.id)
                    } else {
                        unBanUser(user.id)
                    }
                }
            }>{user.status === 'banned' ? 'Unban' : 'Ban'}</a>
        }
    ]
    return (
        <div>
            <Table columns={columns} dataSource={userList}/>
        </div>
    )
}