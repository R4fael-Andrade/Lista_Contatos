import styled from "styled-components";

export const Card = styled.div`
    max-width: 400px;
    width: 100%;
    height: 240px;
    background-color: #eee;
    /* display: flex; */
    /* flex-direction: column; */
    border: 1px solid red;    
    text-align:center;
    border-radius: 16px;
    box-shadow: 0 4px 8px;
    margin-bottom: 8px;
    /* justify-content:center; */

    
`

export const NomeTag = styled.h2`
    font-size: 24px;
    color: #000;
    margin-bottom: 8px;

`

export const TextoCard = styled.span`
    display: block;
    font-size: 16px;
    font-weight: bold;
    margin-bottom: 8px;
`

export const Botao = styled.button`
    padding: 8px 16px;
    font-size: 14px;
    font-weight: bold;
    background-color: #3366ff;
    color: #fff;
    border: none;
    border-radius: 8px;
    margin-right: 4px;
    cursor: pointer;
`

export const BotaoEditar = styled(Botao)`
    background-color: green;
`

export const BotaoExcluir = styled(Botao)`
    background-color: red;
`

export const Foto = styled.img`
        height: 60px;
        width: 60px;
        border-radius: 50%;
        margin-top: 8px;
`