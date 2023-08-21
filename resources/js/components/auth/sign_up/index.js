import { Layout, Typography, Button, Form, Input, InputNumber } from 'antd';
import {NavLink} from 'react-router-dom';
import actions from '../../../redux/Authenticate/actions';
import { useDispatch, useSelector } from 'react-redux';

import logoImage from '../../../../images/main-logo.png';
const { Sider, Content } = Layout;
const { Title, Text } = Typography;

const contentStyle = {
    textAlign: 'center',
    minHeight: 120,
    lineHeight: '120px',
    color: '#fff',
    backgroundColor: '#108ee9',
};
const siderStyle = {
    lineHeight: '120px',
    color: '#fff',
    backgroundColor: 'white',
    minHeight: '100vh'
};

const layout = {
    labelCol: {
      span: 8,
    },
    wrapperCol: {
      span: 16,
    },
  };
  
/* eslint-disable no-template-curly-in-string */
const validateMessages = {
    required: 'This field is required!',
    types: {
        email: 'Enter a valid email!',
    },
};
/* eslint-enable no-template-curly-in-string */

export default function RegisterForm(){
    const { registerLoader } = useSelector(state => state.authenticateReducer);
    const [form] = Form.useForm();
    const dispatch = useDispatch();
    const onFinish = (values) => {
        dispatch({
            type: actions.REGISTER,
            payload: values
        });
    };
    return (
        <Layout>
            <Sider style={siderStyle} width={"36rem"}>
                <div style={{padding: '4rem 5rem'}}>
                    <img src={logoImage} alt="This is delivery logo image" style={{paddingLeft: '40%'}}/>
                    <div style={{marginBottom: '50px', textAlign: 'center'}}>
                        <Title level={2}>Sign up to Circuit for Teams</Title>
                        <Title level={3}>Start your free 14 day trial</Title>
                    </div>
                    <Form
                        form={form}
                        layout='vertical'
                        name="nest-messages"
                        onFinish={onFinish}
                        style={{
                        maxWidth: 600,
                        }}
                        validateMessages={validateMessages}
                    >
                        <Form.Item
                        name={'email'}
                        label="Email*"
                        rules={[
                            {
                                required: 'true',
                                type: 'email',
                            },
                        ]}
                        >
                            <Input placeholder="Enter your email" size='large'/>
                        </Form.Item>
                        <Form.Item
                            name={'password'}
                            label="Password*"
                            rules={[
                                {
                                    required: 'true',
                                },
                            ]}
                        >
                            <Input.Password placeholder="Enter your password" size='large' />
                        </Form.Item>
                        <Form.Item>
                            <Button type="primary" htmlType="submit" block style={{ marginTop: '30px' }} size='large' loading={registerLoader}>
                                Get started
                            </Button>
                            <Button block size='large' style={{ marginTop: '15px' }}>
                                Sign up with Google
                            </Button>
                            <div style={{ textAlign: 'center', marginTop: '30px'}}>
                                <Text>Already have an account? </Text><NavLink to="/login">Log in</NavLink>
                            </div>
                        </Form.Item>
                    </Form>
                </div>
            </Sider>
            <Layout>
                <Content style={contentStyle}>

                </Content>
            </Layout>
        </Layout>
    )
};