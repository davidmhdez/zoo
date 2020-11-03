import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import Checkbox from '../../../../components/Checkbox';
import Spinner from '../../../../components/Spinner';
import { tableGrid } from '../../../../utils/style/tablegrid';
import TableBodyRow from './TableBodyRow';

const StyledTable = styled.div`
    width: 100%;
    margin-top: 24px;
`;

const TableHead = styled.div`
    display: flex;
    align-items: center;
    flex: 0 0 auto;
    border: 1px solid #b6b6b6;
    margin-bottom: 16px;
    background-color: #fff;
`;

const Action = styled.div`
    padding: 8px;
    flex: 0 0 auto;
`;

const TableHeaders = styled.div`
    width: calc(100% - 30px);
    align-items: center;
    flex: 0 0 auto;
    ${tableGrid}
`;

const TableBody = styled.div`
    border: 1px solid #b6b6b6;
    position: relative;
`;

const LoadingRow = styled.div`
    background-color: #fff;
    width: 100%;
    height: 150px;
    display: flex;
    justify-content: center;
    align-items: center;
`;

const TableBodyCover = styled.div`
    width: 100%;
    height: 100%;
    background-color: rgba(179, 178, 178, 0.7);
    position: absolute;
    top: 0;
    left: 0;
`;

function AnimalsTable({animals, onClickRow, checkRow, uncheckRow, isLoading, isSaving}) {

    const [ checkedNumber, setCheckedNumber ] = useState(0);
    const [ isAllChecked, setIsAllChecked ] = useState(false);

    const getAllAnimalId = () => {
        return animals.map( animal => animal.id );
    };
    
    const handleCheckAll = e => {
        const { checked } = e.target;
        const rows = document.querySelectorAll('.row-action');
        if(checked){
            rows.forEach( row =>{
                row.checked = true;
                const allIds = getAllAnimalId();
                checkRow(allIds);
                setCheckedNumber(animals.length);
            })
        }else{
            rows.forEach( row =>{
                row.checked = false;
                checkRow([]);
                setCheckedNumber(0);
            })
        }
    }

    const handleCheckRow = e =>{
        const { checked } = e.target;
        const animalId = parseInt(e.target.id);

        if(checked){
            checkRow(animalId);
            setCheckedNumber(checkedNumber + 1);
        }else{
            uncheckRow(animalId);
            setCheckedNumber(checkedNumber - 1);
        }
    }

    useEffect(()=>{
        if(checkedNumber === animals.length && !isLoading ){
            setIsAllChecked(true);
        }else{
            setIsAllChecked(false);
        }
        // eslint-disable-next-line
    },[checkedNumber]);

    const rows = animals.length === 0 
                    ? <LoadingRow>Aun no hay animales registrados</LoadingRow> 
                    : animals.map(animal => (
                        <TableBodyRow
                            key={animal.id} 
                            animal={animal}
                            onClickRow={onClickRow}
                            onCheckRow={handleCheckRow}
                        />
                    )
    );

    const loadingSpinner = <LoadingRow><Spinner/></LoadingRow>;

    return (
        <StyledTable>
            <TableHead>
                <Action>
                    <Checkbox 
                        checked={isAllChecked} 
                        onChange={handleCheckAll} 
                        id="all"
                        disabled={isLoading}
                    />
                </Action>
                <TableHeaders>
                    <b>Nombre</b>
                    <b>Tipo</b>
                    <b>Fecha de ingreso</b>
                </TableHeaders>
            </TableHead>
            <TableBody>
                {!isLoading ? rows : loadingSpinner}
                {isSaving && !isLoading 
                    ? <TableBodyCover/>
                    : ''
                }
            </TableBody>
        </StyledTable>
    );
}

export default AnimalsTable;