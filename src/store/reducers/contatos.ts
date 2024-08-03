import {createSlice, PayloadAction} from '@reduxjs/toolkit'
import Contato from '../../models/Contato'

type ContatoState = {
    itens: Contato[]
}

const initialState: ContatoState = {
    itens: [
        {
            id: 1,
            nome: 'Rafael Sousa de Andrade',
            email: 'rafael.teste@gmail.com',
            telefone: 889939892
        },
        {
            id: 2,
            nome: 'Antonio Eribelton Firmino',
            email: 'antoniofirmino@gmail.com',
            telefone: 88992475361
        },
        {
            id: 3,
            nome: 'Anderson Pereira',
            email: 'anderson785@gmail.com',
            telefone: 88994523476
        },
        {
            id: 4,
            nome: 'Amaro de Melo',
            email: 'amaro454@gmail.com',
            telefone: 8894752315
        },
        {
            id: 5,
            nome: 'Virginia Fonseca',
            email: 'virginia321@gmail.com',
            telefone: 8893475123
        },
    ]
}

const contatosSlice = createSlice({
    name: 'contatos',
    initialState,
    reducers: {
        excluir: (state, action:PayloadAction<number>) => {
            state.itens = state.itens.filter((n) => n.id !== action.payload)
        }
    }
})

export const {excluir} = contatosSlice.actions
export default contatosSlice.reducer