import React from 'react';
import styled from 'styled-components';
import Checkbox from '../../../../components/Checkbox';
import { tableGrid, tableOverflow } from '../../../../utils/style/tablegrid';

const TableRow = styled.div`
    display: flex;
    align-items: center;
    background-color: #fff;

    &:hover{
        background-color: #dad8d8;
        cursor: pointer;
    }
`;

const Action = styled.div`
    padding: 8px;
    flex: 0 0 auto;
`;

const TableRowData = styled.div`
    width: calc(100% - 30px);
    flex: 0 0 auto;
    align-items: center;
    ${tableGrid}

    &:hover{
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
    ${tableOverflow}
`;

function TableBodyRow({animal, onClickRow, onCheckRow}) {
    return (
        <TableRow >
            <Action>
                <Checkbox onChange={onCheckRow} className="row-action" id={animal.id}/>
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
    );
}

export default TableBodyRow;