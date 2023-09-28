import React from "react";
import {Button, Checkbox, Form, Input} from "antd";
import Header from "../component/header";
import axios from "axios";
import qs from "qs";
import {useNavigate} from "react-router-dom";

export default function RegisterView(){
    const url = 'http://localhost:8080'
    const navigate = useNavigate()
    const onFinish = (values) => {
        if(values.password !== values.confirmPassword){
            alert('两次密码不一致')
            return
        }
        axios.put(url + '/register', qs.stringify({
            username: values.username,
            password: values.password
        })).then(
            response => {
                console.log(response.data)
                if(response.data === 'Register Success'){
                    alert('注册成功')
                    navigate('/login')
                }
                else if(response.data === 'Username already exists'){
                    alert('用户名已存在')
                }else{
                    alert('注册失败')
                }
            }
        )
    }
    const onFinishFailed = (errorInfo) => {}

    return (
        <>
            <Header />
            <div className='login'>
                <Form
                    name="login_form"
                    labelCol={{
                        span: 8,
                    }}
                    wrapperCol={{
                        span: 16,
                    }}
                    initialValues={{
                        remember: true,
                    }}
                    style={{
                        marginLeft: "30%",
                        width: "30%",
                        marginTop: "10%",
                    }}
                    onFinish={onFinish}
                    onFinishFailed={onFinishFailed}
                    autoComplete="off"
                >
                    <Form.Item
                        label="用户名"
                        name="username"
                        rules={[
                            {
                                required: true,
                                message: 'Please input your username!',
                            },
                        ]}
                    >
                        <Input/>
                    </Form.Item>
                    <Form.Item
                        label="邮箱"
                        name="email"
                        rules={[
                            {
                                required: true,
                                message: 'Please input your email address!',
                            },
                        ]}
                    >
                        <Input/>
                    </Form.Item>

                    <Form.Item
                        label="密码"
                        name="password"
                        rules={[
                            {
                                required: true,
                                message: 'Please input your password!',
                            },
                        ]}
                    >
                        <Input.Password visibilityToggle={false}/>
                    </Form.Item>

                    <Form.Item
                        label="确认密码"
                        name="confirmPassword"
                        rules={[
                            {
                                required: true,
                                message: 'Please confirm your password!',
                            },
                        ]}
                    >
                        <Input.Password visibilityToggle={false}/>
                    </Form.Item>

                    <Form.Item
                        wrapperCol={{
                            offset: 8,
                            span: 16,
                        }}
                    >
                        <Button type="primary" htmlType="submit">
                            注册
                        </Button>
                    </Form.Item>
                </Form>
            </div>
        </>
    )
}