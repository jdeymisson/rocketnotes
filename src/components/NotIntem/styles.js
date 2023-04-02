import styled from "styled-components";

export const Container = styled.div `
    display: flex;
    align-items: center;
    /* gap: .8rem; */

    background: ${({theme, isNew}) => isNew ? "transparent" : theme.COLORS.BACKGROUND_900};
    color: ${({theme}) => theme.COLORS.GRAY_300};

    border: ${({theme, isNew}) => isNew ? `.1rem dashed ${theme.COLORS.GRAY_300}` : "none"};
    
    margin-bottom: .8rem;
    border-radius: .4rem;
    padding-right: .8rem;

    > button {
        border: none;
        background: none
    }

    .button-delete {
        color: ${({theme,}) => theme.COLORS.RED};
    }

    .button-add {
        color: ${({theme,}) => theme.COLORS.ORANGE};
    }
    > input {
        height: 5.6rem;
        width: 100%;

        padding: 1.2rem;

        color: ${({ theme }) => theme.COLORS.WHITE};
        background: transparent;

        border: none;

        &::placeholder {
            color: ${({theme}) => theme.COLORS.GRAY_300};
        }
    }
`;