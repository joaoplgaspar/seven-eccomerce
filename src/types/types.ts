export interface IMercadorias {
    "nome": string,
    "categorias": string[]
}

export interface IMosaico {
    "nome": string,
    "imagem": string
}

export interface IProduto {
    tipo: string,
    id: number,
    nome: string,
    descricao: string,
    preco: number,
    precoPromocao?: number,
    imagemPrincipal: string,
    imagens: string[],
    cores: [{"cor": string, "hex": string}],
    categorias: string[]
}

export interface IProdutoCard {
    id: number,
    nome: string,
    preco: number,
    precoPromocao?: number,
    imagemPrincipal: string,
    categorias: string[]
}