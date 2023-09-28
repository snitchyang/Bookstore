import React, {useState} from 'react';
import {Button, Checkbox, Form, Input} from 'antd';
import Header from "../component/header";
import "../css/loginView.css"
import {useNavigate} from "react-router-dom";
import axios from "axios";
import {userLogin} from "../service/LoginService";

const admin = {username: 'admin', password: 'admin'}


const onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo);
};


const url = 'http://localhost:8080'
const Login = ({setLoginState}) => {
    const navigate = useNavigate()
    const [loginButtonText, setLoginButtonText] = useState('登录')
    const onFinish = async (values) => {
        setLoginButtonText('登录中...')
        let result = await userLogin(values.username, values.password)
        console.log(result)
        if (result != -1) {
            console.log('登录成功')
            sessionStorage.setItem('user', values.username)
            sessionStorage.setItem('userId', result)
            navigate('/books')
        }
    };
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
                        name="remember"
                        valuePropName="checked"
                        wrapperCol={{
                            offset: 8,
                            span: 16,
                        }}
                    >
                        <Checkbox>记住我</Checkbox>
                    </Form.Item>

                    <Form.Item
                        wrapperCol={{
                            offset: 8,
                            span: 16,
                        }}
                    >
                        <Button type="primary" htmlType="submit">
                            {loginButtonText}
                        </Button>
                        <Button type="link" htmlType="button" onClick={() => {navigate('/register')}}>
                            注册
                        </Button>
                    </Form.Item>
                </Form>
            </div>
        </>
    )
}
export default Login;