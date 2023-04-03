import { Link } from "react-router-dom";
import styled from "styled-components";

export const Container = styled.div`
    width: 100%;
    height: 100vh;

    display: grid;
    grid-template-columns: 25rem auto;
    grid-template-rows: 10.5rem 12.8rem auto 6.4rem;
    grid-template-areas:
    "brand header"
    "menu search"
    "menu content"
    "newnote content";

    background: ${({ theme }) => theme.COLORS.BACKGROUND_800};
`;

export const Brand = styled.div`
    grid-area: brand;

    display: flex;
    align-items: center;
    justify-content: center;
    
    border-bottom-width: .1rem;
    border-bottom-style: solid;
    border-bottom-color: ${({ theme }) => theme.COLORS.BACKGROUND_700};
    background: ${({ theme }) => theme.COLORS.BACKGROUND_900};

    > h1 {
        color:  ${({ theme }) => theme.COLORS.ORANGE};
        font-size: 2.4rem;
    }
`;

export const Menu = styled.ul`
    grid-area: menu;
    background: ${({ theme }) => theme.COLORS.BACKGROUND_900};

    display: flex;
    flex-direction: column;
    text-align: center;
    gap: 2.4rem;
    padding-top: 6.4rem;
`;

export const Search = styled.div`
    grid-area: search;

    padding: 6.4rem;
`;

export const Content = styled.div`
    grid-area: content;
    padding: 0 6.4rem;

    overflow-y: auto;
`;
export const NewNotes = styled(Link)`
    grid-area: newnote;
    background: ${({ theme }) => theme.COLORS.ORANGE};
    border:none;
    
    display: flex;
    justify-content: center;
    align-items: center;
    gap: .8rem;

    font-size: 1.6rem;
    color: ${({ theme }) => theme.COLORS.BACKGROUND_900};
`;