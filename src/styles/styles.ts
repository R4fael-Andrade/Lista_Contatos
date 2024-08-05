import styled, {createGlobalStyle} from "styled-components";

const EstiloGlobal = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        font-family: Roboto, sans-serif;
        list-style: none;
    }

    body {
        background-color: #003366;
    }
`

export const Titulo = styled.h1`
    text-align: center;
    padding: 16px 0;
    color: #ddd;
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
    margin-bottom: 10px;

`

export const BotaoEditar = styled(Botao)`
    background-color: #009933;
`

export const BotaoExcluir = styled(Botao)`
    background-color: #b30000;
`

export default EstiloGlobal