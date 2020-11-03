import { css } from "styled-components";

const tableGrid = css`
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-gap: 8px;
    padding: 8px;
`;

const tableOverflow = css`
    white-space: nowrap;
    text-overflow: ellipsis;
    overflow: hidden;
`;

export {tableGrid, tableOverflow};