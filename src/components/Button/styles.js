import styled from "styled-components";

export const Container =  styled.button`
    width: 100%;
    height: 3.6rem;
    border: 0;
    border-radius: .4rem;
    padding: 0 1.6rem;
    margin-top: 1.6rem;


    background: ${({ theme }) => theme.COLORS.ORANGE};
    color: ${({ theme }) => theme.COLORS.BACKGROUND_800};
    font-weight: 500;

    &:disabled {
        opacity: 0.5;
    }
`;
