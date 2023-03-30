import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
    html {
        font-size: 62.5%;
    }
    * {
        box-sizing: border-box;
        padding: 0;
        margin: 0;
    }   

    body {
       background-color: ${({ theme }) => theme.COLORS.BACKGROUND_800};
       color: #fff;
       font-size: 1.6rem;
    }
`;