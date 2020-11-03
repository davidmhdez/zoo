import React, { Fragment } from 'react';
import styled from 'styled-components';
import colors from '../../utils/style/colors';

const Container = styled.div`
    width: 100%;
    margin-bottom: 16px;
`;

const Label = styled.label`
    font-size: 14px;
    font-weight: bold;
    display: block;
    margin-bottom: 14px;
`;

const StyledRadioButton = styled.input`
    margin-right: 4px;
`;

const RadioButtonLabel = styled.label`
    margin-right: 16px;
    cursor: pointer;

    &:last-child{
        margin-right: 0;
    }
`;

const Error = styled.p`
    color: ${colors.danger};
    font-size: 14px;
    margin-bottom: 0;
    margin-top: 8px;
`;

function RadioButton({label, name, error, selected, onChange, options}) {
    return (
        <Container>
            <Label>{label}</Label>
            {options.map( (option, key) => (
                <Fragment key={key}>
                    <StyledRadioButton 
                        type="radio" 
                        id={`rb${option.value}`} 
                        name={name} 
                        value={option.value} 
                        defaultChecked={selected === option.value && true}
                        onChange={onChange}
                    />
                    <RadioButtonLabel htmlFor={`rb${option.value}`}>{option.label}</RadioButtonLabel>
                </Fragment>
            ))}
            {error && <Error>{error}</Error>}
        </Container>
    );
}

RadioButton.defaultProps = {
    label: 'Radio',
    onChange: ()=>{}
};

export default RadioButton;