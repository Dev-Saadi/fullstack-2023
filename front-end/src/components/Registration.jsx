
import { Button, Form, Input } from 'antd';
import axios from "axios"
import { useState } from 'react';

const Registration = () => {

    let [value, setValue] = useState("")
    let [arr, setarr] = useState([])


    let handlechange = (e) => {
        setValue(e.target.value);
    }


    let submitbtn = () => {
        arr.push({
            label: value
        });

        let newArr = [...arr]

        setarr(newArr)
    }


    const onFinish = (values) => {
        console.log('Success:', values);

        axios.post("http://localhost:8000/api/v1/auth/registration", {
            email: values.email,
            username: values.username,
            password: values.password,
        }, {
            headers: {
                Authorization: "dummypass"
            }
        });
    };
    const onFinishFailed = (errorInfo) => {
        console.log('Failed:', errorInfo);
    };




    return (
        <>




            <Form
                name="basic"
                labelCol={{
                    span: 8,
                }}
                wrapperCol={{
                    span: 16,
                }}
                style={{
                    maxWidth: 600,
                }}
                initialValues={{
                    remember: true,
                }}
                onFinish={onFinish}
                onFinishFailed={onFinishFailed}
                autoComplete="off"
            >
                <Form.Item onChange={handlechange}
                    label="Username"
                    name="username"
                    rules={[
                        {
                            required: true,
                            message: 'Please input your username!',
                        },
                    ]}
                >
                    <Input />
                </Form.Item>


                <Form.Item onChange={handlechange}
                    label="Email"
                    name="email"
                    rules={[
                        {
                            required: true,
                            message: 'Please input your email!',
                        },
                    ]}
                >
                    <Input />
                </Form.Item>




                <Form.Item onChange={handlechange}
                    label="Password"
                    name="password"
                    rules={[
                        {
                            required: true,
                            message: 'Please input your password!',
                        },
                    ]}
                >
                    <Input.Password />
                </Form.Item>

                {/* <Form.Item
                    name="remember"
                    valuePropName="checked"
                    wrapperCol={{
                        offset: 8,
                        span: 16,
                    }}
                >
                    <Checkbox>Remember me</Checkbox>
                </Form.Item> */}

                <Form.Item
                    wrapperCol={{
                        offset: 8,
                        span: 16,
                    }}
                >
                    <Button onClick={submitbtn} type="primary" htmlType="submit">
                        Submit
                    </Button>
                </Form.Item>





                {arr.map((item, index) => (
                    <p key={index}>{item.label}</p>
                ))}
            </Form>



        </>
    )
}

export default Registration