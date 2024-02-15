import classNames from 'classnames'
import { useNavigate } from 'react-router-dom'
import { IProdutoCard } from 'types/types'
import styles from './Produto.module.scss'

export default function Card({nome, preco, imagemPrincipal, precoPromocao, categorias, id}: IProdutoCard) {
    const navigate = useNavigate()

  return (
    <div className={styles.container}>
        <div 
            className={styles.image}
            onClick={() => navigate(`/produtos/${id}`)}
        >
            <img src={`/assets/images/estoque/${imagemPrincipal}`} alt={nome} />
        </div>
        <div className={styles.legenda}>
            <p
                className={styles.legenda__nome}
                onClick={() => navigate(`/produtos/${id}`)}
            >
                {nome}
            </p>
                <div className={styles.preco__container}>
                    <p className={classNames({
                        [styles.preco]: true,
                        [styles.promocao]: precoPromocao
                    })}>
                        {precoPromocao ? "de" : "por"} R${preco.toFixed(2)}
                    </p>
                    {precoPromocao && <p className={styles.preco}>por R${precoPromocao.toFixed(2)}</p>}
                </div>
        </div>
    </div>
  )
}
