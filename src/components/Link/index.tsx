import React, { ReactElement } from 'react'
import { NavLink } from 'react-router-dom'
import classNames from 'classnames'
import styles from './Link.module.scss'
import Mosaico from 'components/Mosaico'

interface Props {
    to: string,
    children: ReactElement | string
    mosaico?: boolean
}

export default function Link({to, children, mosaico}: Props) {
  return (
    <NavLink
        className={classNames({
            [styles.mosaicoLink]: Mosaico,
        })}
        to={to}
        end
    >
        {children}
    </NavLink>
  )
}
