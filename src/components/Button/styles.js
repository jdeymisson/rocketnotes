import styled from "styled-components";

export const Container =  styled.button`
    width: 100%;
    border: 0;
    border-radius: .4rem;
    padding: 1.6rem;
    margin-top: 2.4rem;
    
    background: ${({ theme }) => theme.COLORS.ORANGE};
    color: ${({ theme }) => theme.COLORS.BACKGROUND_800};
    font-weight: 500;

    &:disabled {
        opacity: 0.5;
    }
`;
