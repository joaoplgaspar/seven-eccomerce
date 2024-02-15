import classNames from 'classnames'
import { useEffect, useState } from 'react'
import { IProduto } from 'types/types'
import InputRadio from './InputRadio'
import styles from './ProdutoTotal.module.scss'

export default function ProdutoTotal({nome, imagemPrincipal, imagens, precoPromocao, preco, cores, descricao}: IProduto) {
  const [imagemSelecionado, setImagemSelecionado] = useState(imagemPrincipal)
  const [cor, setCor] = useState<any>()
  const [tamanho, setTamanho] = useState<any>()
  const tamanhos = ["PP", "P", "M", "G", "GG"]
  
  useEffect(() => {
    setImagemSelecionado(imagemPrincipal)
  }, [imagemPrincipal])

  return (
    <div className={styles.container}>
        <div className={styles.container__images}>
          <nav className={styles.container__images__miniatura}>
            <img 
              src={`/assets/images/estoque/${imagemPrincipal}`} 
              alt={nome} 
              onClick={() => setImagemSelecionado(imagemPrincipal)}
              className={classNames({
                [styles.imagemSelecionada]: imagemSelecionado === imagemPrincipal
              })}
            />
            {imagens?.map(imagem => (
              <img 
                src={`/assets/images/estoque/${imagem}`} 
                alt={nome} 
                key={imagem}
                onClick={() => setImagemSelecionado(imagem)}
                className={classNames({
                  [styles.imagemSelecionada]: imagemSelecionado === imagem
                })}
              />
            ))}
          </nav>
          <div className={styles.container__images__imgDescricao}>
            <img 
              className={styles.container__images__imgDescricao__principal} 
              src={`/assets/images/estoque/${imagemSelecionado}`} 
              alt={nome} 
            />
            <div className={styles.container__images__imgDescricao__descricao}>
                <h4>Descrição</h4>
                <div className={styles.line}/>
                <p>{descricao}</p>
            </div>
          </div>
        </div>
        <div className={styles.content}>
          <h2>{nome}</h2>
          <div className={styles.content__avaliacao}>
                <div className={styles.content__avaliacao_stars}>
                  <img src="/assets/images/icons/star.png" alt="star avaliacao" />
                  <img src="/assets/images/icons/star.png" alt="star avaliacao" />
                  <img src="/assets/images/icons/star.png" alt="star avaliacao" />
                  <img src="/assets/images/icons/star.png" alt="star avaliacao" />
                  <img src="/assets/images/icons/star.png" alt="star avaliacao" />
                </div>
                <p className={styles.nota}>5.0</p>
                <p className={styles.avaliacoes_qntd}>(1.000+ avaliações)</p>
          </div>
          <div className={styles.content__preco}>
              {precoPromocao ? 
                <div className={styles.precos}>
                  <p className={styles.precoAntigo}>de R$ <strong>{preco.toFixed(2)}</strong></p>
                  <p className={styles.preco}>por R$ <strong>{precoPromocao.toFixed(2)}</strong></p>
                </div>
              : <p className={styles.preco}>R$ <strong>{preco?.toFixed(2)}</strong></p>
              }
              <p className={styles.parcela}>Em até 6x sem juros</p>
          </div>
          <form action=""
            onSubmit={(e) => e.preventDefault()}
          >
            <InputRadio nome="Cor" selecionado={cor} selecionar={setCor} cores={cores} key="corInput"/>
            <InputRadio nome="Tamanho" selecionado={tamanho} selecionar={setTamanho} tamanhos={tamanhos} key="tamanhoInput"/>
            <input type="submit" value="Comprar" className={styles.submit}/>
          </form>
        </div>
    </div>
  )
}
