import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import colors from '../../utils/style/colors';
import Logo from '../Logo';

const StyledHeader = styled.header`
    width: 100%;
    padding: 18px;
    height: 63px;
    background-color: ${colors.main};
    color: #fff;
    position: absolute;
    top: 0;
    left: 0;
`;

const Title = styled(Link)`
    display: block;
    font-size: 22px;
    font-weight: bold;
    color: white;
    text-decoration: none;

    span{
        margin-right: 10px;
    }
`;

function Header() {
    return (
        <StyledHeader>
            <Title to="/">
                <span>
                    <Logo/>
                </span> 
                Zoológico Demo 
            </Title>
        </StyledHeader>
    );
}

export default Header;