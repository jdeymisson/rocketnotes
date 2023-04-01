import styled from "styled-components";

export const Container = styled.button`
    width: 100%;
    padding: 2.2rem;

    background: ${({ theme }) => theme.COLORS.BACKGROUND_700};
    border: none;
    border-radius: .4rem;
    margin-bottom: 2.4rem;

    > h1 {
        flex: 1;
        text-align: start;
        font-weight: 700;
        font-size: 2.4rem;
    
        color: ${({ theme }) => theme.COLORS.WHITE}
    }

    > footer {
        width: 100%;
        display: flex;

        margin-top: 2.4rem;
    }
`;