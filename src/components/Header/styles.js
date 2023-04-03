import { Link } from "react-router-dom";
import styled from "styled-components";

export const Container =  styled.header`
    grid-area: header;

    height: 10.5rem;
    width: 100%;
    padding: 0 8rem;

    border-bottom-width: 0.1rem;
    border-bottom-style: solid;
    border-bottom-color: ${({ theme }) => theme.COLORS.BACKGROUND_700};
    
    display: flex;
    justify-content: space-between;
    align-items: center;

`;

export const Profile = styled(Link)`
    display: flex;
    align-items: center;
    gap: 0.8rem;

    > img {
        width: 5rem;
        width: 5rem;
        border-radius: 50%;
    }

    > div {
        display: flex;
        flex-direction: column;
        line-height: 2.4rem;

        span {
            font-size: 1.4rem;
            color: ${({ theme }) => theme.COLORS.GRAY_100};
        }

        strong {
            font-size: 1.8rem;
            color: ${({ theme }) => theme.COLORS.WHITE};
            font-weight: 700;
        }
    }
`;

export const Logout = styled.button`
    border: none;
    background: none;

    > svg {
        fill: ${({ theme }) => theme.COLORS.GRAY_100};
        font-size: 2.4rem;
    }
`;