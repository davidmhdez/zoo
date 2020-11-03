import React from 'react';
import { createGlobalStyle } from 'styled-components';
import colors from '../../utils/style/colors';

function GlobalStyles() {

    const GlobalStyle = createGlobalStyle`
        
        html {
            box-sizing: border-box;
        }
        
        *, *:before, *:after {
            box-sizing: inherit;
        }
        
        body{
            font-family: 'Nunito', sans-serif;
            background-color:${colors.background};
        }

        input:disabled, button:disabled, div:disabled{
            cursor: not-allowed;
        }
    `;

    return (
        <>
            <GlobalStyle/>
        </>
    );
}

export default GlobalStyles;