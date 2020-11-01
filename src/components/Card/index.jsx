import React from 'react';
import styled from 'styled-components';

const CardWrapper = styled.div`
    width: 100%;
    background-color: #fff;
    border-radius: 8px;
    padding: 16px;
`;

const CardTitle = styled.h4`
    font-size: 22px;
    text-align: center;
    margin-top: 0;
    margin-bottom: 14px;
`;

function Card({children, title}) {
    return (
        <CardWrapper>
            {title && <CardTitle>{title}</CardTitle>}
            {children}
        </CardWrapper>
    );
}

export default Card;