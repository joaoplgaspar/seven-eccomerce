import Produtos from 'components/Produtos'
import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import buscaApi from 'services'
import { IProduto } from 'types/types'

export default function TodosProdutos() {
    const [produtos, setProdutos] = useState<IProduto[]>([])
    const parametros = useParams()
    
    useEffect(() => {
        buscaApi({setter: setProdutos, estoque:true, query: parametros.mercadoria})
    }, [parametros])

  return (
    <main>
        <Produtos title={parametros.mercadoria ? `Todos Produtos - ${parametros.mercadoria}` : 'Todos Produtos'} estoque={produtos}/>
    </main>
  )
}
