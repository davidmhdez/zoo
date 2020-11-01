import React from 'react';
import styled from 'styled-components';
import Sidebar from '../Sidebar';
import colors from '../../utils/style/colors';

const LayoutContainer = styled.div`
    display: flex;
`;

const LayoutWrapper = styled.main`
    background-color:${colors.background};
    width: 100%;
    height: 100vh;
`;

function Layout(props) {
    return (
        <LayoutContainer>
            <Sidebar/>
            <LayoutWrapper>
                {props.children}
            </LayoutWrapper>
        </LayoutContainer>
    );
}

export default Layout;