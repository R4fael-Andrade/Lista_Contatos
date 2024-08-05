import * as S from './styles'
import {BotaoEditar, Titulo} from '../../styles/styles'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { FormEvent, useState } from 'react'
import { cadastrar } from '../../store/reducers/contatos'
const Formulario = () => {
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const [nome, setNome] = useState('')
    const [email, setEmail] = useState('')
    const [telefone, setTelefone] = useState('')

    const cadastrarTelefone = (evento: FormEvent) => {
        evento.preventDefault()

        if(telefone.length  < 11 || nome.length < 9 ) {
            alert('Preencha os campos correntamente')
        } else {
            dispatch(cadastrar({
                nome,
                email,
                telefone
            }))
            navigate('/')
        }
    }

    
        

    return (
        <>
            <S.ContainerForm>
            <S.Form onSubmit={cadastrarTelefone}>
        <Titulo>Novo contato</Titulo>
                <label htmlFor="nome">Nome</label>
                <S.Campo required name='nome' value={nome} onChange={(evento) => setNome(evento.target.value)} placeholder='Nome completo'/>
                <label htmlFor="email">Email</label>
                <S.Campo as="input" type='email' required value={email} onChange={(evento) => setEmail(evento.target.value)} placeholder='Email'/>
                <label htmlFor="nome">Telefone</label>
                <S.Campo as="input" type='number' maxLength={11} value={telefone} onChange={(evento) => setTelefone(evento.target.value)} placeholder='Telefone'/>
                <BotaoEditar type='submit'>Cadastrar</BotaoEditar>
                <S.BtnVoltar to="/">Voltar</S.BtnVoltar>
            </S.Form>
            </S.ContainerForm>
        </>
    )
}

export default Formulario