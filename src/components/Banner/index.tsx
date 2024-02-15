import { NavLink } from 'react-router-dom'
import styles from './Banner.module.scss'

export default function Banner({image}: {image:string}) {
  return (
    <div 
        className={styles.container}
    >
        <img src={`assets/images/banners/${image}`} alt="Banner anunciando frete gratis" />
        <div className={styles.texts}>
            <p><strong>Frete Gratis</strong><br />a partir de <strong><br />RS$ 50,00</strong><br /> em compras</p> 
            <NavLink to='todosprodutos' className={styles.link}>
                Aproveite
            </NavLink>
        </div>
    </div>
  )
}
