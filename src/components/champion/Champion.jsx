import React from 'react'
import './champion.css'
import Fluminense from '../../images/fluminense.png'
import {BiFootball} from 'react-icons/bi'
import {BsCheck2All} from 'react-icons/bs'
import {TbBallFootballOff} from 'react-icons/tb'

const Champion = () => {
  return (
    <section id='champion'>
      <h2>Ultima Temporada</h2>
      <h4>8º Temporada</h4>

    <div className="container champion__container">
      <div className="champion__card">
        <div className="champion-image">
          <img src={Fluminense} alt='Fluminense' />
        </div>
      </div>

      <div className="champion-content">
          <div className="card__title">
            <h2>Campeão</h2>
          </div>
        <div className="champion-cards">  
          <article className='champion-card'>
            <BsCheck2All className='champion-icon'/>
            <h2>23</h2>
            <h4>Vitorias</h4>
          </article>

          <article className='champion-card'>
            <BiFootball className='champion-icon'/>
            <h2>67</h2>
            <h4>Gols Feitos</h4>
          </article>

          <article className='champion-card'>
            <TbBallFootballOff className='champion-icon'/>
            <h2>32</h2>
            <h4>Gols Levados</h4>
          </article>
        </div>
        

      </div>
        


    </div>


    </section>
  )
}

export default Champion