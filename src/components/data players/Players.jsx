import React from 'react'
import './players.css'
import Brenner from '../../images/brenner.png'
import Marrony from '../../images/marrony.png'
import Marcos from '../../images/marcos.png'
import Gerson from '../../images/gerson.png'
import {BiFootball} from 'react-icons/bi'

const Players = () => {
  return (
    <section id='Players'>
      <h2>Destaques</h2>
      <div className="container players">
        <article className="players-content">
          <div className="player-image">
            <img className='image' src={Marcos} alt="Marcos Paulo" />
          </div>
          <div className="player-information">
            <h2>Marcos Paulo</h2>
            <article className='player-data'>
              <h3>39 Jogos</h3>
              <h3>33 Gols</h3>
              <h3>1 Assistencias</h3>
            </article>
          </div>
        </article>

        <article className="players-content">
          <div className="player-image">
            <img className='image' src={Gerson} alt="Gerson" />
          </div>
          <div className="player-information">
            <h2>Gerson</h2>
            <article className='player-data'>
              <h3>49 Jogos</h3>
              <h3>5 Gols</h3>
              <h3>19 Assistencias</h3>
            </article>
          </div>
        </article>

      </div>


    </section>
  )
}

export default Players