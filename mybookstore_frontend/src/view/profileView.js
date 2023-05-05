import React from "react";
import {Button, Col, Image, Input, Row, Space} from "antd";
import {jerry} from "../assets";
import TextArea from "antd/es/input/TextArea";

const userInfo = {
    firstName: 'Jerry',
    lastName: 'Mouse',
    twitter: 'jerry@sjtu.edu.cn',
    notes: 'I am Jerry'
}

const saveProfile = () => {
    const Http = new XMLHttpRequest()
    const url = "http://localhost:8080/book"
    Http.open('GET', url);
    Http.send();
    Http.onreadystatechange = (ev) =>{
        console.log(Http.responseText)
    }
    
}

export default function ProfileView(){
    return (
        <div>
            <Space direction='vertical' style={{marginLeft: 20}}>
                <h2>My Profile</h2>
                <h3>My name</h3>
                <div className='myName'>
                    <Row gutter={10}>
                        <Col span={12}>
                            <Input defaultValue={userInfo.firstName}/>
                        </Col>
                        <Col span={12}>
                            <Input defaultValue={userInfo.lastName}/>
                        </Col>
                    </Row>
                </div>
                <h3>Twitter</h3>
                <Input defaultValue={userInfo.twitter}/>
                <Row gutter={10}>
                    <Col span={10}>
                        <div className='avatar'>
                            <h3>Avatar</h3>
                            <Image src={jerry} width='120px'/>
                            <Button style={{marginTop:3, height:30}}>
                                <span>Click to upload</span>
                            </Button>
                        </div>
                    </Col>
                    <Col span={14}>
                        <div className='notes'>
                            <h3>Notes</h3>
                            <TextArea rows={6} defaultValue={userInfo.notes}/>
                        </div>
                    </Col>
                </Row>
                <div className='buttons' style={{marginTop: 20}}>
                    <Row >
                        <Col span={5} offset={2}>
                            <Button style={{backgroundColor: 'red', color:'white', width:'100%'}} onClick={saveProfile}>Save</Button>
                        </Col>
                        <Col span={5} offset={8}>
                            <Button style={{width:'100%'}}>Cancel</Button>
                        </Col>
                    </Row>
                </div>
            </Space>
        </div>
    )
}