import { Layout, Typography, Form, Input, Button, Select } from 'antd';
import { TeamStyled } from './Team.styled';
import React from 'react';
import Sidebar from './Sidebar';
import { useDispatch, useSelector } from 'react-redux';
import {NavLink} from 'react-router-dom';
import actions from '../../redux/Authenticate/actions';
const { Content } = Layout;
const { Title, Text } = Typography;

const Team = () => {
    const [form] = Form.useForm();
    const dispatch = useDispatch();

    const onFinish = (values) => {
        console.log(values);
        dispatch({
            type: actions.REGISTER_TEAM,
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
        <TeamStyled>
            <Layout>
                <Sidebar />
                <Layout style={{backgroundColor: '#f8fafc'}}>
                    <Content style={{margin: 'auto', width: '40rem', position: 'relative'}}>
                        <div style={{textAlign: 'center', margin: 'auto', paddingTop: '3rem', marginBottom: '80px'}}>
                            <Title level={2}> What's your team called? </Title>
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
                            <Form.Item
                            name={'team'}
                            label="Team name"
                            rules={[
                                {
                                    required: 'true',
                                },
                            ]}
                            >
                                <Input size='large'/>
                            </Form.Item>
                            <Form.Item
                                name={'best_company'}
                                label="What describes your company best?"
                            >
                                <Select
                                    placeholder="Select a best company"
                                    onChange={handleChange}
                                    options={companiese.map((company)=>({
                                        label: company,
                                        value: company
                                    }))}
                                    size='large'
                                />
                            </Form.Item>
                            <Form.Item
                                name={'driver'}
                                label="How many drivers do you have?"
                            >
                                <Select
                                    placeholder="Select a drivers"
                                    onChange={handleChange}
                                    options={drivers.map((driver)=>({
                                        label: driver,
                                        value: driver
                                    }))}
                                    size='large'
                                />
                            </Form.Item>
                            <Form.Item style={{position: 'absolute', bottom: '30'}}>
                                <Button type="primary" htmlType="submit" block size='large'>
                                    Confirm team details
                                </Button>
                            </Form.Item>
                        </Form>
                    </Content>
                </Layout>
            </Layout>
        </TeamStyled>
    );
};

export default Team;