import ITarefa from '../../../types/tarefa'
import style from '../Lista.module.scss'

export default function Item({titulo, tempo, selecionado, completado, id}: ITarefa) {

    return (
        <li className={style.item}>
            <h3>{titulo}</h3>
            <span>{tempo}</span>
        </li>
    )

}