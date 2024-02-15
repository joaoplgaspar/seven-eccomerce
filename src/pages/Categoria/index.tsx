import Produtos from 'components/Produtos'
import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import buscaApi from 'services'
import { IProduto } from 'types/types'
import styles from './Categoria.module.scss'

export default function Categoria() {
    const parametros = useParams()
    const [mercadoria, setMercadoria] = useState<IProduto[]>([])

    useEffect(() => {
        buscaApi({setter: setMercadoria, estoque: true, query: parametros.categoria, queryE: parametros.mercadoria})
    }, [parametros])

    console.log(mercadoria)

  return (
    <div className={styles.container}>
        <Produtos 
          title={parametros.mercadoria ? `${parametros?.categoria} - ${parametros.mercadoria}` : parametros.categoria} 
          estoque={mercadoria}
        />
    </div>
  )
}
