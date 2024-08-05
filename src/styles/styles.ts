import styled, {createGlobalStyle} from "styled-components";
import variaveis from "./variaveis";

const EstiloGlobal = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        font-family: Roboto, sans-serif;
        list-style: none;
    }

    body {
        background-color: ${variaveis.azul};
    }
`

export const Titulo = styled.h1`
    text-align: center;
    padding: 16px 0;
    color: ${variaveis.cinza};
`

export const Botao = styled.button`
    padding: 8px 16px;
    font-size: 14px;
    font-weight: bold;
    color: ${variaveis.cinza};
    background-color: ${variaveis.azul};
    border: none;
    border-radius: 8px;
    margin-right: 4px;
    cursor: pointer;
    margin: 10px 5px;

`

export const BotaoEditar = styled(Botao)`
    background-color: ${variaveis.verde};
`

export const BotaoExcluir = styled(Botao)`
    background-color: ${variaveis.vermelho};
`

export default EstiloGlobal