import classNames from 'classnames';
import styles from './InputRadio.module.scss'

interface Props {
    nome: string,
    selecionado: any,
    selecionar: React.Dispatch<any>,
    cores?: [{
      cor: string;
      hex: string;
  }],
    tamanhos?: string[]
}

export default function InputRadio({nome, selecionado, selecionar, tamanhos, cores}: Props) {
  console.log(cores)

  return (
    <div className={styles.container}>
        <p>{nome}: <span>{selecionado}</span></p>
        {tamanhos ? 
        <div className={styles.tamanho}>
            {tamanhos?.map(tamanho => (
                <button 
                  onClick={(e) => selecionar(tamanho)} 
                  key={tamanho}
                  className={classNames({
                    [styles.selecionado]: selecionado === tamanho
                  })}
                >
                    {tamanho}
                </button>
            ))}
        </div>
        : <div className={styles.cores}>
          {cores?.map(cor => (
            <button 
              className={classNames({
                [styles.selecionado]: selecionado === cor.cor
              })}
              onClick={(e) => selecionar(cor.cor)}
              style={{background: `${cor.hex}`}}
              key={cor.cor}
            />
          ))}
        </div>
        }
    </div>
  )
}
