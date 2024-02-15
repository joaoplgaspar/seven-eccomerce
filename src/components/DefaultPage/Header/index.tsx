import Link from 'components/DefaultPage/Header/LinkHeader';
import { useEffect } from 'react';
import { useState } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import {IMercadorias} from 'types/types';
import styles from './Header.module.scss'

export default function Header() {
    const [mercadorias, setMercadorias] = useState<IMercadorias[] | null>()
    const [pesquisa, setPesquisa] = useState<string>('')
    const navigate = useNavigate()

    function pesquisar(){
        navigate(`/pesquisa/${pesquisa}`);
        setPesquisa('')
    }

    async function mercadoriasApi(){
        const response = await fetch("http://localhost:8000/mercadorias");
        const mercadorias = await response.json();
        setMercadorias(mercadorias);
    }
    
    useEffect(() => {
        mercadoriasApi()
    }, [])

    return (
        <div className={styles.container}>
            <div className={styles.container__avisos}>
                <p>Até 60% off em roupas da categoria verão</p>
            </div>
            <header className={styles.container__header}>
                <div className={styles.container__header__head}>
                    <NavLink to="/" className={styles.title}><h1>Seven</h1></NavLink>
                    <div className={styles.inputContainer}>
                        <input 
                            type="text" 
                            placeholder='Procure por um produto' 
                            value={pesquisa}
                            onChange={(e) => setPesquisa(e.target.value)}
                            onKeyDown={(event) => event.code === 'Enter' && pesquisar()}
                        />
                    </div>
                </div>
                <nav>
                    {mercadorias && mercadorias.map(item => {
                        const to = item.nome.toLowerCase()
                        return (
                        <Link 
                            to={`categoria/${to}`} 
                            key={item.nome}
                            categ={item.categorias}
                        >
                            {item.nome}
                        </Link>
                        )
                    })}
                </nav>
            </header>
        </div>
    )
}
