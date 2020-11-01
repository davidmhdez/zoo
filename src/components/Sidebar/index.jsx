import React from 'react';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
import colors from '../../utils/style/colors';
import Logo from '../Logo';

const SidebarWrapper = styled.aside`
    background-color: ${colors.main};
    width: 250px;
    height: 100vh;
    flex: 0 0 auto;
`;

const SidebarTitle = styled(NavLink)`
    display: block;
    font-size: 22px;
    font-weight: bold;
    margin-top: 16px;
    margin-left: 16px;
    color: white;
    text-decoration: none;

    span{
        margin-right: 10px;
    }
`;

const Nav = styled.nav`

    ul{
        padding: 0;
        list-style: none;

        li{
            width: 100%;

            a{
                text-decoration: none;
                padding: 8px 16px;
                display: block;
                color: white;
            }
        }
    }
`;

function Sidebar() {
    return (
        <SidebarWrapper>
            <SidebarTitle to="/">
                <span>
                    <Logo/>
                </span> 
                Zoológico Demo 
            </SidebarTitle>
            <Nav>
                <ul>
                    <li>
                        <NavLink 
                            activeClassName="selected"
                            to="/dashboard"
                        >
                            Dashboard
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/">Cerrar sesion</NavLink>
                    </li>
                </ul>
            </Nav>
        </SidebarWrapper>
    );
}

export default Sidebar;