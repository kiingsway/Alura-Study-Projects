import ITarefa from '../../../types/tarefa'
import style from './Item.module.scss'

interface Props extends ITarefa {
    selecionaTarefa: (tarefaSelecionada: ITarefa) => void
}
export default function Item({titulo, tempo, selecionado, completado, id, selecionaTarefa}: Props) {

    return (
        <li className={`${style.item} ${selecionado ? style.itemSelecionado : ''} ${completado ? style.itemCompletado : ''}`} onClick={() => !completado && selecionaTarefa({
            titulo, tempo, selecionado, completado, id
        })}>
            <h3>{titulo}</h3>
            <span>{tempo}</span>
            {completado && <span className={style.concluido} aria-label="Tarefa concluída" title='Tarefa concluída'></span>}
        </li>
    )

}