import React from 'react';
import styled from 'styled-components';
import Button from '../../../../components/Button';
import { AiFillDelete } from "react-icons/ai";
import { GoPlus } from "react-icons/go";


const ControlsContainer = styled.div`
    width: 100%;
    display: grid;
    grid-auto-flow: column;
    grid-gap: 8px;
    justify-content: end;
`;

function Controls({onClickAdd}) {
    return (
        <ControlsContainer>
            <Button text="Nuevo" icon={GoPlus} onClick={onClickAdd}/>
            <Button text="Editar" theme="info"/>
            <Button text="Eliminar" theme="danger" icon={AiFillDelete}/>
        </ControlsContainer>
    );
}

export default Controls;