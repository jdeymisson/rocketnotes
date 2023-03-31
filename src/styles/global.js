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
       color: ${({ theme }) => theme.COLORS.WHITE};

       -webkit-font-smoothing: antialiased;
    }

    body, input, button, textarea {
        font-family: 'Roboto Slab', serif;
        font-size: 1.6rem;
        outline: none;
    }
    
    a {
        text-decoration: none;
    }

    a, button {
        cursor: pointer;
        transition: filter 0.2s;
    }

    a:hover, button:hover {
        filter: brightness(0.9);
    }
`;