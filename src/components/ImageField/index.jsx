import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import colors from '../../utils/style/colors';
import { BsImage } from "react-icons/bs";

const Container = styled.div`
    margin-bottom: 16px;
`;

const Label = styled.label`
    font-size: 14px;
    font-weight: bold;
    display: block;
    margin-bottom: 4px;
`;

const ImageFieldWrapper = styled.div`
    border: 2px dashed ${colors.border};
    border-radius: 4px;
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    overflow: hidden;
    height: 110px;
`;

const StyledInput = styled.input`
    position: absolute;
    width: 100%;
    height: 100%;
    cursor: pointer;
    opacity: 0;
`;

const Img = styled.img`
    max-width: 100%;
    max-height: 100px;
`;

const StyledIcon = styled(BsImage)`
    fill: ${colors.border};
    height: 50px;
    width: 50px;
`;

const Error = styled.p`
    color: ${colors.danger};
    font-size: 14px;
    margin-bottom: 0;
    margin-top: 8px;
`;

function ImageField({label, error, onChange, img, ...rest}) {

    const [ selectedImg, setSelectedImg ] =  useState(false);
    const [ inputError, setInputError ] = useState(error);

    const handleChange = e => {
        const file = e.target.files[0];
        if(file.type === 'image/jpe' || file.type === 'image/png'){
            setInputError('');
            setSelectedImg(URL.createObjectURL(file));
            onChange();
        }else{
            setInputError('Formato de imagen invalido');            
        }
    };

    useEffect(()=>{
        if(img){
            setSelectedImg(img);
        }
        // eslint-disable-next-line
    },[])

    return (
        <Container>
            <Label>{label}</Label>
            <ImageFieldWrapper>
                <StyledInput type="file" accept="image/x-png,image/jpeg" onChange={handleChange} {...rest}/>
                {selectedImg 
                    ? <Img src={selectedImg}/>
                    : <StyledIcon/>
                }
            </ImageFieldWrapper>
            {inputError && <Error>{inputError}</Error>}
        </Container>
    );
}

ImageField.defaultProps = {
    label: 'Image field',
    onChange: ()=>{},
    error: ''
};

export default ImageField;