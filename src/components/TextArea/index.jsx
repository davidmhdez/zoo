import React from 'react';
import styled from 'styled-components';
import TextareaAutosize from 'react-textarea-autosize';

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

const StyledTextArea = styled(TextareaAutosize)`
    width: 100%;
    max-width: 100%;
    min-width: 100%;
    border-radius: 4px;
    border: 1px solid  #c0bfbf;
    padding: 8px;
`;

function TextArea({label, value, ...rest}) {
    return (
        <Container>
            <Label>{label}</Label>
            <StyledTextArea {...rest}>
                {value}
            </StyledTextArea>
        </Container>
    );
}

TextArea.defauklProps = {
    label: 'Textarea'
}

export default TextArea;