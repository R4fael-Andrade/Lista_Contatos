import {Link} from 'react-router-dom'
import styled from "styled-components";
import variaveis from '../../styles/variaveis'

export const BtnAdicionar = styled(Link)`
    padding: 8px;
    background-color: ${variaveis.verde};
    color: ${variaveis.branco};
    text-decoration: none;
    position: fixed;
    bottom: 40px;
    right: 40px;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 64px;
    height: 64px;
    border-radius: 50%;
    font-size: 40px;
`