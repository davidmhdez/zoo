import { css } from "styled-components";

const colors = {
    main: '#015031',
    background: '#ced9e8',
    danger: '#f72b2b',
    info: '#2020c3',
    border: '#c0bfbf'
};

const primary = css`
    background-color: ${colors.main};
    color: #fff;
    border: 1px solid ${colors.main};
`;

const secondary = css`
    background-color: #fff;
    color: ${colors.main};
    border: 1px solid ${colors.main};
`;

const danger = css`
    background-color: ${colors.danger};
    color: #fff;
    border: 1px solid ${colors.danger};
`;

const info = css`
    background-color: ${colors.info};
    color: #fff;
    border: 1px solid ${colors.info};
`;

export const buttonThemes = {
    primary,
    secondary,
    danger,
    info
}


export default colors;