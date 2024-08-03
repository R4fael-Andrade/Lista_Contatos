
import * as S from './style'

type Props = {
    nome: string
    email: string
    numero: number
    id?: number
}

const CardContato = ({nome, email, numero}: Props) => (
    <>
        <S.Card>
            <S.Foto src='https://thumbs.dreamstime.com/b/design-do-%C3%ADcone-de-avatar-perfil-vetor-229438563.jpg' />
            <S.NomeTag> {nome} </S.NomeTag>
            <S.TextoCard> {email} </S.TextoCard>
            <S.TextoCard> {numero} </S.TextoCard>
            <S.BotaoEditar>Editar</S.BotaoEditar>
            <S.BotaoExcluir>Excluir</S.BotaoExcluir>
        </S.Card>
    </>
)

export default CardContato