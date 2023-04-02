import styled from "styled-components";

export const Container = styled.div`
    width: 100%;
    border-radius: .8rem;
    border: none;

    display: flex;
    align-items: center;
    gap: .8rem;

    padding: 0 1rem;
    margin-bottom: .8rem;

    color: ${({ theme }) => theme.COLORS.GRAY_300};
    background: ${({ theme }) => theme.COLORS.BACKGROUND_900};

    > input {
        background: transparent;
        border: none;
        height: 5.6rem;
        width: 100%;
        color: ${({ theme }) => theme.COLORS.WHITE};
    }

    > svg {
        width: 2rem;
        height: 2rem;
    }
`;  