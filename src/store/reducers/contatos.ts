import {createSlice, PayloadAction} from '@reduxjs/toolkit'
import Contato from '../../models/Contato'

type ContatoState = {
    itens: Contato[]
}

const initialState: ContatoState = {
    itens: [
        {
            id: 1,
            nome: 'Rafael Sousa',
            email: 'rafael.teste@gmail.com',
            telefone: '88993989211'
        },
        {
            id: 2,
            nome: 'Antonio Firmino',
            email: 'antoniofirmino@gmail.com',
            telefone: '88992475361'
        },
        {
            id: 3,
            nome: 'Anderson Pereira',
            email: 'anderson785@gmail.com',
            telefone: '88994523476'
        },
        {
            id: 4,
            nome: 'Amaro de Melo',
            email: 'amaro454@gmail.com',
            telefone: '88947523154'
        },
        {
            id: 5,
            nome: 'Virginia Fonseca',
            email: 'virginia321@gmail.com',
            telefone: '88934751236'
        },
    ]
}

const contatosSlice = createSlice({
    name: 'contatos',
    initialState,
    reducers: {
        excluir: (state, action:PayloadAction<number>) => {
            state.itens = state.itens.filter((n) => n.id !== action.payload)
        },
        editar: (state, action:PayloadAction<Contato>) => {

            const IndexContato = state.itens.findIndex(
                (c) => c.id === action.payload.id
            )

            if(IndexContato >= 0) {
                state.itens[IndexContato] = action.payload
            }
        },
        cadastrar: (state, action: PayloadAction<Omit<Contato, 'id'>>) => {
            const contatoJaExiste = state.itens.find((c) => c.telefone === action.payload.telefone)

            if(contatoJaExiste) {
                alert('Já existe um contato com esse telefone')
            } else if(state.itens.find((tel) => tel.telefone.length < 11)) {
                alert('Telefone deve possuir 11 caracteres')
            } else {
                const ultimoContato = state.itens[state.itens.length - 1]

                const contatoNovo = {
                    ...action.payload,
                    id: ultimoContato ? ultimoContato.id + 1 : 1
                }
                state.itens.push(contatoNovo)
            }
        }
    }
})

export const {excluir, editar, cadastrar} = contatosSlice.actions
export default contatosSlice.reducer