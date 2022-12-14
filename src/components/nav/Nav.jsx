import React from 'react'
import './nav.css'
import {Link} from 'react-router-dom'

import Fluminense from '../../images/fluminense.png'
import AtleticoMG from '../../images/atletico_mineiro.png'
import Corinthians from '../../images/corinthians.png'
import Sport from '../../images/sport.png'
import Flamengo from '../../images/flamengo.png'
import SaoPaulo from '../../images/sao_paulo.png'
import Gremio from '../../images/gremio.png'
import Palmeiras from '../../images/palmeiras.png'
import CAP from '../../images/CAP.png'
import Internacional from '../../images/internacional.png'
import Santos from '../../images/santos.png'
import Bragantino from '../../images/bragantino.png'
import Cruzeiro from '../../images/cruzeiro.png'
import Vasco from '../../images/vasco.png'
import Bahia from '../../images/bahia.png'
import Botafogo from '../../images/botafogo.png'
import BrasilPelotas from '../../images/brasil_de_pelotas.png'
import Coritiba from '../../images/coritiba.png'
import Goias from '../../images/goias.png'
import Parana from '../../images/parana.png'
import Ponte from '../../images/ponte_preta.png'
import Chapecoense from '../../images/chapecoense.png'
import Fortaleza from '../../images/fortaleza.png'
import Ceara from '../../images/ceara.png'
import Figueirense from '../../images/figueirense.png'
import Oeste from '../../images/oeste.png'
import Juventude from '../../images/juventude.png'
import BotafogoSP from '../../images/botafogo_ribeirao.png'
import Vitoria from '../../images/vitoria.png'
import Cuiaba from '../../images/cuiaba.png'
import Nautico from '../../images/nautico.png'
import AtleticoGO from '../../images/atletico_goianiense.png'
import Avai from '../../images/Avai.png'
import CSA from '../../images/csa.png'
import Sampaio from '../../images/sampaio_correia.png'
import Guarani from '../../images/guarani.png'
import CRB from '../../images/crb.png'
import Confianca from '../../images/confianca.png'
import Operario from '../../images/operario.png'
import AmericaMG from '../../images/america_mineiro.png'


import {Grid, Pagination} from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/grid';
import 'swiper/css/pagination';

