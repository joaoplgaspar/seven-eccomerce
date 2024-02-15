import { IMosaico } from 'types/types'
import styles from './Mosaico.module.scss'
import MosaicoCard from './MosaicoCard'

interface Props {
    title: string,
    content: IMosaico[]
}

export default function Mosaico({title, content}: Props) {
  return (
    <div className={styles.container}>
        <h2>{title}</h2>
        <div className={styles.container__content}>
          {content.map(card => <MosaicoCard {...card}/>)}
        </div>
    </div>
  )
}
