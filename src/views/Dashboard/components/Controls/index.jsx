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

function Controls({onClickAdd, onClickDelete, showDeleteBtn}) {
    return (
        <ControlsContainer>
            <Button text="Nuevo" icon={GoPlus} onClick={()=>onClickAdd()}/>
            {showDeleteBtn && <Button text="Eliminar" theme="danger" onClick={()=>onClickDelete()} icon={AiFillDelete}/>} 
        </ControlsContainer>
    );
}

export default Controls;