import React from 'react';
import styled from 'styled-components';
import useValidation from '../../../utils/hooks/useValidation';
import Button from '../../Button';
import ImageField from '../../ImageField';
import Input from '../../Input';
import RadioButton from '../../RadioButton';
import TextArea from '../../TextArea';
import { addOrUpdateAnimal } from '../../../utils/validation/animal';

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

function AddOrUpdateAnimal({onCancel, animal}) {

    const genderOptions = [
        { label: "Macho", value: 1 },
        { label: "Hembra", value: 0 }
    ];

    const saveAnimal = () => {
        console.log('Guardando...');
    }

    const { errors, handleChange, values, handleSubmit } = useValidation(animal, addOrUpdateAnimal, saveAnimal);

    return (
        <form onSubmit={handleSubmit}>
            <Title>{animal.id ? 'Actualizar' : 'Nuevo'} animal</Title>
            <Input name="name" onChange={handleChange} error={errors.name} label="Nombre" value={values.name}/>
            <Input name="animal_kind" onChange={handleChange} error={errors.animal_kind} label="Tipo de animal" value={values.animal_kind} />
            <Row>
                <Col>
                    <Input name="weight" onChange={handleChange} error={errors.weight} label="Peso" value={values.weight}/>
                    <RadioButton label="Genero" selected={values.gender} name="gender" options={genderOptions} onChange={handleChange} error={errors.gender}/>
                </Col>
                <Col>
                    <ImageField img={animal.img} label="Imagen"/>
                </Col>
            </Row>
            <Input name="food" onChange={handleChange} error={errors.food} label="Comida preferida" value={values.food}/>
            <TextArea name="observations" onChange={handleChange} label="Observaciones" defaultValue={values.observations} />
            <ButtonsContainer>
                <Button text="Cancelar" onClick={onCancel} theme="secondary"/>
                <Button type="submit" text="Guardar"/>
            </ButtonsContainer>
        </form>
    );
}

export default AddOrUpdateAnimal;