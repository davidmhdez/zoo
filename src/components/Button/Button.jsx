import React from 'react';
import styled from 'styled-components';
import { buttonThemes } from '../../utils/style/colors';

const StyledButton = styled.button`
    padding: 8px 22px;
    border-radius: 4px;
    font-size: 16px;
    font-weight: bold;
    cursor: pointer;
    transition: .2s ease;
    transition-property: transform;
    display: flex;
    ${({theme}) => buttonThemes[theme] ? buttonThemes[theme] : buttonThemes['primary']}

    &:hover{
        transform: translateY(-3px);
        opacity: .8;
    }

    svg{
        margin-right: 4px;
    }
`;

function Button({text, type, theme, icon: Icon, ...rest}) {

    return (
        <StyledButton type={type} theme={theme} {...rest}>
            {Icon && <Icon/>}
            {text}
        </StyledButton>
    );
}

Button.defaultProps = {
    text: 'Button',
    type: 'button',
    theme: 'primary'
}

export default Button;