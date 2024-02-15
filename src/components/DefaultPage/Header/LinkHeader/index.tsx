import classNames from 'classnames'
import { ReactElement, useState } from 'react'
import { NavLink } from 'react-router-dom'
import styles from './Link.module.scss'

interface LinkProps {
    children?: string | ReactElement
    to: string
    categ: string[] | null
}

export default function LinkHeader( {children, to, categ}: LinkProps ) {
  const [categoriaDisplay, setCategoriaDisplay] = useState(false)

  function changeCategorias(boolean: boolean){
    setCategoriaDisplay(boolean)
  }

  return (
    <div
      onMouseOver={() => changeCategorias(true)}
      onMouseOut={() => changeCategorias(false)}
    >
      <NavLink
        to={to}
        className={ ( {isActive} ) => classNames( {
            [styles.link]: true,
            [styles.linkDestacado]: isActive
          } )}
        end
      > 
        {children}
      </NavLink>
      <div 
        className={classNames({
          [styles.categorias]: true,
          [styles.on]: categoriaDisplay
        })}
      >
          <ul>
            {categ?.map(categoria => (
              <NavLink 
                to={`${to}/${categoria}`}
                className={styles.opcoes}
                key={categoria}
              >
                {categoria}
              </NavLink>
            ))}
          </ul>
      </div>
    </div>
  )
}
