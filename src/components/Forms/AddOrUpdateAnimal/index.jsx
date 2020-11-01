import React from 'react';
import styled from 'styled-components';
import Button from '../../Button';
import ImageField from '../../ImageField';
import Input from '../../Input';
import RadioButton from '../../RadioButton';
import TextArea from '../../TextArea';

const Title = styled.h5`
    font-size: 22px;
    text-align: center;
    margin-top: 0;
    margin-bottom: 16px;
`;

const ButtonsContainer = styled.div`
    display: grid;
    grid-auto-flow: column;
    grid-gap: 8px;
    justify-content: end;
`;

const Row = styled.div`
    display: flex;
    margin: -8px;
`;

const Col = styled.div`
    width: 50%;
    margin: 8px;
`;

function AddOrUpdateAnimal({onCancel}) {

    const genderOptions = [
        { label: "Macho", value: 1 },
        { label: "Hembra", value: 0 }
    ];

    return (
        <form>
            <Title>Nuevo animal</Title>
            <Input label="Nombre" />
            <Input label="Tipo de animal"/>
            <Row>
                <Col>
                    <Input label="Peso"/>
                    {/* <Input label="Peso"/> */}
                    <RadioButton label="Genero" name="gender" options={genderOptions}/>
                </Col>
                <Col>
                    <ImageField label="Imagen"/>
                </Col>
            </Row>
            <Input label="Comida preferida"/>            
            <TextArea label="Observaciones" />
            <ButtonsContainer>
                <Button text="Cancelar" onClick={onCancel} theme="secondary"/>
                <Button type="submit" text="Guardar"/>
            </ButtonsContainer>
        </form>
    );
}

export default AddOrUpdateAnimal;