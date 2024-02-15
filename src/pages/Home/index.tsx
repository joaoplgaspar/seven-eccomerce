import Banner from 'components/Banner'
import styles from './Home.module.scss'
import { Carousel } from 'react-responsive-carousel'
import "react-responsive-carousel/lib/styles/carousel.min.css";
import banners from 'json/banners.json'
import Mosaico from 'components/Mosaico';
import mosaicoContent from 'json/mosaico.json'
import Produtos from 'components/Produtos';
import { useEffect, useState } from 'react';

export default function Home() {
  const [novidades, setNovidades] = useState<any>()

    async function novidadesApi(){
        const response = await fetch("http://localhost:8000/estoque?q=novidades");
        const novidades = await response.json();
        setNovidades(novidades);
    }
    
    useEffect(() => {
        novidadesApi()
    }, [])

  return (
    <main className={styles.main}>
        <Carousel showArrows autoPlay infiniteLoop showStatus={false} showThumbs={false} showIndicators interval={3000}>
          {banners.map(banner => <Banner image={banner.image} key={banner.id}/>)}
        </Carousel>
        <Mosaico title='Populares' content={mosaicoContent}/>
        <Produtos title='Novidades' estoque={novidades}/>
    </main>
  )
}
