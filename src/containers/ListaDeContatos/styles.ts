import styled from "styled-components";

export const MainContainer = styled.main`
    display: grid;
    grid-template-columns: 220px 90%;
`

export const Container = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
    gap: 8px;
    max-width: 1424px;
    width: 100%;
    margin: 0 auto;

    @media (max-width: 768px) {
        display: block;
        max-width: 80%;
        width: 100%;
    }
`

