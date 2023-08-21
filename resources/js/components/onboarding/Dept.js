import { Layout, Typography, Form, TimePicker, Button, Select, Col, Row } from 'antd';
import moment from 'moment';
import { DeptStyled } from './Dept.styled';
import React from 'react';
import Sidebar from './Sidebar';
import { useDispatch, useSelector } from 'react-redux';

import actions from '../../redux/Authenticate/actions';
const { Content } = Layout;
const { Title, Text } = Typography;
const format = 'HH:mm';
const Dept = () => {
    const [form] = Form.useForm();
    const dispatch = useDispatch();

    const onFinish = (values) => {
        console.log(values);
        dispatch({
            type: actions.REGISTER_DEPT,
            payload: values
        });
    };

    const handleChange = (value) => {
        console.log(`selected ${value}`);
    };

    /* eslint-disable no-template-curly-in-string */
    const validateMessages = {
        required: 'This field is required!',
        types: {
            email: 'Enter a valid email!',
        },
    };
    /* eslint-enable no-template-curly-in-string */

    const companiese = [
        'Courier, post', 'Retail', 'Beverage', 'Hot meals', 'Medical,pharmacy', 'Produce,farm', 'Sales', 'Service', 'Other'
    ];

    const drivers = [
        '1', '2-5', '6-10', '11-20', '21-50', '51+'
    ];

    return (
        <DeptStyled>
            <Layout>
                <Sidebar />
                <Layout style={{backgroundColor: '#f8fafc'}}>
                    <Content style={{margin: 'auto', width: '40rem', position: 'relative'}}>
                        <div style={{textAlign: 'center', margin: 'auto', paddingTop: '3rem', marginBottom: '80px'}}>
                            <Title level={2}> Set up your route defaults </Title>
                            <Text className="ntext">Set the defaults for all drivers. You can edit or override these for individual drivers later.</Text>
                        </div>

                        <Form
                            form={form}
                            layout='vertical'
                            name="nest-messages"
                            onFinish={onFinish}
                            style={{
                                maxWidth: '100%'
                            }}
                            validateMessages={validateMessages}
                        >
                            <Text className="stext"> Starting your routes </Text>
                            <Row>
                                <Col span={16}>
                                    <Form.Item
                                        name={'start_loaction'}
                                        label="Start Location"
                                        rules={[
                                            {
                                                required: 'true',
                                            },
                                        ]}
                                        >
                                        <Select
                                            showSearch
                                            placeholder="Search to Select"
                                            optionFilterProp="children"
                                            filterOption={(input, option) => (option?.label ?? '').includes(input)}
                                            filterSort={(optionA, optionB) =>
                                            (optionA?.label ?? '').toLowerCase().localeCompare((optionB?.label ?? '').toLowerCase())
                                            }
                                            size='large'
                                            options={[
                                                {
                                                    value: '1',
                                                    label: 'Saudi Arabia',
                                                }
                                            ]}
                                        />
                                    </Form.Item></Col>
                                <Col span={7} style={{marginLeft: '20px'}}>
                                    <Form.Item
                                        name={'start_time'}
                                        label="Start time"
                                    >
                                        <TimePicker defaultValue={moment('00:00', format)} format={format} size='large' />
                                    </Form.Item>
                                </Col>
                            </Row>

                            <Text className="stext"> Finishing your routes </Text>
                            <Row>
                                <Col span={16}>
                                    <Form.Item
                                        name={'end_loaction'}
                                        label="End Location"
                                        rules={[
                                            {
                                                required: 'true',
                                            },
                                        ]}
                                        >
                                        <Select
                                            showSearch
                                            placeholder="Search to Select"
                                            optionFilterProp="children"
                                            filterOption={(input, option) => (option?.label ?? '').includes(input)}
                                            filterSort={(optionA, optionB) =>
                                            (optionA?.label ?? '').toLowerCase().localeCompare((optionB?.label ?? '').toLowerCase())
                                            }
                                            size='large'
                                            options={[
                                                {
                                                    value: '1',
                                                    label: 'Saudi Arabia',
                                                }
                                            ]}
                                        />
                                    </Form.Item>
                                </Col>
                                <Col span={7} style={{marginLeft: '20px'}}>
                                    <Form.Item
                                        name={'end_time'}
                                        label="End time"
                                    >
                                        <TimePicker defaultValue={moment('00:00', format)} format={format} size='large' />
                                    </Form.Item>
                                </Col>
                            </Row>

                            <Text className="stext"> Average time at stop </Text>
                            <br />
                            <Text className="ntext"> How long drivers stand still per stop. Used to optimise and calculate ETAs. </Text>
                            <br/>
                            <TimePicker defaultValue={moment('00:00', format)} format={format} size='large' style={{marginTop: '10px'}}/>

                            <Form.Item style={{position: 'absolute', bottom: '30'}}>
                                <Button htmlType="submit" size='large'>
                                    Previous
                                </Button>
                                <Button type="primary" htmlType="submit" size='large' style={{marginLeft: '15px'}}>
                                    Confirm team details
                                </Button>
                            </Form.Item>
                        </Form>
                    </Content>
                </Layout>
            </Layout>
        </DeptStyled>
    );
};

export default Dept;