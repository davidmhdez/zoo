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

function AddOrUpdateAnimal({onAddAnimal, onUpdateAnimal, onCancel, animal, isSaving}) {

    const genderOptions = [
        { label: "Macho", value: 1 },
        { label: "Hembra", value: 0 }
    ];

    const saveAnimal = async () => {
        if(!animal.id){
            await onAddAnimal(values);
        }else{
            await onUpdateAnimal(values);
        }
    }

    const { errors, handleChange, values, handleSubmit } = useValidation(animal, addOrUpdateAnimal, saveAnimal);

    return (
        <form onSubmit={handleSubmit}>
            <Title>{animal.id ? 'Actualizar' : 'Nuevo'} animal</Title>
            <Input 
                name="name" 
                placeholder="Nombre o sobrenombre"
                onChange={handleChange}
                onChangeCapture={handleChange}
                error={errors.name} 
                label="Nombre" 
                value={values.name}
                disabled={isSaving}
            />
            <Input 
                name="kind" 
                placeholder="Leon, Jirafa, etc..."
                onChange={handleChange} 
                onChangeCapture={handleChange}
                error={errors.kind} 
                label="Tipo de animal" 
                value={values.kind}
                disabled={isSaving} 
            />
            <Row>
                <Col>
                    <Input 
                        name="weight" 
                        type="number"
                        placeholder="kilos"
                        onChange={handleChange} 
                        onChangeCapture={handleChange}
                        error={errors.weight} 
                        label="Peso" 
                        value={values.weight}
                        disabled={isSaving}
                    />
                    <RadioButton 
                        label="Genero" 
                        selected={values.gender} 
                        name="gender" 
                        options={genderOptions} 
                        onChange={handleChange} 
                        error={errors.gender}
                        disabled={isSaving}
                    />
                </Col>
                <Col>
                    <ImageField 
                        img={animal.img} 
                        name="img" 
                        onChange={handleChange} 
                        label="Imagen"
                        disabled={isSaving}
                    />
                </Col>
            </Row>
            <Input 
                name="food" 
                onChange={handleChange} 
                onChangeCapture={handleChange}
                placeholder="Filete, pasto, etc..."
                error={errors.food} 
                label="Comida preferida" 
                value={values.food}
                disabled={isSaving}
            />
            <TextArea 
                name="observations" 
                placeholder="Comportamientos, cuidados y datos de interes"
                onChange={handleChange} 
                label="Observaciones" 
                defaultValue={values.observations} 
                disabled={isSaving}
            />
            <ButtonsContainer>
                <Button 
                    text="Cancelar" 
                    onClick={onCancel} 
                    theme="secondary" 
                    disabled={isSaving} 
                />
                <Button 
                    type="submit" 
                    text="Guardar" 
                    disabled={isSaving}
                    isLoading={isSaving}
                />
            </ButtonsContainer>
        </form>
    );
}

export default AddOrUpdateAnimal;