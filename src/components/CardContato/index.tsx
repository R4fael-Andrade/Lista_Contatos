import { useDispatch } from 'react-redux'
import { excluir, editar } from '../../store/reducers/contatos'
import * as S from './style'
import { useEffect, useState } from 'react'
import Contato from '../../models/Contato'
import { Botao, BotaoEditar,BotaoExcluir} from '../../styles/styles'

// type Props = {
//     nome: string
//     email: string
//     numero: number
//     id: number
// }

type Props = Contato

const CardContato = ({nome: nomeOriginal, email: emailOriginal, telefone: numeroOriginal, id}: Props) => {
    const dispacth = useDispatch()
    const [estaEditando,  setEstaEditando] = useState(false)
    const [nomeContato, setNomeContato] = useState('')
    const [emailContato, setEmailContato] = useState('')
    const [numeroContato, setNumeroContato] = useState('')

    useEffect(() => {
        if(nomeOriginal.length > 0) {
            setNomeContato(nomeOriginal)
        }
    },[nomeOriginal])

    useEffect(() => {
        if(emailOriginal.length > 0) {
            setEmailContato(emailOriginal)
        }
    },[emailOriginal])

    useEffect(() => {
        if(numeroOriginal.length > 0) {
            setNumeroContato(numeroOriginal)
        }
    },[numeroOriginal])

    function cancelarEdicao() {
        setEstaEditando(false)
        setNomeContato(nomeOriginal)
        setEmailContato(emailOriginal)
        setNumeroContato(numeroOriginal)
    }

    function verificaEdicao () {
            alert('Preencha os campos corretamente')
            setNomeContato(nomeOriginal)
            setEmailContato(emailOriginal)
            setNumeroContato(numeroOriginal)
        }
    
    
    return (
        <>
            <S.Card>
                <S.Foto src='https://thumbs.dreamstime.com/b/design-do-%C3%ADcone-de-avatar-perfil-vetor-229438563.jpg' />
                <S.NomeTag required onChange={(evento) => setNomeContato(evento.target.value)} disabled={!estaEditando} value={nomeContato} />  
                <S.TextoCard required onChange={(evento) => setEmailContato(evento.target.value)} disabled={!estaEditando} value={emailContato} /> 
                <S.TextoCard required type='number' as="input" minLength={11} maxLength={11} onChange={(evento) => setNumeroContato(evento.target.value)} disabled={!estaEditando} value={numeroContato} />
                {estaEditando ? (
                    <>
                        <BotaoEditar onClick={() => {
                            if(nomeContato.length < 9 || emailContato.length === 0 || numeroContato.length < 11) {
                                verificaEdicao()
                            } else {
                                dispacth(editar({
                                    id,
                                    nome: nomeContato, 
                                    email: emailContato, 
                                    telefone: numeroContato
                                }));
                                    setEstaEditando(false)
                            }
                            
                            
                        }} >Salvar</BotaoEditar> 
                        <BotaoExcluir onClick={() => cancelarEdicao()}>Cancelar</BotaoExcluir>
                    </>
                ) : (
                    <>
                        <Botao onClick={() => setEstaEditando(true)}>Editar</Botao>
                        <BotaoExcluir onClick={() => dispacth(excluir(id))} >Excluir</BotaoExcluir>
                    </>
                )}
            </S.Card>
        </>
    )
}

export default CardContato