import React from 'react'
import { IProduto } from 'types/types';

interface Props {
    setter: React.Dispatch<React.SetStateAction<IProduto[]>>,
    query?: string
    mercadorias?: boolean,
    estoque?: boolean,
    queryE?: string
    id?: number | string
}

export default function buscaApi({setter, query, mercadorias, estoque, queryE, id}: Props) {
    const url = mercadorias ? 'mercadorias' : id ? `estoque?id=${id}` : query ? queryE ? `estoque?q=${query}&tipo_like=${queryE}` : `estoque?q=${query}` : 'estoque';

    async function api(){
        const response = await fetch(`http://localhost:8000/${url}`);
        const api = await response.json();
        setter(api);
    }
    
    api()
}
