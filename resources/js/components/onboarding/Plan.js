import { Layout, Typography, Form, TimePicker, Button, Select, Col, Row } from 'antd';
import moment from 'moment';
import { PlanStyled } from './Plan.styled';
import React from 'react';
import Sidebar from './Sidebar';
import { useDispatch, useSelector } from 'react-redux';

import actions from '../../redux/Authenticate/actions';
const { Content } = Layout;
const { Title, Text } = Typography;
const format = 'HH:mm';
const Plan = () => {
    const [form] = Form.useForm();
    const dispatch = useDispatch();

    const onFinish = (values) => {
        console.log(values);
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
        <PlanStyled>
            <Layout>
                <Sidebar />
                <Layout style={{backgroundColor: '#f8fafc'}}>
                    <Content style={{margin: 'auto', width: '40rem', position: 'relative'}}>
                        <div style={{paddingTop: '60%'}}>
                            <Title>This page is still incomplete</Title>
                        </div>
                    </Content>
                </Layout>
            </Layout>
        </PlanStyled>
    );
};

export default Plan;