const data = [
  {
    id: 1,
    image: Fluminense,
    title: 'Fluminense',
    position: '1??',
    page: '/fluminense'
  },
  {
    id: 2,
    image: Flamengo,
    title: 'Flamengo',
    position: '2??',
    page: '/flamengo'
  },
  {
    id: 3,
    image: AtleticoMG,
    title: 'Atletico-MG',
    position: '3??',
    page: '/atleticomg'
  },
  {
    id: 4,
    image: SaoPaulo,
    title: 'S??o Paulo',
    position: '4??',
    page: '/saopaulo'
  },
  {
    id: 5,
    image: Corinthians,
    title: 'Corinthians',
    position: '5??',
    page: '/corinthians'
  },
  {
    id: 6,
    image: Gremio,
    title: 'Gr??mio',
    position: '6??',
    page: '/gremio'
  },
  {
    id: 7,
    image: Palmeiras,
    title: 'Palmeiras',
    position: '7??',
    page: '/palmeiras'
  },
  {
    id: 8,
    image: Internacional,
    title: 'Internacional',
    position: '8??',
    page: '/internacional'
  },
  {
    id: 9,
    image: Bragantino,
    title: 'Bragantino',
    position: '9??',
    page: '/bragantino'
  },
  {
    id: 10,
    image: CAP,
    title: 'Atletico-PR',
    position: '10??',
    page: '/atleticopr'
  },
  {
    id: 11,
    image: Santos,
    title: 'Santos',
    position: '11??',
    page: '/santos'
  },
  {
    id: 12,
    image: Vasco,
    title: 'Vasco',
    position: '12??',
    page: '/vasco'
  },
  {
    id: 13,
    image: Cruzeiro,
    title: 'Cruzeiro',
    position: '13??',
    page: '/cruzeiro'
  },
  {
    id: 14,
    image: Sport,
    title: 'Sport Recife',
    position: '14??',
    page: '/Sport'
  },
  {
    id: 15,
    image: Botafogo,
    title: 'Botafogo',
    position: '15??',
    page: '/botafogo'
  },
  {
    id: 16,
    image: Coritiba,
    title: 'Coritiba',
    position: '16??',
    page: '/coritiba'
  },
  {
    id: 17,
    image: Bahia,
    title: 'Bahia',
    position: '17??',
    page: '/bahia'
  },
  {
    id: 18,
    image: BrasilPelotas,
    title: 'Brasil de Pelotas',
    position: '18??',
    page: '/brasilpelotas'
  },
  {
    id: 19,
    image: Parana,
    title: 'Parana',
    position: '19??',
    page: '/parana'
  },
  {
    id: 20,
    image: Goias,
    title: 'Goias',
    position: '20??',
    page: '/goias'
  },
  {
    id: 21,
    image: Fortaleza,
    title: 'Fortaleza',
    position: '21??',
    page: '/fortaleza'
  },
  {
    id: 22,
    image: Ponte,
    title: 'Ponte Preta',
    position: '22??',
    page: '/pontepreta'
  },
  {
    id: 23,
    image: Chapecoense,
    title: 'Chapecoense',
    position: '23??',
    page: '/chapecoense'
  },
  {
    id: 24,
    image: Ceara,
    title: 'Ceara',
    position: '24??',
    page: '/ceara'
  },
  {
    id: 25,
    image: BotafogoSP,
    title: 'BotafogoSP',
    position: '25??',
    page: '/botafogosp'
  },
  {
    id: 26,
    image: AmericaMG,
    title: 'America-MG',
    position: '26??',
    page: '/americamg'
  },
  {
    id: 27,
    image: Figueirense,
    title: 'Figueirense',
    position: '27??',
    page: '/figueirense'
  },
  {
    id: 28,
    image: Oeste,
    title: 'Oeste',
    position: '28??',
    page: '/oeste'
  },
  {
    id: 29,
    image: Juventude,
    title: 'Juventude',
    position: '29??',
    page: '/juventude'
  },
  {
    id: 30,
    image: Cuiaba,
    title: 'Cuiaba',
    position: '30??',
    page: '/cuiaba'
  },
  {
    id: 31,
    image: Nautico,
    title: 'Nautico',
    position: '31??',
    page: '/nautico'
  },
  {
    id: 32,
    image: Vitoria,
    title: 'Vit??ria',
    position: '32??',
    page: '/vitoria'
  },
  {
    id: 33,
    image: AtleticoGO,
    title: 'Atletico-GO',
    position: '33??',
    page: '/atleticogo'
  },
  {
    id: 34,
    image: Avai,
    title: 'Avai',
    position: '34??',
    page: '/avai'
  },
  {
    id: 35,
    image: CSA,
    title: 'CSA',
    position: '35??',
    page: '/csa'
  },
  {
    id: 36,
    image: Confianca,
    title: 'Confian??a',
    position: '36??',
    page: '/confianca'
  },
  {
    id: 37,
    image: Guarani,
    title: 'Guarani',
    position: '37??',
    page: '/guarani'
  },
  {
    id: 38,
    image: CRB,
    title: 'CRB',
    position: '38??',
    page: '/crb'
  },
  {
    id: 39,
    image: Operario,
    title: 'Operario',
    position: '39??',
    page: '/operario'
  },
  {
    id: 40,
    image: Sampaio,
    title: 'Sampaio Correa',
    position: '40??',
    page: '/sampaio'
  }
]

const Nav = () => {
  return (
    <section id='nav'>
      <Swiper className="container nav__container"
      modules={[Grid, Pagination]}
      pagination={{ clickable: true }}
      breakpoints={{
        0: {
            spaceBetween: 15,
            slidesPerView: 2,
          },
        480: {
          spaceBetween: 15,
          slidesPerView: 2,
          },
        768: {
          spaceBetween: 15,
          slidesPerView: 2,
        },
        1024: {
          spaceBetween: 50,
          slidesPerView: 5,
        },
        2048: {
        spaceBetween: 50,
        slidesPerView: 5,
  }
      }}
      
      >
        {
          data.map(({id, image, title, position, page }) => {
            return (
              <SwiperSlide key={id} className='nav__item'> 
                <div className="nav__item-image">
                  <Link to={page}>
                    <img src={image} alt={title}/>
                  </Link>
                </div>
                <h2>{title}</h2>
                <h5>{position}</h5>
              </SwiperSlide>
            )

        
          })
        }
      </Swiper>
    </section>
  )
}

export default Nav