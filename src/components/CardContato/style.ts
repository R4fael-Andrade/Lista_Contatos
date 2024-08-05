import styled from "styled-components";

export const Card = styled.div`
    max-width: 400px;
    width: 100%;
    height: auto;
    background-color: #eee;
    /* display: flex; */
    /* flex-direction: column; */  
    text-align:center;
    border-radius: 16px;
    box-shadow: 0 4px 8px;
    margin-bottom: 8px;
    /* justify-content:center; */

    
`

export const NomeTag = styled.textarea`
    font-size: 24px;
    color: #000;
    padding: 0 8px;
    text-align: center;
    resize: none;
    background-color: transparent;
    border: none;

`

export const TextoCard = styled.textarea`
    display: block;
    font-size: 16px;
    font-weight: bold;
    resize: none;
    border: none;
    background-color:  transparent;
    text-align: center;
    width: 100%;

`


export const Foto = styled.img`
        height: 60px;
        width: 60px;
        border-radius: 50%;
        margin-top: 8px;
`