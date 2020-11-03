import React from 'react';
import styled from 'styled-components';
import Header from '../Header';

const LayoutWrapper = styled.main`
    margin-top: 63px;
    height: calc(100vh - 63px);
`;

function Layout(props) {
    return (
        <>
            <Header/>
            <LayoutWrapper>
                {props.children}
            </LayoutWrapper>
        </>
    );
}

export default Layout;