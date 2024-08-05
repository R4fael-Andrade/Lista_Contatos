import { Link } from "react-router-dom";
import styled from "styled-components";
import variaveis from "../../styles/variaveis";

export const Form = styled.form`
    max-width: 440px;
    width: 100%;
    border: 1px solid ${variaveis.preto};
    padding: 16px;
    border-radius: 16px;
    box-shadow: 0 4px 8px;

    label {
        font-size: 18px;
        font-weight: bold;
        color: ${variaveis.branco};
        display: block;
    }
`

export const Campo = styled.textarea`
    width: 100%;
    padding: 8px;
    border-radius: 8px;
    border: none;
    margin: 8px 0;
    resize: none;
    height: 35px;
`

export const ContainerForm = styled.div`
    max-width: 1024px;
    width: 100%;
    margin: 0 auto;
    padding: 10vw;
    display: flex;
    justify-content: center;
    align-items: center;
`

export const BtnVoltar = styled(Link)`
    padding: 8px 16px;
    font-size: 14px;
    font-weight: bold;
    background-color: ${variaveis.vermelho};
    color: ${variaveis.branco};
    border: none;
    border-radius: 8px;
    margin-right: 4px;
    cursor: pointer;
    margin-bottom: 10px;
    text-decoration: none;
    margin-left: 8px;
`