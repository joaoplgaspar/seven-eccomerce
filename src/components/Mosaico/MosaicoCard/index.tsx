import Link from 'components/Link'
import styles from './MosaicoCard.module.scss'
import { NavLink } from 'react-router-dom'
import { IMosaico } from 'types/types'

export default function MosaicoCard({imagem, nome}: IMosaico) {
  return (
    <div className={styles.container}>
        <NavLink to={`todosprodutos/${nome.toLowerCase()}`} className={styles.container__image}>
            <img src={`assets/images/mosaic/${imagem}`} alt="" />
        </NavLink>
        <div className={styles.container__link}>
            <Link to={`todosprodutos/${nome}`} mosaico>{nome}</Link>
        </div>
    </div>
  )
}
