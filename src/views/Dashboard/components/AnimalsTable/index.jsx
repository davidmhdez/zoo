import React, { useEffect, useState } from 'react';
import styled, { css } from 'styled-components';
import Checkbox from '../../../../components/Checkbox';
import Spinner from '../../../../components/Spinner';

const StyledTable = styled.div`
    width: 100%;
    margin-top: 24px;
`;

const tableGrid = css`
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-gap: 8px;
    padding: 8px;
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
    flex: 0 0 auto;
    ${tableGrid}
`;

const TableBody = styled.div`
    border: 1px solid #b6b6b6;
`;

const TableRow = styled.div`
    display: flex;
    align-items: center;
    background-color: #fff;

    &:hover{
        background-color: #dad8d8;
        cursor: pointer;
    }
`;

const TableRowData =  styled(TableHeaders)`
    align-items: center;

    &:hover{
        cursor: pointer;
    }
`;

const LoadingRow = styled.div`
    background-color: #fff;
    width: 100%;
    height: 150px;
    display: flex;
    justify-content: center;
    align-items: center;
`;

const NameCol = styled.div`
    display: flex;
    align-items: center;

    img{
        width: 30px;
        height: 30px;
        border-radius: 50%;
        margin-right: 8px;
    }

    p{
        margin: 0;
    }
`;

const Col = styled.p`
    margin: 0;
`;

function AnimalsTable({animals, onClickRow, checkRow, uncheckRow, isLoading}) {

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

    return (
        <StyledTable>
            <TableHead>
                <Action>
                    <Checkbox checked={isAllChecked} onChange={handleCheckAll} id="all"/>
                </Action>
                <TableHeaders>
                    <b>Nombre</b>
                    <b>Tipo</b>
                    <b>Fecha de ingreso</b>
                </TableHeaders>
            </TableHead>
            <TableBody>
                {!isLoading 
                    ? animals.map(animal => (
                            <TableRow key={animal.id}>
                                <Action>
                                    <Checkbox onChange={handleCheckRow} className="row-action" id={animal.id}/>
                                </Action>
                                <TableRowData onClick={()=>{onClickRow(animal)}}>
                                    <NameCol>
                                        <img src={animal.thumbnail} alt={animal.name}/>
                                        <p>{animal.name}</p>
                                    </NameCol>
                                    <Col>{animal.kind}</Col>
                                    <Col>{animal.createdAt}</Col>
                                </TableRowData>
                            </TableRow>
                        ))
                    : <LoadingRow>
                        <Spinner/>
                      </LoadingRow>
                }
            </TableBody>
        </StyledTable>
    );
}

export default AnimalsTable;