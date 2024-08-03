
import CardContato from "../CardContato";
import { Container, Titulo } from "./styles";
import {RootReducer} from '../../store'
import { useSelector } from "react-redux";

    const ListaDeContatos = () => {
        const {itens} = useSelector((state: RootReducer) => state.contatos)
        return (
            <>
                <Titulo>Lista de contatos</Titulo>
            <Container>
                {itens.map((t) => (
                    <li key={t.nome}>
                        <CardContato id={t.id} nome={t.nome} email={t.email} numero={t.telefone}  />
                    </li>
                ))}
            </Container>          
            </>
        )
    }

    export default ListaDeContatos