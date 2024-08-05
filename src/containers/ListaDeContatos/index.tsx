
import CardContato from "../../components/CardContato";
import { Container } from "./styles";
import {RootReducer} from '../../store'
import { useSelector } from "react-redux";
import {Titulo} from '../../styles/styles'

    const ListaDeContatos = () => {
        const {itens} = useSelector((state: RootReducer) => state.contatos)
        return (
            <>
                <Titulo>Lista de contatos</Titulo>
            <Container>
                {itens.map((t) => (
                    <li key={t.nome}>
                        <CardContato id={t.id} 
                        nome={t.nome} 
                        email={t.email} 
                        telefone={t.telefone}  
                    />
                    </li>
                ))}
            </Container>          
            </>
        )
    }

    export default ListaDeContatos