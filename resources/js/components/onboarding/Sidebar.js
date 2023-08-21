import { Layout,Button,Typography } from 'antd';
import { SidebarStyled } from './Sidebar.styled';
import {useDispatch, useSelector} from 'react-redux';
import actions from '../../redux/Authenticate/actions';
import AvatarList from './AvatarList';
import mainImage from '../../../images/main.png';
const { Sider } = Layout;
const { Text } = Typography;

const Sidebar = () => {
    const {name, logOutLoader} = useSelector(state => state.authenticateReducer);
    const dispatch = useDispatch();
    let onLogout = () => {
        dispatch({
          type: actions.LOGOUT,
        });
    };
    const TextStyle = {
        color: '#8d9cb9',
        marginLeft: '10px',
        fontWeight: '600'
    };
    return (
        <SidebarStyled>
            <Sider className="site-layout-background" width={"15rem"}>
                <div style={{padding: "2.5rem 1.5rem", position: 'relative', minHeight: '100vh'}}>
                    <img src={mainImage} alt="This is a delivery main image" style={{marginBottom: "40px"}}/>
                    <AvatarList text='1' content='Sign up' link='/onboardig/' link_active='false' />
                    <AvatarList text='2' content='Name your team' link='/onboarding/team' link_active='true' />
                    <AvatarList text='3' content='Setup route defaults' link='/onboarding/dept' link_active='true'/>
                    <AvatarList text='4' content='Start trial' link='/onboarding/plans' link_active='true' />
                    <AvatarList text='5' content='Connect driver app' link='/onboarding/' link_active='false' />
                    <Button block style={{position: 'absolute', bottom: '40', width: '180px'}} size="large" onClick={onLogout}>
                        <Text style={TextStyle}>Log out</Text>
                    </Button>
                </div>
            </Sider>
        </SidebarStyled>
    );
}

export default Sidebar;