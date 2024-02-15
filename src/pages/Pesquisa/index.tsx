import Produtos from 'components/Produtos'
import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import buscaApi from 'services'
import { IProduto } from 'types/types'
import styles from './Pesquisa.module.scss'

export default function Pesquisa() {
    const busca = useParams()
    const [produtos, setProdutos] = useState<IProduto[]>([])

    useEffect(() => {
        buscaApi({setter: setProdutos, estoque: true, query: busca.produtoProcurado})
    }, [busca])

    return (
        <div className={styles.container}>
            {produtos?.length === 0 ? 
                <h2>Sem resultados para: "{busca.produtoProcurado}"</h2>
                : <Produtos estoque={produtos} title={`Resultados para: ${busca.produtoProcurado}`}/>
            }
        </div>
    )
}
