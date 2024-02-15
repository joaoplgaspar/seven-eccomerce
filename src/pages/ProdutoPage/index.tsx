import ProdutoTotal from 'components/ProdutoTotal';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom'
import buscaApi from 'services';
import { IProduto } from 'types/types';
import styles from './ProdutoPage.module.scss'

export default function ProdutoPage() {
    const parametro = useParams();
    const [produto, setProduto] = useState<IProduto[]>([])

    useEffect(() => {
        buscaApi({setter: setProduto, id: parametro.id})
    }, [])

  return (
    <main className={styles.container}>
        <ProdutoTotal {...produto[0]}/>
    </main>
  )
}
