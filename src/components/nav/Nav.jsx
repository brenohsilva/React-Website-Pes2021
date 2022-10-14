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
    position: '1º',
    page: '/fluminense'
  },
  {
    id: 2,
    image: Flamengo,
    title: 'Flamengo',
    position: '2º',
    page: '/flamengo'
  },
  {
    id: 3,
    image: AtleticoMG,
    title: 'Atletico-MG',
    position: '3º',
    page: '/atleticomg'
  },
  {
    id: 4,
    image: SaoPaulo,
    title: 'São Paulo',
    position: '4º',
    page: '/saopaulo'
  },
  {
    id: 5,
    image: Corinthians,
    title: 'Corinthians',
    position: '5º',
    page: '/corinthians'
  },
  {
    id: 6,
    image: Gremio,
    title: 'Grêmio',
    position: '6º',
    page: '/gremio'
  },
  {
    id: 7,
    image: Palmeiras,
    title: 'Palmeiras',
    position: '7º',
    page: '/palmeiras'
  },
  {
    id: 8,
    image: Internacional,
    title: 'Internacional',
    position: '8º',
    page: '/internacional'
  },
  {
    id: 9,
    image: Bragantino,
    title: 'Bragantino',
    position: '9º',
    page: '/bragantino'
  },
  {
    id: 10,
    image: CAP,
    title: 'Atletico-PR',
    position: '10º',
    page: '/atleticopr'
  },
  {
    id: 11,
    image: Santos,
    title: 'Santos',
    position: '11º',
    page: '/santos'
  },
  {
    id: 12,
    image: Vasco,
    title: 'Vasco',
    position: '12º',
    page: '/vasco'
  },
  {
    id: 13,
    image: Cruzeiro,
    title: 'Cruzeiro',
    position: '13º',
    page: '/cruzeiro'
  },
  {
    id: 14,
    image: Sport,
    title: 'Sport Recife',
    position: '14º',
    page: '/Sport'
  },
  {
    id: 15,
    image: Botafogo,
    title: 'Botafogo',
    position: '15º',
    page: '/botafogo'
  },
  {
    id: 16,
    image: Coritiba,
    title: 'Coritiba',
    position: '16º',
    page: '/coritiba'
  },
  {
    id: 17,
    image: Bahia,
    title: 'Bahia',
    position: '17º',
    page: '/bahia'
  },
  {
    id: 18,
    image: BrasilPelotas,
    title: 'Brasil de Pelotas',
    position: '18º',
    page: '/brasilpelotas'
  },
  {
    id: 19,
    image: Parana,
    title: 'Parana',
    position: '19º',
    page: '/parana'
  },
  {
    id: 20,
    image: Goias,
    title: 'Goias',
    position: '20º',
    page: '/goias'
  },
  {
    id: 21,
    image: Fortaleza,
    title: 'Fortaleza',
    position: '21º',
    page: '/fortaleza'
  },
  {
    id: 22,
    image: Ponte,
    title: 'Ponte Preta',
    position: '22º',
    page: '/pontepreta'
  },
  {
    id: 23,
    image: Chapecoense,
    title: 'Chapecoense',
    position: '23º',
    page: '/chapecoense'
  },
  {
    id: 24,
    image: Ceara,
    title: 'Ceara',
    position: '24º',
    page: '/ceara'
  },
  {
    id: 25,
    image: BotafogoSP,
    title: 'BotafogoSP',
    position: '25º',
    page: '/botafogosp'
  },
  {
    id: 26,
    image: AmericaMG,
    title: 'America-MG',
    position: '26º',
    page: '/americamg'
  },
  {
    id: 27,
    image: Figueirense,
    title: 'Figueirense',
    position: '27º',
    page: '/figueirense'
  },
  {
    id: 28,
    image: Oeste,
    title: 'Oeste',
    position: '28º',
    page: '/oeste'
  },
  {
    id: 29,
    image: Juventude,
    title: 'Juventude',
    position: '29º',
    page: '/juventude'
  },
  {
    id: 30,
    image: Cuiaba,
    title: 'Cuiaba',
    position: '30º',
    page: '/cuiaba'
  },
  {
    id: 31,
    image: Nautico,
    title: 'Nautico',
    position: '31º',
    page: '/nautico'
  },
  {
    id: 32,
    image: Vitoria,
    title: 'Vitória',
    position: '32º',
    page: '/vitoria'
  },
  {
    id: 33,
    image: AtleticoGO,
    title: 'Atletico-GO',
    position: '33º',
    page: '/atleticogo'
  },
  {
    id: 34,
    image: Avai,
    title: 'Avai',
    position: '34º',
    page: '/avai'
  },
  {
    id: 35,
    image: CSA,
    title: 'CSA',
    position: '35º',
    page: '/csa'
  },
  {
    id: 36,
    image: Confianca,
    title: 'Confiança',
    position: '36º',
    page: '/confianca'
  },
  {
    id: 37,
    image: Guarani,
    title: 'Guarani',
    position: '37º',
    page: '/guarani'
  },
  {
    id: 38,
    image: CRB,
    title: 'CRB',
    position: '38º',
    page: '/crb'
  },
  {
    id: 39,
    image: Operario,
    title: 'Operario',
    position: '39º',
    page: '/operario'
  },
  {
    id: 40,
    image: Sampaio,
    title: 'Sampaio Correa',
    position: '40º',
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