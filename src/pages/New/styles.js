import styled from "styled-components";

export const Container = styled.div`
    width: 100%;
    height: 100vh;

    display: grid; 
    
    grid-template-rows:  10.5rem auto;
    grid-template-areas: 
    "header"
    "content";

    .tags {
        display: flex;
        justify-content: space-between;
        gap: .8rem;
        flex-wrap: wrap;
    }

    main {
        grid-area: "content";
        overflow-y: auto;
    }
`;

export const Form = styled.form`
    max-width: 55rem;
    margin: 3.8rem auto;

    header {
        display: flex;
        justify-content: space-between;
        align-items: center;

        margin-bottom: 3.6rem;

        a {
            color: ${({ theme }) => theme.COLORS.GRAY_100};
            font-size: 1.6rem;
        }
    }

`