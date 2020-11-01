import React from 'react';
import styled, { css } from 'styled-components';
import Checkbox from '../../../../components/Checkbox';
import animals from '../../../../utils/animals.json';

const StyledTable = styled.div`
    width: 100%;
    margin-top: 24px;
`;

const tableGrid = css`
    display: grid;
    grid-template-columns: 40px repeat(3, 1fr);
    grid-gap: 8px;
    background-color: #fff;
    padding: 8px;
`;

const TableHead = styled.div`
    ${tableGrid}
    border: 1px solid #b6b6b6;
    margin-bottom: 16px;
`;

const TableBody = styled.div`
    border: 1px solid #b6b6b6;
`;

const TableRow = styled.div`
    ${tableGrid}
    align-items: center;

    &:hover{
        background-color: #dad8d8;
        cursor: pointer;
    }
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

function AnimalsTable() {
    return (
        <StyledTable>
            <TableHead>
                <Checkbox id="all"/>
                <b>Nombre</b>
                <b>Tipo</b>
                <b>Fecha de ingreso</b>
            </TableHead>
            <TableBody>
                {animals.map(animal => (
                        <TableRow key={animal.id}>
                            <Checkbox id={animal.id}/>
                            <NameCol>
                                <img src={animal.img} alt={animal.name}/>
                                <p>{animal.name}</p>
                            </NameCol>
                            <Col>{animal.animal_kind}</Col>
                            <Col>{animal.registered_in}</Col>
                        </TableRow>
                    ))
                }
            </TableBody>
        </StyledTable>
    );
}

export default AnimalsTable;