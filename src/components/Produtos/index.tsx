import { IProduto } from 'types/types'
import Card from './Card'
import styles from './Produtos.module.scss'

interface Props {
    title: string | undefined
    estoque: IProduto[]
}

export default function Produtos({title, estoque}: Props) {
  return (
    <div className={styles.container}>
        <h2>{title}</h2>
        <div className={styles.produtos}>
            {estoque?.map(item => <Card {...item} key={item.id}/>)}
        </div>
    </div>
  )
}
