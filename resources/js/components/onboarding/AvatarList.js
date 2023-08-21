import { Avatar, Typography } from 'antd';
const { Text } = Typography;
import {AvatarListStyled} from './AvatarList.styled';
import { useHistory } from 'react-router-dom';
import React, { useState, useEffect } from 'react';
import {NavLink} from 'react-router-dom';
const AvatarList = ({text, content, link, link_active}) => {
    const [active, setActive] = useState(false);
    const history = useHistory();
    
    useEffect(() => {       
        if (link == history.location.pathname) {
            setActive(true);
        }
      }, []);

    const NormalStyle = {
        backgroundColor: '#f4f6fa',
        color: '#8d9cb9'
    };
    
    const NormalTextStyle = {
        color: '#8d9cb9',
        fontWeight: '600'
    };

    const ActiveStyle = {
        backgroundColor: '#3577f6',
    };

    const ActiveTextStyle = {
        color: '#3577f6',
        fontWeight: '600',
    };

    return (
        <AvatarListStyled>
            <div className='avatar_list'>
                <Avatar
                    style={active == false ? NormalStyle : ActiveStyle}
                    size="small"
                >
                    {text}
                </Avatar>

                {
                    link_active == 'true' ? 
                    (
                        <Text style={active == false ? NormalTextStyle : ActiveTextStyle} className='m_left_15'>
                            <NavLink to={link} style={active == false ? NormalTextStyle : ActiveTextStyle}>{content}</NavLink>
                        </Text>
                    ) : 
                    (
                        <Text style={active == false ? NormalTextStyle : ActiveTextStyle} className='m_left_15'>
                            {content}
                        </Text>
                    )
                }
            </div>
        </AvatarListStyled>
    );
} 

export default AvatarList;