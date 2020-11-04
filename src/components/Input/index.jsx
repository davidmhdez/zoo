import React from 'react';
import styled from 'styled-components';
import colors from '../../utils/style/colors';

const Container = styled.div`
    margin-bottom: 16px;
    width: 100%;
`;

const Label = styled.label`
    font-size: 14px;
    font-weight: bold;
    display: block;
    margin-bottom: 4px;
`;

const StyledInput = styled.input`
    width: 100%;
    font-size: 16px;
    border: 1px solid ${props => props.error ? colors.danger : '#c0bfbf'};
    border-radius: 4px;
    padding: 8px;
`;

const Error = styled.p`
    color: ${colors.danger};
    font-size: 14px;
    margin-top: 8px;
    margin-bottom: 0;
`;

function Input({label, error, type, ...res}) {
    return (
        <Container>
            <Label>{label}</Label>
            <StyledInput type={type} error={error} {...res} />
            {error && <Error>{error}</Error>}
        </Container>
    );
}

Input.defaultProps = {
    label: 'Input',
    type: 'text'
}

export default Input;