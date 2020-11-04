import React, { Fragment } from 'react';
import styled from 'styled-components';
import { ImCheckboxChecked,  ImCheckboxUnchecked} from "react-icons/im";
import colors from '../../utils/style/colors';

const StyledCheckbox = styled.input`
    display: none;

    &:checked + label > .unchecked{
        display: none;
    }

    &:checked + label > .checked{
        display: block;
    }
`;

const StyledLabel = styled.label`

    svg{
        fill: ${colors.main};
    }

    .unchecked{
        margin-bottom: -2px;
    }

    .checked{
        display: none;
    }
`;

function Checkbox({id, ...rest}) {

    return (
        <Fragment>
            <StyledCheckbox type="checkbox" id={id} {...rest}/>
            <StyledLabel htmlFor={id}>
                <ImCheckboxUnchecked className="unchecked"/>
                <ImCheckboxChecked className="checked"/>
            </StyledLabel>
        </Fragment>
    );
}

export default Checkbox;